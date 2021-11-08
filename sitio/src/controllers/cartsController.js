const db = require('../database/models');
const getURL = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`;

const productVerify = (carrito, id) => {
    let index = -1;
    for (let i = 0; i < carrito.length; i++) {

        if (carrito[i].id == id) {
            index = i;
            break
        }
    }
    return index
}

module.exports = {
    show: async (req, res) => {
        try{
            console.log("id usuario: "+req.session.user.id);
            if(req.session.cart.length==0){
                let cart = await db.Cart.findOne({
                    where : {
                        idUser : req.session.user.id,
                        status : 'pending'
                    },
                    include : [
                        {association : 'cart_detail',
                            include : [
                                {association : 'experience',
                                    include : ['category','images']
                                }
                            ]
                        }
                    ]
                })
                console.log(cart);
                if(cart){
                    cart.cart_detail.forEach(item => {
                        let product = {
                            id : item.idExperience,
                            nombre: item.experience.name,
                            imagen : item.experience.images[0].name,
                            categoria : item.experience.category.name,
                            cantidad : item.cantidad,
                            precio : item.experience.price,
                            total : item.experience.price * item.cantidad,
                            idCart : cart.id
                        }
                        req.session.cart.push(product)
                    });
                }
                
            }
            let response = {
                meta: {
                    link: getURL(req)
                },
                data: req.session.cart
            }
            res.status(200).json(response)
        }catch(error){
            console.log(error)

            return res.status(500).json(error)
        }
        

    },
    add: async (req, res) => {
        try {
            let product = await db.Experience.findByPk(req.params.id, {
                include: ['category', 'images']
            })

            let item = {
                id: product.id,
                nombre: product.name,
                imagen: product.images[0].name,
                categoria: product.category.name,
                cantidad: 1,
                precio: product.price,
                total: product.price,
            }
            console.log(item);
            console.log(req.session.cart);
            if (req.session.cart.length == 0) {

                let order = await db.Cart.findOne({
                    where: {
                        idUser: req.session.user.id,
                        status: 'pending'
                    }
                });
                if (!order) {
                    order = await db.Cart.create({
                        idUser: req.session.user.id,
                        status: 'pending',
                        date: new Date(),
                        total: 0
                    })
                }
    
                item = {
                    ...item,
                    idCart: order.id
                }
                req.session.cart.push(item)
                /* persistencia de datos */
                await db.Cart_detail.create({
                    idCart: order.id,
                    idExperience: product.id,
                    idUser: req.session.user.id,
                    cantidad: item.cantidad
                })

            } else {
                let index = productVerify(req.session.cart, req.params.id);
                let order = await db.Cart.findOne({
                    where: {
                        idUser: req.session.user.id,
                        status: 'pending'
                    }
                });
                console.log("index: "+index)
                if (index === -1) {
                    item = {
                        ...item,
                        idCart: order.id
                    }
                    req.session.cart.push(item)

                    /* persistencia de datos */
                    await db.Cart_detail.create({
                        idCart: order.id,
                        idExperience: product.id,
                        idUser: req.session.user.id,
                        cantidad: item.cantidad
                    })

                } else {
                    let product = req.session.cart[index]
                    product.cantidad++;
                    product.total = product.cantidad * product.precio
                    req.session.cart[index] = product

                    /* persistencia de datos */
                    await db.Cart_detail.update(
                        {
                            cantidad : product.cantidad
                        },
                        {
                            where : { 
                                idCart : product.idCart,
                                idExperience : product.id
                            }
                        }
                    )

                }
            }

            let response = {
                meta: {
                    link: getURL(req)
                },
                data: req.session.cart
            }
            return res.status(200).json(response)

        } catch (error) {
            console.log(error)

            return res.status(500).json(error)
        }
    },
    remove: async (req, res) => {
        try {
            let index = productVerify(req.session.cart, req.params.id);
            let product = req.session.cart[index];

            if (product.cantidad > 1) {
                product.cantidad--;
                product.total = product.cantidad * product.precio
                req.session.cart[index] = product;

                   /* persistencia de datos */
                   await db.Cart_detail.update(
                    {
                        cantidad : product.cantidad
                    },
                    {
                        where : { 
                            idCart : product.idCart,
                            idExperience : product.id
                        }
                    }
                )

            } else {
                req.session.cart.splice(index, 1);

                   /* persistencia de datos */

                await db.Cart_detail.destroy({
                    where : {
                        idExperience : product.id,
                        idCart : product.idCart
                    }
                })
            }

            let response = {
                meta: {
                    link: getURL(req)
                },
                data: req.session.cart
            }
            return res.status(200).json(response)

        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    },
    empty: async (req, res) => {
        try {

            await db.Cart_detail.destroy({
                where : {
                    idUser : req.session.user.id,
                    statusCart : 'pending'
                }
            })

            req.session.cart = [];

            let response = {
                meta: {
                    link: getURL(req)
                },
                data: req.session.cart
            }
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }

    },
    checkout: async (req,res) =>{
        try {
            if(req.session.user && req.session.cart && req.session.cart.length > 0){
                await db.Cart_detail.update(
                    {
                        statusCart : 'complete'
                    },
                    {
                        where : {
                            idUser : req.session.user.id,
                            statusCart : 'pending'
                        }
                    }
                )
    
                await db.Cart.update(
                    {
                        status : 'complete'
                    },
                    {
                        where : {
                            idUser : req.session.user.id,
                            status : 'pending'
                        }
                    }
                )
    
                req.session.cart = [];
    
                let response = {
                    meta: {
                        link: getURL(req),
                        status: 200
                    },
                    data: req.session.cart
                }
                return res.status(200).json(response)
            }else{
                let response = {
                    meta: {
                        link: getURL(req),
                        status: 202
                    }
                }
                return res.status(202).json(response)
            }
            
        } catch (error) {
            console.log(error)
            let response = {
                meta: {
                    link: getURL(req),
                    status: 500,
                    error: error
                }
            }
            return res.status(500).json(response)
        }
    }
}
//const $ = id => document.getElementById(id);
const query = new URLSearchParams(location.search);
const actualizarTabla = productos =>{
    $("cp-tabla-productos").innerHTML="";
    for(let i=1;i<=productos.length;i++){
        $("cp-tabla-productos").innerHTML+=
        `<tr>
          <th class="letraBlanca" scope="row" >${i}</th>
          <td>
          <input type="text" class="sinFormato" name="product${i}" id="cp-product${i}" value="${productos[i-1]}">
          </td>
          <td>
            <button class="btnEliminar" id="cp-eliminar-product${i}">X</button>
          </td>
          </tr>`;
          //vuelvo a poner los botones de eliminar en escucha
          $("cp-eliminar-product"+i).addEventListener("click",event=>{
            event.preventDefault();
            console.log("hiciste click en boton "+i);
            productos = eliminarProducto(productos,i);
            let cantidadProductos = sessionStorage.getItem("cantidadProductos");
            cantidadProductos--;
            sessionStorage.setItem("cantidadProductos",cantidadProductos);
            $("cp-cantidadProductos").value = cantidadProductos;
            console.log(productos);
            console.log(cantidadProductos);
        })
    }

}
const eliminarProducto = (productos,i) =>{
    //elimino de vector productos
    productos.splice(i-1,1);
    actualizarTabla(productos);
    return productos;
}
const validoNombre = nombre =>{
    let respuesta = "";
    if(nombre.value==""){
        respuesta="El campo nombre es requerido";
    }else if(nombre.value.length<3){
        respuesta="El nombre debe superar los 3 caracteres";
    }else if(nombre.value.length>30){
        respuesta="El nombre no debe superar los 30 caracteres";
    }
    return respuesta;
};
const validoDescripcion = descripcion =>{
    let respuesta = "";
    if(descripcion.value==""){
        respuesta="El campo descripción es requerido";
    }else if(descripcion.value.length<50){
        respuesta="La descripción debe superar los 50 caracteres";
    }else if(descripcion.value.length>300){
        respuesta="La descripción no debe superar los 300 caracteres";
    }
    return respuesta;
}
const validoPrecio = precio =>{
    let respuesta="";
    if(precio.value==""){
        respuesta="El campo precio es requerido";
    }else if(isNaN(precio.value)){
            respuesta="El precio solo recibe caracteres numéricos";
    }
    return respuesta
}
const validoCategoria = categoria =>{
    let respuesta="";
    if(categoria.value==""){
        respuesta="Debe seleccionar una categoría";
    }
    return respuesta;
}
const validoKeywords = keywords =>{
    let respuesta = "";
    if(keywords.value==""){
        respuesta="El campo keywords es requerido";
    }else if(keywords.value.length<3){
        respuesta="La palabra clave debe superar los 3 caracteres";
    }else if(keywords.value.length>30){
        respuesta="Las palabras claves no debe superar los 30 caracteres";
    }
    return respuesta;
};
const validoProducto = (producto,cantidadProductos) =>{
    let respuesta = "";
    if(cantidadProductos<2){
        respuesta="Debe ingresar al menos dos productos para esta experiencia";
    }else if(producto=="" || producto.length<3){
        respuesta="El producto debe superar los 3 caracteres";
    }else if(producto.length>30){
        respuesta="El producto no debe superar los 30 caracteres";
    }
    return respuesta;
};

window.addEventListener("load",()=>{
    //todos los eventos se correràn solo si estoy en la ruta de agregar producto
    if(location.pathname == '/admin/producto/agregar' || ($("cp-id") && location.pathname == '/admin/producto/modificar/'+$("cp-id").value)){
        let cantidadProductos=0;//contador de los productos q se van agregando
        sessionStorage.setItem("cantidadProductos",cantidadProductos);
        let productos=[];//array con los productos que se van agregando

        //veo si estoy en productUpdate o en productLoad para inicializar cantidadProductos y productos
        if($("cp-id")){
            cantidadProductos=$("cp-cantidadProductos").value;//contador de los productos q se van agregando
            sessionStorage.setItem("cantidadProductos",cantidadProductos);
            for(let i=1;i<=cantidadProductos;i++){
                productos.push($("cp-product"+i).value);
            }
        }
        $("cp-cantidadProductos").value = cantidadProductos;
        console.log(cantidadProductos);
        console.log(productos);
        //freno la accion de enter de enviar el formulario
        $("create-product-form").addEventListener("keyup",e=>{
            if(e.keyCode==13){
                e.preventDefault();
            }
        })
        $("create-product-form").addEventListener("keydown",e=>{
            if(e.keyCode==13){
                e.preventDefault();
            }
        })
        $("create-product-form").addEventListener("keypressed",e=>{
            if(e.keyCode==13){
                e.preventDefault();
            }
        })
        //evento submit del formulario
        $("create-product-form").addEventListener("submit",e=>{
          
            let errores = [];
            //capturo los inputs
            let nombre = $("cp-nombre");
            let descripcion = $("cp-descripcion");
            let categoria = $("cp-categoria");
            let precio = $("cp-precio");
            let keywords = $("cp-keywords");
            //valido nombre
            let respuesta = validoNombre(nombre) 
            if(respuesta!=""){
                errores.push(respuesta);
                $("cp-nombre-error").innerText=respuesta;
            }
            //valido descripcion
            respuesta = validoDescripcion(descripcion) 
            if(respuesta!=""){
                errores.push(respuesta);
                $("cp-descripcion-error").innerText=respuesta;
            }
            //valido precio
            respuesta = validoPrecio(precio) 
            if(respuesta!=""){
                errores.push(respuesta);
                $("cp-precio-error").innerText=respuesta;
            }
            //valido categoria
            respuesta = validoCategoria(categoria) 
            if(respuesta!=""){
                errores.push(respuesta);
                $("cp-categoria-error").innerText=respuesta;
            }
            //valido keywords
            respuesta = validoKeywords(keywords) 
            if(respuesta!=""){
                errores.push(respuesta);
                $("cp-keywords-error").innerText=respuesta;
            }
            //valido los productos
            productos.forEach((producto)=>{
                respuesta = validoProducto(producto,cantidadProductos);
                if(respuesta!=""){
                    errores.push(respuesta);
                    $("cp-product-error").innerText=respuesta;
            }
            })
            //veo si hubo errores
            if(errores.length>0){
                e.preventDefault();
                errores.forEach(error=>console.log(error));
            }
        });
        //eventos del input nombre
        $("cp-nombre").addEventListener("focus",e=>{
            let nombre = $("cp-nombre");
            $("cp-nombre-error").innerText=validoNombre(nombre);
        });
        $("cp-nombre").addEventListener("blur",e=>{
            $("cp-nombre-error").innerText="";
        });
        $("cp-nombre").addEventListener("keyup",e=>{
            let nombre = $("cp-nombre");
            $("cp-nombre-error").innerText=validoNombre(nombre);
        });
        //eventos del input descripcion
        $("cp-descripcion").addEventListener("focus",e=>{
            let descripcion = $("cp-descripcion");
            $("cp-descripcion-error").innerText=validoDescripcion(descripcion);
        });
        $("cp-descripcion").addEventListener("blur",e=>{
            $("cp-descripcion-error").innerText="";
        });
        $("cp-descripcion").addEventListener("keyup",e=>{
            let descripcion = $("cp-descripcion");
            $("cp-descripcion-error").innerText=validoDescripcion(descripcion);
        });
        //eventos del input precio
        $("cp-precio").addEventListener("focus",e=>{
            let precio = $("cp-precio");
            $("cp-precio-error").innerText=validoPrecio(precio);
        });
        $("cp-precio").addEventListener("blur",e=>{
            $("cp-precio-error").innerText="";
        });
        $("cp-precio").addEventListener("keyup",e=>{
            let precio = $("cp-precio");
            $("cp-precio-error").innerText=validoPrecio(precio);
        });
        //eventos del input keywords
        $("cp-keywords").addEventListener("focus",e=>{
            let keywords = $("cp-keywords");
            $("cp-keywords-error").innerText=validoKeywords(keywords);
        });
        $("cp-keywords").addEventListener("blur",e=>{
            $("cp-keywords-error").innerText="";
        });
        $("cp-keywords").addEventListener("keyup",e=>{
            let keywords = $("cp-keywords");
            $("cp-keywords-error").innerText=validoKeywords(keywords);
        });
        //eventos del input categoria
        $("cp-categoria").addEventListener("change",e=>{
            let categoria = $("cp-categoria");
            $("cp-categoria-error").innerText=validoCategoria(categoria);
        });
        $("cp-categoria").addEventListener("blur",e=>{
            $("cp-categoria-error").innerText="";
        });
        //eventos del input producto
        $("cp-product").addEventListener("focus",e=>{
            let product = $("cp-product").value;
            cantidadProductos = sessionStorage.getItem("cantidadProductos");
            $("cp-product-error").innerText=validoProducto(product,cantidadProductos);
        });
        $("cp-product").addEventListener("blur",e=>{
            $("cp-product-error").innerText="";
        });
        $("cp-product").addEventListener("change",e=>{
            let product = $("cp-product").value;
            cantidadProductos = sessionStorage.getItem("cantidadProductos");
            $("cp-product-error").innerText=validoProducto(product,cantidadProductos);
        });
        //evento de agregar cada nuevo producto a la tabla
        $("cp-product").addEventListener("keyup",e=>{
            let product = $("cp-product");
            cantidadProductos = sessionStorage.getItem("cantidadProductos");
            $("cp-product-error").innerText=validoProducto(product.value,cantidadProductos);
            if(e.keyCode==13){
                e.preventDefault();
                if($("cp-product").value.length>2){
                    cantidadProductos++;
                    sessionStorage.setItem("cantidadProductos",cantidadProductos);
                    //input oculto que me enviara en el formulario la cantidad de productos ingresada
                    //necesaria para hacer la validacion backend
                    $("cp-cantidadProductos").value = cantidadProductos;
                    productos.push(product.value);
                    //agrego linea de la tabla con input dentro para poder acceder desde el req.body
                    $("cp-tabla-productos").innerHTML+=
                    `<tr>
                    <th class="letraBlanca" scope="row" >${cantidadProductos}</th>
                    <td>
                    <input type="text" class="sinFormato" name="product${cantidadProductos}" value="${product.value}">
                    </td>
                    <td>
                    <button class="btnEliminar" id="cp-eliminar-product${cantidadProductos}">X</button>
                    </td>
                    </tr>`
                    //seteo el input producto
                    product.value="";
                    //agrego la escucha del boton eliminar del nuevo producto
                    $("cp-eliminar-product"+cantidadProductos).addEventListener("click",event=>{
                        event.preventDefault();
                        console.log("hiciste click en boton "+cantidadProductos);
                        productos = eliminarProducto(productos,cantidadProductos);
                        cantidadProductos--;
                        sessionStorage.setItem("cantidadProductos",cantidadProductos);
                        $("cp-cantidadProductos").value = cantidadProductos;
                    })
                }else{
                    $("cp-product-error").innerText="Cada producto debe tener al menos tres caracteres";
                }
                
            }
        });
        for(let j=1;j<=cantidadProductos;j++){
            $("cp-eliminar-product"+j).addEventListener("click",event=>{
                event.preventDefault();
                console.log("hiciste click en boton "+j);
                productos = eliminarProducto(productos,j);
                cantidadProductos--;
                sessionStorage.setItem("cantidadProductos",cantidadProductos);
                $("cp-cantidadProductos").value = cantidadProductos;
            })
        }
    }
    
   

})
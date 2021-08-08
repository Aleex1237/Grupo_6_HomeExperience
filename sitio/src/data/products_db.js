const fs=require("fs");
const path=require("path");

const productos_db={
    leer: ()=> JSON.parse(fs.readFileSync(path.join(__dirname, "products.json"),"utf-8")),
    
    guardar: (productos)=>{
        fs.writeFileSync(path.join(__dirname, "products.json"), JSON.stringify(productos,null,2), "utf-8");
    },
     
    obtenerProximoId: ()=>{
        let productos=productos_db.leer();
        return (productos[productos.length-1].id +1);
    }
}

module.exports=productos_db 
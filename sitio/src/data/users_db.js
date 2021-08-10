const fs=require("fs");
const path=require("path");

const usuarios_db={
    leer: ()=> JSON.parse(fs.readFileSync(path.join(__dirname, "users_db.json"),"utf-8")),
    
    guardar: (usuarios)=>{
        fs.writeFileSync(path.join(__dirname, "users_db.json"), JSON.stringify(usuarios,null,2), "utf-8");
    }
}

module.exports= usuarios_db
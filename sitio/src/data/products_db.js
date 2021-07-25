const fs=require("fs");
const path=require("path");

const productos_db=JSON.parse(fs.readFileSync(path.join(__dirname, "products.json"),"utf-8"))

module.exports=productos_db 
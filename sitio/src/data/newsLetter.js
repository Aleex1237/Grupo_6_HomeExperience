const fs = require("fs");
const path = require("path");

module.exports = {
  leer: () =>
    JSON.parse(
      fs.readFileSync(path.join(__dirname, "newsLetter.json"), "utf-8")
    ),

    guardar: (notice)=>{
        fs.writeFileSync(path.join(__dirname, "newsLetter.json"), JSON.stringify(notice,null,2), "utf-8");
    },
};

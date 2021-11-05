const db = require("../../database/models");

module.exports = {
  admin: (req, res) => {
    db.Experience.findAll({attributes:["id","name","price","active"],
      include: [
        {
          association: "images",
        },
        {
          association: "category",
        },
      ],
    })
      .then((productos) => res.status(200).json({status:200,total:productos.length,data:productos}))
      .catch((error) => console.log(error));
  },
};

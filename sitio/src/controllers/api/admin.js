const db = require("../../database/models");
const { Op } = require("sequelize");

module.exports = {
  admin: (req, res) => {
    db.Experience.findAll({
      attributes: ["id", "name", "price", "active"],
      include: [
        {
          association: "images",
        },
        {
          association: "category",
        },
      ],
    })
      .then((productos) =>
        res
          .status(200)
          .json({ status: 200, total: productos.length, data: productos })
      )
      .catch((error) => console.log(error));
  },
  search: async (req, res) => {
    try {
      console.log(req.query.searchProducts);
      let products = await db.Experience.findAll({
        include: [
          { association: "images" },
          { association: "category" },
          { association: "keywords" },
        ],
        where: {
          name: {
            [Op.substring]: req.query.searchProducts,
          },
        },
      });

      return res
        .status(200)
        .json({ status: 200, total: products.length, data: products });
    } catch (error) {
      console.log(error);
    }
  },
};

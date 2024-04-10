const db = require("../../database/models");

module.exports = (req, res) => {
  const { id } = req.params;

  db.Products.findByPk(id, {
    include: ["image", "category"],
  })
    .then((product) => {
      if (product) {
        db.Products.findAll({
          where: {
            categoryId: product.categoryId,
            id: { [db.Sequelize.Op.not]: product.id }, // Exclude the current product from related products
          },
          include: ["image", "category"],
        }).then((relateds) => {
          return res.render("products/product-detail", {
            ...product.dataValues,
            relateds,
          });
        });
      } else {
        return res.status(404).send("Producto no encontrado");
      }
    })
    .catch((error) => console.log(error));
};

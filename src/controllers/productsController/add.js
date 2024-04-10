const db = require("../../database/models");

module.exports = (req, res) => {
  const categories = db.Category.findAll({ 
    order: ["name"],
    attributes : ['id','name']
  });
  const materiales = db.Material.findAll({ order: ["name"] }); // Obtener todos los materiales
  const compatibilities = db.Capabilitie.findAll({ order: ["name"] }); // Obtener datos de la tabla 4
  const typeproductes = db.Typeproducts.findAll({ order: ["name"] }); // Obtener datos de la tabla 4

  Promise.all([categories, materiales, compatibilities, typeproductes])
    .then(([categories, materiales, compatibilities, typeproductes]) => {
      return res.render("products/product-add", {
        categories,
        materiales,
        compatibilities,
        typeproductes,
      });
    })

    .catch((error) => console.log(error));


};

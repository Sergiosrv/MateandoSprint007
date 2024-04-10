const { existsSync, unlinkSync } = require("fs");

const db = require("../../database/models");

module.exports = (req, res) => {
  const { id } = req.params;

  db.Products.findByPk(id, {
    include: ["images", ],
  }).then(({ image, images, }) => {

 
    existsSync("public/images/products/" + image) &&
      unlinkSync("public/images/products/" + image);

    images.forEach((image) => {
      existsSync("public/images/products/" + image.file) &&
        unlinkSync("public/images/products/" + image.file);
    });

    db.Image.destroy({
        where : {
          productsId : id
        }
    }).then(() => {

        db.Products.destroy({
            where : {
                id
            }
        }) .then(() => {
                return res.redirect('/admin')
            })
        }) 
    })

  
    .catch(error => console.log(error))


};
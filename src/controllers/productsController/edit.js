const db = require('../../database/models')

module.exports = (req,res) => {

    const {id} = req.params;

    const resto = db.Products.findByPk(id, {
        include : ['category','typeproducts','materials','capabilitie']
    })
    const categories = db.Category.findAll({
        order: [['name']]
    })
    const typeproductes = db.Typeproducts.findAll({
        order: [['name']]
    })
    const materiales = db.Material.findAll({
        order: [['name']]
    })
    const compatibilities = db.Capabilitie.findAll({
        order: [['name']]
    })
        Promise.all([resto, categories, typeproductes, materiales,compatibilities])
        .then(([resto, categories, typeproductes,materiales,compatibilities]) => {
            return res.render('products/product-edit',{
                ...resto.dataValues,
                categories,
                typeproductes,
                materiales,
                compatibilities
            })
        })
        .catch(error => console.log(error))




}
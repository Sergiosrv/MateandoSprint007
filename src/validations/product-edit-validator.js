const {check,body} = require('express-validator');

module.exports = [
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('typeproductsId')
        .notEmpty().withMessage('El tipod de producto es obligatorio'),
    check('categoryId')
        .notEmpty().withMessage('La categoría es requerida'),
    check('price')
        .notEmpty().withMessage('El precio es requerido'),  
    check('quantityInStock')
        .notEmpty().withMessage('la cantidad disponible es necesaria'),
        check('compatibilitieId')
        .notEmpty().withMessage('La compacidad es requerida'),
        check('brand')
        .notEmpty().withMessage('La marca es requerida'),
        check('tamanio')
        .notEmpty().withMessage('La tamaño es requerida'),
        check('color')
        .notEmpty().withMessage('El color es requerida'),
        check('discount')
        .notEmpty().withMessage('El descuento es requerida'),
        body('mainImage')
        .custom((value, {req}) => {
            if(!req.files.mainImage){
                return false
            }
            return true
        }).withMessage('Se require una imagen'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min: 20,
            max: 500
        }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
        body('mainImage')
        .custom((value, { req }) => {
          if (!req.files || !req.files.mainImage) {
            throw new Error('La imagen principal es requerida');
          }
          return true;
        }),
    
      body('images')
        .custom((value, { req }) => {
          if (!req.files || !req.files.images || req.files.images.length === 0) {
            throw new Error('Al menos una imagen es requerida');
          }
          return true;
        })        
]
const express = require("express");
const {
  index,
  cart,
  mateartips,
  preguntas_frecuentres,
  contacto,
  admin,
  terminos_y_condiciones,
  searchAdmin,
  searchAdmin2,
} = require("../controllers/indexController");
const checkAdmin = require("../middlewares/checkAdmin");
const { get } = require("http");
const router = express.Router();

/* GET home page. */
router

  .get("/", index, )

  .get("/carrito", cart)
  .get("/mateartips", mateartips)
  .get("/contacto", contacto)
  .get("/preguntas_frecuentes", preguntas_frecuentres)
  .get("/admin", checkAdmin, admin)
  .get("/admin/productos/buscar", checkAdmin, searchAdmin)
  .get("/terminos-y-condiciones", terminos_y_condiciones)
  .get("/productos/buscar", searchAdmin2)
  
module.exports = router;

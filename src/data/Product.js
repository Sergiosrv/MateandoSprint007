const crypto = require("crypto");

function Product( producto, name,material,marca,category,precio,color,cantidad,capacidad,tamanio,descuento,mainImage, description



 
  ) {
   
    this.id =  lastID +1;
    this.producto = producto;
    this.name = name.trim();
    this.material = material;
    this.marca = marca.trim();
    this.category = category;
    this.precio = precio.trim();
    this.color = color;
    this.cantidad = cantidad.trim();
    this.capacidad =capacidad;
    this.tamanio = tamanio.trim();
    this.descuento = descuento.trim();
    this.mainImage = mainImage ? mainImage.filename : null;
    this.images = [];
    this.description = description.trim();
   
  }  

module.exports = Product;

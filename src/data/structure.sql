-- Crear base de datos -- 
CREATE SCHEMA `andomateando_db` ;

-- Crear trabla categories / CATEGORIAS
CREATE TABLE `andomateando_db`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `image` VARCHAR(100) NULL DEFAULT 'default.png',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);

-- Crear trabla products / PRODUCTOS
CREATE TABLE `andomateando_db`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `price` INT NOT NULL,
  `discount` INT NULL DEFAULT 0,
  `quantityInStock` INT NULL DEFAULT 0,
  `categoryId` INT NULL,
  PRIMARY KEY (`id`));
  
  -- Agregar relacion entre products y categories / PRODUCTOS Y CATEGORIAS
  ALTER TABLE `andomateando_db`.`products` 
ADD INDEX `fk_products_categories_idx` (`categoryId` ASC) VISIBLE;
;
ALTER TABLE `andomateando_db`.`products` 
ADD CONSTRAINT `fk_products_categories`
  FOREIGN KEY (`categoryId`)
  REFERENCES `andomateando_db`.`categories` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- Crear tabla de roles
CREATE TABLE `andomateando_db`.`roles` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id`));

-- Crear tabla de usuarios relacionada con los roles
CREATE TABLE `andomateando_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL DEFAULT '1',
  `rolId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_roles_idx` (`rolId` ASC) VISIBLE,
  CONSTRAINT `fk_users_roles`
    FOREIGN KEY (`rolId`)
    REFERENCES `andomateando_db`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- Crear tabla de orders / pedidos que realiza el usuario
CREATE TABLE `andomateando_db`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `total` INT NOT NULL,
  `usersId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_orders_users_idx` (`usersId` ASC) VISIBLE,
  CONSTRAINT `fk_orders_users`
    FOREIGN KEY (`usersId`)
    REFERENCES `andomateando_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- Crear tabla order_cart / carrito de ordenes y sus relaciones con ususario,productos,orden
CREATE TABLE `andomateando_db`.`order_cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productId` INT NOT NULL,
  `orderId` INT NOT NULL,
  `quantity` INT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  INDEX `fk_order_cart_products_idx` (`productId` ASC) VISIBLE,
  INDEX `fk_order_cart_orders_idx` (`orderId` ASC) VISIBLE,
  CONSTRAINT `fk_order_cart_products`
    FOREIGN KEY (`productId`)
    REFERENCES `andomateando_db`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_cart_orders`
    FOREIGN KEY (`orderId`)
    REFERENCES `andomateando_db`.`orders` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Crear tabla sizes / tipos de tamaños de productos
CREATE TABLE `andomateando_db`.`sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
  -- Crear tabla product_size asociada a cada producto / tamaño segun corresponda
  CREATE TABLE `andomateando_db`.`product_size` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productId` INT NOT NULL,
  `sizeId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_size_sizes_idx` (`sizeId` ASC) VISIBLE,
  INDEX `fk_product_size_products_idx` (`productId` ASC) VISIBLE,
  CONSTRAINT `fk_product_size_sizes`
    FOREIGN KEY (`sizeId`)
    REFERENCES `andomateando_db`.`sizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_size_products`
    FOREIGN KEY (`productId`)
    REFERENCES `andomateando_db`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    
    -- Crear tabla de brands / marcas de productos
    CREATE TABLE `andomateando_db`.`brands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


-- Agregando brandId a la tabla products / agregando y asociando producto y marca
ALTER TABLE `andomateando_db`.`products` 
ADD COLUMN `brandId` INT NULL AFTER `categoryId`,
ADD INDEX `fk_products_brand_idx` (`brandId` ASC) VISIBLE;
;
ALTER TABLE `andomateando_db`.`products` 
ADD CONSTRAINT `fk_products_brand`
  FOREIGN KEY (`brandId`)
  REFERENCES `andomateando_db`.`brands` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  
  -- Crear tabla colors / tabla de colores
  CREATE TABLE `andomateando_db`.`colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


-- Crear tabla product_color / asociando el producto con el color
CREATE TABLE `andomateando_db`.`product_color` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productId` INT NULL,
  `colorId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_color_colors_idx` (`colorId` ASC) VISIBLE,
  INDEX `fk_product_color_products_idx` (`productId` ASC) VISIBLE,
  CONSTRAINT `fk_product_color_colors`
    FOREIGN KEY (`colorId`)
    REFERENCES `andomateando_db`.`colors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_color_products`
    FOREIGN KEY (`productId`)
    REFERENCES `andomateando_db`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);





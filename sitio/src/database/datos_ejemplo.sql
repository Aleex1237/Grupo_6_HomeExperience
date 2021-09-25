-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: home_experience
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cart_detail`
--

LOCK TABLES `cart_detail` WRITE;
/*!40000 ALTER TABLE `cart_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'bar'),(2,'cine');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `experiences`
--

LOCK TABLES `experiences` WRITE;
/*!40000 ALTER TABLE `experiences` DISABLE KEYS */;
INSERT INTO `experiences` VALUES (1,'Viaje a Mexico','Siente la frescura del viento en las calidas playas de Cancun mientras tomas Mezcal y comes unos deliciosos PLATANOS FRITOS con Dulce de CALABAZA.',3500,1,1),(2,'Experiencia Mexico','Degusta los mejores sabores de este increible pais.\r\nTequila y tacos que harán que te salgan bigotes!!.',5500,1,1),(3,'Experiencia Escosesa','Los escoseses son gente muy animada y están muy orgullosos de su cultura.\r\nDegustá bebidas y comidas tipicas comidas de esta region.',7000,1,1),(4,'Experiencia Cordoba','Siente el aire fresco de las sierras sin salir de tu casa. Podrás degustar los mejores alfajores cordobeses y para completar, recibiras un fernet artesanal elaborado en la region y mas sorpresas para deleitar',3000,1,1),(5,'Experiencia El Padrino','Sientete como Don Vito Corleone en la famosa pelicula El Padrino y prepara este Cóctel Majestuoso.\r\nEsta experiencia te proporciona todo lo que vas a necesitar para elaborar el cóctel Godfather',7500,1,2),(6,'Experiencia Piratas del Caribe','Prepara la bebida que mantuvo vivo a Jack Sparrow a lo largo de todas sus aventuras.\r\nConoce el \"Grog\", cuyo origen se debe al almirante ingles Edward Bernord, apodado por sus subordinados \"Old Grog\".',4500,1,2),(7,'Harry Potter','Sientete un mago de verdad y no un Muggle. Con esta experiencia podrás degustar los mejores y mas alocados productos del mundo de Harry Potter.',4500,1,2),(8,'Experiencia Avengers','El Poderoso dios de la mitologia Nordica retomado por los Avengers tiene la capacidad de volar y manipular el clima, entre sus otros atributos sobre humanos. Thor, fue motivo de inspiracion para degustar un delicioso Cóctel.',7500,1,2),(9,'Once Upon A time In Hollywood','El personaje de Di caprio, alcoholico, triste, con cero capacidad de reirse de si mismo, es a la vez entrañable y gracioso y le da la oportunidad al personaje de Brad Pitt de ser una excelente contraparte. Prueba el Cóctel Dirty Shirley Temple, su bebida favorita.',5000,1,2);
/*!40000 ALTER TABLE `experiences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'indefinido'),(2,'masculino'),(3,'femenino'),(4,'no binario');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'_img_1628599248145.jfif',1),(2,'_img_1628601961440.jpg',2),(3,'_img_1628602187318.jpeg',3),(4,'_img_1628599559321.jpg',4),(5,'_img_1628599824867.jpg',5),(6,'_img_1628600256190.jpg',6),(7,'_img_1628600653387.jpg',7),(8,'_img_1628601266534.jpg',8),(9,'_img_1628601819255.jpg',9);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `keywords`
--

LOCK TABLES `keywords` WRITE;
/*!40000 ALTER TABLE `keywords` DISABLE KEYS */;
INSERT INTO `keywords` VALUES (1,'Viaje'),(2,'Mexico'),(3,'Cancun'),(4,'Bar'),(5,'Tequila'),(6,'Tacos'),(7,'Escocia'),(8,'Whisky'),(9,'Cordoba'),(10,'Sierras'),(11,'Fernet'),(12,'Cine'),(13,'Clasico'),(14,'Mafia'),(15,'Piratas'),(16,'Pelicula'),(17,'Caribe'),(18,'Ron'),(19,'Magia'),(20,'Varita'),(21,'Magos'),(22,'Fantasia'),(23,'Heroes'),(24,'Marvel'),(25,'Comedia'),(26,'Hollywood');
/*!40000 ALTER TABLE `keywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `keywords_experience`
--

LOCK TABLES `keywords_experience` WRITE;
/*!40000 ALTER TABLE `keywords_experience` DISABLE KEYS */;
INSERT INTO `keywords_experience` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,2,2),(6,2,4),(7,2,5),(8,2,6),(9,3,1),(10,3,7),(11,3,8),(12,4,9),(13,4,10),(14,4,11),(15,5,12),(16,5,13),(17,5,14),(18,6,15),(19,6,16),(20,6,17),(21,6,18),(22,7,19),(23,7,20),(24,7,21),(25,7,22),(26,8,23),(27,8,24),(28,9,16),(29,9,25),(30,9,26);
/*!40000 ALTER TABLE `keywords_experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Botellas Mezcal x2',1),(2,'Platanos Fritos x12',1),(3,'Dulce De Calabaza 400gr',1),(4,'Botella Tequila x1',2),(5,'Limon x2',2),(6,'Tacos x12',2),(7,'Salsa Picante x1',2),(8,'Botella de Whisky x1',3),(9,'Salmon Escoses Ahumado x1',3),(10,'Empanadillas x12',3),(11,'Fernet Artesanal x1',4),(12,'Alfajores Cordobeses x12',4),(13,'Criollito x1KG',4),(14,'Salame de colonia Caroya XG x1',4),(15,'Whisky Escoces x1',5),(16,'Botella de Amaretto x1',5),(17,'Angostura 250cc',5),(18,'Jugo de Limon 200ml',5),(19,'Botella de Ron x1',6),(20,'Jugo de lima 200ml',6),(21,'Azucar 200gr',6),(22,'Hielo 1kg',6),(23,'Cerveza de manteca x2',7),(24,'Grajeas  x24',7),(25,'Ranas de chocolate x12',7),(26,'Capa de invisibilidad x1',7),(27,'Hidromiel x1',8),(28,'Licor de manzana x1',8),(29,'Licor de canela x1',8),(30,'Vodka negro x1',8),(31,'Lata de Ginger Ale x1',9),(32,'Botella de granadina x1',9),(33,'Cereza marasquino x1',9),(34,'Botella de Vodka x1',9);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'superadmin'),(2,'admin'),(3,'user');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `suscriptions`
--

LOCK TABLES `suscriptions` WRITE;
/*!40000 ALTER TABLE `suscriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `suscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Super','superAdmin@hotmail.com','$2a$10$1jkuKJgHreBaiCympLw4hekhCO.b7Eo9BNc0yP/nJ/KJlsCWigoM6','1918-10-10','default.png',1,1,1,1),(2,'Admin','admin@hotmail.com','$2a$10$MN3wsiukBqAVNHrwfyGjkuQybJIwtB36JD1.xCRtUetWSJoKI7Ixm','1929-08-09','default.png',1,2,2,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-24 17:19:27

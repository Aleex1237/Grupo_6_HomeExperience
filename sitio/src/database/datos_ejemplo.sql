-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: home_experience
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
INSERT INTO `cart` VALUES (5,2,'2021-11-05 19:49:58',0,'pending');
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
INSERT INTO `experiences` VALUES (18,'Experiencia Pulp Fiction','Si sos fanático del aclamado director Quentin Tarantino ¡Sin dudas esta es tu experiencia! Película lanzada en el 1994 y protagonizada, entre otros, por John Travolta, Uma Thurman y Samuel Jackson\r\n\r\n',1800,1,2),(19,'Experiencia Parasite','Sentite dentro del mundo diseñado por el aclamado director Bong Joon-ho. Película ganadora del Óscar en el año 2019',2300,1,2),(20,'Experiencia El Padrino','El Padrino es una película estadounidense de 1972 dirigida por Francis Ford Coppola.\r\nSentite parte de la familia más famosa del cine: los Corleone\r\n',3200,1,2),(21,'Grand Hotel Budapest','Sentite dentro del estético y simétrico mundo creado por Wes Anderson.\r\nViví dentro del Gran Hotel Budapest',4300,1,2),(22,'Experiencia Los Simpsons','¡Viví en Springfield! Sentite parte de la serie animada más conocida del mundo entero.\r\n',3500,1,2),(23,'El Viaje de Chihiro','Sentite en el maravilloso mundo creado por Hayao Miyazaki y su Studio Ghibli.\r\n',5100,1,2),(24,'Experiencia Goodfellas','Viví el mundo de Godfellas, la maravillosa película dirigida por Martin Scorsese y protagonizada por Robert De Niro, Ray Liotta, Joe Pesci y muchos actores y actrices más.\r\n',2800,1,2),(25,'Experiencia Mi Pobre Angelito','¡Sentite dentro de Home Alone! La película protagonizada por Macaulay Culkin, Joe Pesci y Daniel Stern.',2000,1,2),(26,'Experiencia Willy Wonka','Viví la experencia de estar dentro de la Fabrica de Chocolate más conocida del mundo. Si sos fan de la película dirigida por Tim Burton y protagonizada por Johnny Depp, sin dudas esta es tu experiencia.\r\n',1300,0,2),(27,'Experiencia Nueva York','El nacimiento del Martini se remonta a 1911, cuando Martini di Arma di Taggia lo inventó para John D. Rockefeller en el Hotel Knickerbocker de Nueva York.\r\n¡Viví la experiencia Nueva York y sentite en la Quinta Avenida!\r\n',1700,1,1),(28,'Experiencia Mendoza','Probá los mejores vinos del mundo, provenientes de Mendoza y sentite a los pies de la Cordillera de los Andes',5100,1,1),(29,'Experiencia Italia','El Negroni es un cóctel de origen italiano preparado a base de Gin, Campari y Vermú rojo. Es uno de los combinados más famosos del mundo que fue inventado en 1919 por Fosco Scarselli, un barman florentino que atendía en el viejo café Cassoni.\r\nSentite en Italia',6400,1,1),(30,'Experiencia Escocia','Sentite en Escocia con la bebida por excelencia: el whisky escocés.\r\nPrepará los mejores tragos y viví la experiencia como si estuvieras en el centro de Edinburgo\r\n',7800,1,1),(31,'Experiencia Cuba','Sentite en el centro de La Havana. Disfrutá de un bacardí blanco, la bebida por excelencia cubana\r\n',3500,1,1),(32,'Experiencia Bombay','La marca de Ginebra Bombay mas popular es Bombay Sapphire. Esta ginebra fue creada por Michel Roux en 1987, y se basó en la receta secreta de Thomas Dakin (1761). \r\n',4700,1,1),(33,'Experiencia Alemania','Sentite como en Berlín ¡En la comodidad de tu hogar!',6100,1,1);
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
INSERT INTO `images` VALUES (30,'_img_1636141783756.jpg',18),(31,'_img_1636142004441.jpg',19),(32,'_img_1636142278950.jpg',20),(33,'_img_1636142628704.jpg',21),(34,'_img_1636142777501.jpg',22),(35,'_img_1636142888752.jpg',23),(36,'_img_1636142993138.jpg',24),(37,'_img_1636143097871.jpg',25),(38,'_img_1636143258227.jpg',26),(39,'_img_1636143584730.jpg',27),(40,'_img_1636143789565.jpg',28),(41,'_img_1636144066978.jpg',29),(42,'_img_1636144152155.jpg',30),(43,'_img_1636144239280.jpg',31),(44,'_img_1636144306047.jpg',32),(45,'_img_1636144421005.jpg',33);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `keywords`
--

LOCK TABLES `keywords` WRITE;
/*!40000 ALTER TABLE `keywords` DISABLE KEYS */;
INSERT INTO `keywords` VALUES (30,'tarantino'),(31,'travola'),(32,'uma'),(33,'cine'),(34,'parasite'),(35,'bong'),(36,'joon'),(37,'ho'),(38,'oscar'),(39,'corleone'),(40,'coppola'),(41,'pacino'),(42,'wes'),(43,'anderson'),(44,'budapest'),(45,'homero'),(46,'bart'),(47,'lisa'),(48,'maggie'),(49,'marge'),(50,'hayao'),(51,'miyazaki'),(52,'totoro'),(53,'scorsese'),(54,'buenos'),(55,'muchachos'),(56,'home'),(57,'alone'),(58,'culkin'),(59,'pesci'),(60,'willy'),(61,'wonka'),(62,'burton'),(63,'deep'),(64,'martini'),(65,'new'),(66,'york'),(67,'mendoza'),(68,'vino'),(69,'montañas'),(70,'negroni'),(71,'italia'),(72,'roma'),(73,'johnnie'),(74,'walker'),(75,'escocia'),(76,'cubana'),(77,'la'),(78,'havana'),(79,'ron'),(80,'bombay'),(81,'alemania'),(82,'Brezel'),(83,'jagger'),(84,'berlin');
/*!40000 ALTER TABLE `keywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `keywords_experience`
--

LOCK TABLES `keywords_experience` WRITE;
/*!40000 ALTER TABLE `keywords_experience` DISABLE KEYS */;
INSERT INTO `keywords_experience` VALUES (126,18,30),(127,18,31),(128,18,32),(129,18,33),(130,19,34),(131,19,35),(132,19,36),(133,19,37),(134,19,38),(135,20,39),(136,20,40),(137,20,41),(138,21,42),(139,21,43),(140,21,44),(141,22,45),(142,22,46),(143,22,47),(144,22,48),(145,22,49),(146,23,50),(147,23,51),(148,23,52),(149,24,53),(150,24,54),(151,24,55),(152,25,56),(153,25,57),(154,25,58),(155,25,59),(156,26,60),(157,26,61),(158,26,62),(159,26,63),(160,27,64),(161,27,65),(162,27,66),(163,28,67),(164,28,68),(165,28,69),(166,29,70),(167,29,71),(168,29,72),(169,30,73),(170,30,74),(171,30,75),(172,31,76),(173,31,77),(174,31,78),(175,31,79),(176,32,80),(177,32,81),(178,33,82),(179,33,83),(180,33,84),(181,33,81);
/*!40000 ALTER TABLE `keywords_experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (142,'Big Kahuna Burger',18),(143,'Five Dollar Milshake',18),(144,'Vaso Big Kakuna Burger',18),(145,'Chapaguri Parasite',19),(146,'Torta Chiffon',19),(147,'Te de hierba de maíz',19),(148,'Soju',19),(149,'Spaghetti with Clemenza\'s',20),(150,'Veal Marsala Recipe',20),(151,'Sicilian Cannoli',20),(152,'Picada de Contrabando',21),(153,'Cordero by Budapest Restaurant',21),(154,'Cortesau Au Chcolat by Mendls',21),(155,'Khlav Kalash',22),(156,'Pie de frutros rojos',22),(157,'Donut',22),(158,'Remera de la serie',22),(159,'20 piezas de sushi',23),(160,'Tempura',23),(161,'Takoyaki',23),(162,'Ama-zake',23),(163,'Fagiolini Ripassati',24),(164,'Italian American Choripán',24),(165,'Henry & Karen Wedding Cake',24),(166,'Pizza',25),(167,'Papas fritas',25),(168,'3 chocolates a elección',25),(169,'20 caramelos surtidos',25),(170,'3 Chocolates Wonka negros',26),(171,'3 Chocolates Wonka blancos',26),(172,'20 caramelos wonka ',26),(173,'4 paletas de azúcar Wonka',26),(174,'Petaca Martini Rosso',27),(175,'2 Agua Tónica',27),(176,'2 Copa Balón',27),(177,'Fruta deshidratada',27),(178,'Los Chacayes Malbec',28),(179,'Paraje Altamira Blend',28),(180,'Las compuertas 2017 ',28),(181,'Tabla de quesos',28),(182,'Blend Gin Tanqueray',29),(183,'Botella Campari',29),(184,'Botella Vermouth',29),(185,'Garnish',29),(186,'Recetario de tragos',29),(187,'Red Label Johnnie Walker',30),(188,'Cóctel Penicillin',30),(189,'Vaso Johnnie Walker',30),(190,'Garnish',30),(191,'Bacardí blanco',31),(192,'Agua con gas Perrier',31),(193,'Dos vasos Mojito',31),(194,'Hierba Buena',31),(195,'Ginebra Bombay Sapphire',32),(196,'Ferrero Rocher 16 unidades',32),(197,'Mix de botánicos',32),(198,'Licor Jaggermeister Aleman',33),(199,'2 vasos Jaggermeister',33),(200,'Apoyavasos alemanes',33),(201,'3x Brezels',33);
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

-- Dump completed on 2021-11-05 17:39:14

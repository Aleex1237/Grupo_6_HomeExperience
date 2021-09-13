-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema home_experience
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema home_experience
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `home_experience` DEFAULT CHARACTER SET utf8 ;
USE `home_experience` ;

-- -----------------------------------------------------
-- Table `home_experience`.`genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`genres` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`rols`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`rols` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`addresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`addresses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pais` VARCHAR(100) NOT NULL,
  `localidad` VARCHAR(100) NOT NULL,
  `provincia` VARCHAR(100) NOT NULL,
  `calle` VARCHAR(100) NOT NULL,
  `numero` INT NOT NULL,
  `codigo_postal` INT(4) NOT NULL,
  `departamento` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `date_birth` DATE NOT NULL,
  `avatar` VARCHAR(255) NULL,
  `id_genre` INT NULL,
  `id_rol` INT NOT NULL,
  `id_addresses` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_genre_idx` (`id_genre` ASC) VISIBLE,
  INDEX `id_rol_idx` (`id_rol` ASC) VISIBLE,
  INDEX `id_adress_idx` (`id_addresses` ASC) VISIBLE,
  CONSTRAINT `id_genre`
    FOREIGN KEY (`id_genre`)
    REFERENCES `home_experience`.`genres` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_rol`
    FOREIGN KEY (`id_rol`)
    REFERENCES `home_experience`.`rols` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_adress`
    FOREIGN KEY (`id_addresses`)
    REFERENCES `home_experience`.`addresses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`experiences`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`experiences` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `price` INT NOT NULL,
  `active` TINYINT NOT NULL,
  `id_category` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_category_idx` (`id_category` ASC) VISIBLE,
  CONSTRAINT `id_category`
    FOREIGN KEY (`id_category`)
    REFERENCES `home_experience`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `id_experience` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_experience_idx` (`id_experience` ASC) VISIBLE,
  CONSTRAINT `id_experience`
    FOREIGN KEY (`id_experience`)
    REFERENCES `home_experience`.`experiences` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `id_experience` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_experience_idx` (`id_experience` ASC) VISIBLE,
  CONSTRAINT `id_experience`
    FOREIGN KEY (`id_experience`)
    REFERENCES `home_experience`.`experiences` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`keywords`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`keywords` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `total` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_user_idx` (`id_user` ASC) VISIBLE,
  CONSTRAINT `id_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `home_experience`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`cart_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`cart_detail` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cantidad` VARCHAR(45) NOT NULL,
  `id_experience` INT NOT NULL,
  `id_cart` INT NOT NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_experience_idx` (`id_experience` ASC) VISIBLE,
  INDEX `id_cart_idx` (`id_cart` ASC) VISIBLE,
  INDEX `id_user_idx` (`id_user` ASC) VISIBLE,
  CONSTRAINT `id_experience`
    FOREIGN KEY (`id_experience`)
    REFERENCES `home_experience`.`experiences` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_cart`
    FOREIGN KEY (`id_cart`)
    REFERENCES `home_experience`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `home_experience`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`keywords_experience`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`keywords_experience` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_experience` INT NOT NULL,
  `id_keywords` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_experience_idx` (`id_experience` ASC) VISIBLE,
  INDEX `id_keyword_idx` (`id_keywords` ASC) VISIBLE,
  CONSTRAINT `id_experience`
    FOREIGN KEY (`id_experience`)
    REFERENCES `home_experience`.`experiences` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_keyword`
    FOREIGN KEY (`id_keywords`)
    REFERENCES `home_experience`.`keywords` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `home_experience`.`suscriptions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_experience`.`suscriptions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

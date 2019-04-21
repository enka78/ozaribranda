-- --------------------------------------------------------
-- Sunucu:                       localhost
-- Sunucu sürümü:                10.1.38-MariaDB - mariadb.org binary distribution
-- Sunucu İşletim Sistemi:       Win64
-- HeidiSQL Sürüm:               10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- ozaridb için veritabanı yapısı dökülüyor
CREATE DATABASE IF NOT EXISTS `ozaridb` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_turkish_ci */;
USE `ozaridb`;

-- tablo yapısı dökülüyor ozaridb.about
CREATE TABLE IF NOT EXISTS `about` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hakimizdaText` text COLLATE utf8_turkish_ci,
  `misyonText` text COLLATE utf8_turkish_ci,
  `vizyonText` text COLLATE utf8_turkish_ci,
  `active` bit(1) DEFAULT b'0',
  `sira` tinyint(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ozaridb.about: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
DELETE FROM `about`;
/*!40000 ALTER TABLE `about` DISABLE KEYS */;
INSERT INTO `about` (`id`, `hakimizdaText`, `misyonText`, `vizyonText`, `active`, `sira`) VALUES
	(1, 'fwertwr', 'ertertert', 'erterwt', b'1', 1),
	(2, 'eewrtewrtewrt', 'ewrtewrtewrt', 'ertewrtewrt', b'1', 2);
/*!40000 ALTER TABLE `about` ENABLE KEYS */;

-- tablo yapısı dökülüyor ozaridb.galeri
CREATE TABLE IF NOT EXISTS `galeri` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `galeriPic` varchar(50) COLLATE utf8_turkish_ci DEFAULT '0',
  `acrive` bit(1) DEFAULT b'0',
  `sira` tinyint(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ozaridb.galeri: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
DELETE FROM `galeri`;
/*!40000 ALTER TABLE `galeri` DISABLE KEYS */;
/*!40000 ALTER TABLE `galeri` ENABLE KEYS */;

-- tablo yapısı dökülüyor ozaridb.katalog
CREATE TABLE IF NOT EXISTS `katalog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `katalogText` varchar(50) COLLATE utf8_turkish_ci DEFAULT '0',
  `katalogDoc` varchar(50) COLLATE utf8_turkish_ci DEFAULT '0',
  `sira` tinyint(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ozaridb.katalog: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
DELETE FROM `katalog`;
/*!40000 ALTER TABLE `katalog` DISABLE KEYS */;
/*!40000 ALTER TABLE `katalog` ENABLE KEYS */;

-- tablo yapısı dökülüyor ozaridb.markalar
CREATE TABLE IF NOT EXISTS `markalar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `markaText` varchar(255) COLLATE utf8_turkish_ci NOT NULL DEFAULT '0',
  `markaPic` varchar(50) COLLATE utf8_turkish_ci NOT NULL DEFAULT '0',
  `active` bit(1) NOT NULL DEFAULT b'0',
  `sira` tinyint(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ozaridb.markalar: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
DELETE FROM `markalar`;
/*!40000 ALTER TABLE `markalar` DISABLE KEYS */;
/*!40000 ALTER TABLE `markalar` ENABLE KEYS */;

-- tablo yapısı dökülüyor ozaridb.slider
CREATE TABLE IF NOT EXISTS `slider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sliderText1` varchar(255) COLLATE utf8_turkish_ci DEFAULT '0',
  `sliderText2` varchar(255) COLLATE utf8_turkish_ci DEFAULT '0',
  `sliderimg` varchar(50) COLLATE utf8_turkish_ci DEFAULT '0',
  `active` bit(1) DEFAULT b'0',
  `sira` tinyint(10) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ozaridb.slider: ~2 rows (yaklaşık) tablosu için veriler indiriliyor
DELETE FROM `slider`;
/*!40000 ALTER TABLE `slider` DISABLE KEYS */;
INSERT INTO `slider` (`id`, `sliderText1`, `sliderText2`, `sliderimg`, `active`, `sira`) VALUES
	(1, 'test', 'dene', 'slider1.jpg', b'1', 1),
	(2, 'test2', 'dener2', 'slider3.jpg', b'0', 2);
/*!40000 ALTER TABLE `slider` ENABLE KEYS */;

-- tablo yapısı dökülüyor ozaridb.urunkategoriler
CREATE TABLE IF NOT EXISTS `urunkategoriler` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kategoriAdi` varchar(255) COLLATE utf8_turkish_ci DEFAULT '0',
  `acrive` bit(1) DEFAULT b'0',
  `sira` tinyint(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ozaridb.urunkategoriler: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
DELETE FROM `urunkategoriler`;
/*!40000 ALTER TABLE `urunkategoriler` DISABLE KEYS */;
/*!40000 ALTER TABLE `urunkategoriler` ENABLE KEYS */;

-- tablo yapısı dökülüyor ozaridb.urunler
CREATE TABLE IF NOT EXISTS `urunler` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `katid` int(11) NOT NULL DEFAULT '0',
  `urunAdi` varchar(100) COLLATE utf8_turkish_ci NOT NULL DEFAULT '0',
  `urunPic1` varchar(50) COLLATE utf8_turkish_ci NOT NULL DEFAULT '0',
  `urunPic2` varchar(50) COLLATE utf8_turkish_ci NOT NULL DEFAULT '0',
  `urunPic3` varchar(50) COLLATE utf8_turkish_ci NOT NULL DEFAULT '0',
  `urunDetay` text COLLATE utf8_turkish_ci NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'0',
  `sira` tinyint(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ozaridb.urunler: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
DELETE FROM `urunler`;
/*!40000 ALTER TABLE `urunler` DISABLE KEYS */;
/*!40000 ALTER TABLE `urunler` ENABLE KEYS */;

-- tablo yapısı dökülüyor ozaridb.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) COLLATE utf8_turkish_ci NOT NULL DEFAULT '0',
  `userLastName` varchar(50) COLLATE utf8_turkish_ci NOT NULL DEFAULT '0',
  `userPass` varchar(50) COLLATE utf8_turkish_ci NOT NULL DEFAULT '0',
  `userStatus` tinyint(11) NOT NULL DEFAULT '0',
  `active` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ozaridb.user: ~2 rows (yaklaşık) tablosu için veriler indiriliyor
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `userName`, `userLastName`, `userPass`, `userStatus`, `active`) VALUES
	(1, 'admin', 'admin', '123456', 5, b'1'),
	(2, 'engin', 'kayalı', '781100', 5, b'1');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

-- MySQL dump 10.13  Distrib 8.4.3, for Win64 (x86_64)
--
-- Host: localhost    Database: auth_db
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'hamim.reja.mail@gmail.com','Hamim','Reja','9382426273','$2y$10$OLAEydJoDrkH2fgh/FRYC.OOHYEgsRsDaua1aGJssT8r1W8cIaZEW',NULL,NULL),(2,'hamimreja2005@gmail.com','Hamim','Reja','9382426273','$2y$10$H3CFu2EeGe1mlekSTZHx2OGEtb/GU4hG1i7of8kq2eaXLsfKMIlwa',NULL,NULL),(3,'hamim.reja@gmail.com','Hamim','Reja','9382426273','$2y$10$rJLUtXFiC4BVWVR8ej.HY.OWkbpRma9LCmVMcnJJalqhxYn6ZNwq2',NULL,NULL),(4,'hacked.hamim@gmail.com','Hamim','Reja','9382426273','$2y$10$RtP20E1tAP0GuJw503kBi.O9Ni0w2x94EWrgiEW8mmQZLNqocAcYi',NULL,NULL),(5,'hacked.hamim.3@gmail.com','Hamim','Reja','9382426273','$2y$10$R5siqu.x.QuZVZBWgh7u7u4gUszTIBoRJxgTQPD2rB3OiZH4YdIDG',NULL,NULL),(6,'hacked.hamim.4@gmail.com','Hamim','Reja','9382426273','$2y$10$057AmBDBOiMokfMVrGMDzO62VZlkDBrvma3sY/jMulYNGk.K2oUJa',NULL,NULL),(7,'test@gmail.com','Hamim','Reja','9382426273','$2y$10$YEtLkj./UfG6J0gwvJCzle6goMHpqVOq8tyfl5bRfT4E0vqg.RFb.',NULL,NULL),(8,'test2@gmail.com','labib','hasan',NULL,'$2y$10$NrYDkyre0yiK9W44TIm3puuCqSXg2gBEqf3qO/00FX.Bg3XLq0vYa',NULL,NULL),(9,'test3@gmail.com','Hamim','Reja',NULL,'$2y$10$0B0PDYQg51WbeAiNAb8UMuJbIMcpizzc/G.EpOEbnkJin2IiubggS',NULL,NULL),(10,'hamimreja205@gmail.com','Hamim','Reja','9292929292','$2y$10$v5hteUsYshU5bPPMTe9IU.6EwOB7qB9kXDR0c0LbteS3tWqxsucmO',NULL,NULL),(11,'test5@gmail.com','Hamim','Reja','+919382426273','$2y$10$83eAD8fc1eZ1dtirlcEwZulRdAqdJQpL8uj9/SvghNhA4om5yjbfu',NULL,NULL),(12,'test6@gmail.com','Sabnam','Sehar','9292929292','$2y$10$pi0RQlzP4GB4EjuxzAnLo.gH/GaCCxR/COwjNKQmT5iGajsyPs8D6',NULL,NULL),(13,'test7@gmail.com','Hamim','Reja','+919382426273','$2y$10$8ce2BWgkGoE.a/KlgpTuQu.QaNRfPHmxw06Rf4mjCh7hqmCnDIq3m',NULL,NULL);
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `version` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `class` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `group` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `namespace` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `time` int NOT NULL,
  `batch` int unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2026-03-27-094150','App\\Database\\Migrations\\AuthUser','default','App',1774604591,1),(2,'2026-03-27-094152','App\\Database\\Migrations\\Teachers','default','App',1774604591,1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `university_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `department` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `gender` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `year_joined` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `teachers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,1,'Aliah University','ECE','Male',2026),(2,2,'Aliah','ECE','Male',2026),(3,3,'Aliah','ECE','Male',2026),(4,4,'Aliah University','ECE','Male',2026),(5,5,'Aliah University','CSE','Male',2026),(6,6,'Aliah University','MAT','Male',2026),(7,7,'Aliah Univerity','MEN','Male',2022),(8,8,'Malda',NULL,'Male',2021),(9,9,'Aliah University',NULL,'Male',2025),(10,10,'MALDA','ECE','Male',2026),(11,11,'West Bengal','MAT','Male',2026),(12,12,'Aliah University','MAT','Female',2026),(13,13,'West Bengal','ECE','Male',2020);
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-27 21:28:13

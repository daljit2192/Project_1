-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: kingsgym_db
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `idblogs` int NOT NULL AUTO_INCREMENT,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(1064) NOT NULL,
  `description` varchar(1064) NOT NULL,
  `content` varchar(1064) NOT NULL,
  PRIMARY KEY (`idblogs`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,'2017-08-09 01:54:32','Body Fitness','How to get a fitness model body? by David Walker','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'),(2,'2018-08-08 01:54:32','Healthy Fit','Personal Fitness Tips by George','Aging is natural and 100% organic, just like dying. I should embrace the whole life-cycle, right? Not just the younger, firmer, prettier parts. Because, um... wisdom? Perspective? Getting to shop at the grocery store at 6 am if you want, before the younger less-vulnerable people buy up all the toilet paper?Nah, I\'m still grumpy about it. On the plus side, it\'s mainly the number that\'s bothering me, not any meaningful physical limitations.  They\'ll be heading my way soon enough. But for now, except for the gray hair, wrinkles, and having to scroll through drop-down menus for twenty minutes to find my birth year when I fill out online forms, this aging thing has been a pretty benign process. But on approaching the big Six-Oh, it seemed a good deadline for addressing some Unfinished Business.  Like: Cranky Fitness, this blog with the wonderful readers who have meant so much me, has been sitting out here for a couple years all by iteslf, still on-duty, looking all awkward and expectant. There was a time when I thought what Cranky Fitness was waiting fo'),(3,'2019-08-25 01:54:32','Gym Services','Efficient Workout Plans by Mary Louis','I’m gonna help build you a custom workout program, step-by-step! \n\nAfter all, a workout should be developed around a person’s age, goals, nutritional strategy, free time, etc.\n\nNot only that, but it’s easy to overcomplicate this process – there are an infinite number of exercises, sets, reps, and programs to choose from.\n\nNow, if you’re somebody that wants to skip all of that, and JUST want to be told what exactly to do: \n\nWe build customized workouts for our Online Coaching Clients and would love to have you. We get to know your story and struggles, your goals, and your lifestyle, and develop a workout plan that fits your schedule.'),(4,'2020-08-10 01:54:32','Practice Aerobics','How to practice Aerobics? by Michael Fit','WHY AEROBIC EXERCISE IS SO GOOD FOR YOU\nAn obvious benefit of aerobic exercise, also commonly referred to as cardiovascular or cardio-respiratory exercise, is that it can help with weight control. Calorie burn depends on your weight, the duration and intensity of the activity you’re doing. A 200-pound person, for example, can burn as many as 600 calories during a 60-minute, low-impact aerobics class. A 140-pound, less fit person might only burn 360 calories in that same hour-long class.\n\nBut the pluses go far beyond results you can see. Among other benefits, aerobic exercisers may enjoy reduced risk of:\n\nHeart Disease and Stroke Aerobic exercise strengthens your heart muscle, improves its efficiency and lowers your resting heart rate. It also can help lower blood pressure and reduce heart disease risk by increasing HDL (“good”) cholesterol levels and lowering triglyceride levels, which, when left unchecked, can lead to artery-clogging plaque.\nType 2 Diabetes Aerobic activity can help your body better respond to insulin, managing blood sugar levels.');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-04 13:14:42

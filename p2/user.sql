CREATE TABLE IF NOT EXISTS `user` (
	`id` int NOT NULL AUTO_INCREMENT,
    `email` varchar(255),
	`username` varchar(20),
	`password` varchar(64),
	PRIMARY KEY (`id`)
);
	INSERT INTO `user` 
	(`email`, `username`, `password`) 
VALUES
	('ryan.is.cool0308@gmail.com', 'admin', '$2y$10$jz1rX4cj3p2QvScVsasR0..Ei8brSKsAHKW8qI1Gzs0Q4LUuDp57K');
-- INSERT INTO player
-- 	(`username`, `password`)
-- VALUES
--     ('Parthenia', '$2y$10$Uc2MGBbfLE12WgRLMLp2iunQoMn1USVmd5rOxkzKyDYtJQWv4W8.a'),
-- 	('Tomika', '$2y$10$/l9SUQqYDTz0AYY4xLZbGepLbwWbl8tP62pJRQFRbcvlCuJXsTzqa'),
-- 	('Kip', '$2y$10$OxEYGhKdsmnsQScu9wcn4ONlYDX5EwuPTvoZjkfd0etQ4YlbylyKC'),
-- 	('Imelda', '$2y$10$4PIdQRGlLDz78fKDtpHDEeisiwmOdbtJn4JnuQ7nZVZ.e8Heg/FA6'),
-- 	('Geoffrey', '$2y$10$Xu51JzZf9TIRCcIg26hrL.tmg1pxvXf7ZnQaS1Ys4Jv402p8JBJkq'),
-- 	('Shanel', '$2y$10$EWRPL7frameMLpLf7VqLIO6uQv5d0Ce6y3ARDNBFLuhB1iBXVZREe'),
-- 	('Lilliana', '$2y$10$rDF0WlFo8IP3Ceu5i1maaOA98.9mkDjvPi0W9Q6fJSuGA4SKLx2e6'),
-- 	('Deloris', '$2y$10$4sxlyUjxzpLmqgD18l42bOCZwwesvCfXSv6zgzB.vL6wmsMS3ptV.'),
-- 	('Giovanna', '$2y$10$pzSBWacaqvN4YYnat6urbuLqC1dtqzveFXismnDs5HKviDPY4LHTW'),
-- 	('Suanne', '$2y$10$IZ2nVrgzgOHYN6Kalg6RlubMITjXQZDIMVz1mLAA8tPcVSYUuapY.');

CREATE TABLE IF NOT EXISTS `saves` (
	`id` int NOT NULL AUTO_INCREMENT,
    `user_id` int,
	PRIMARY KEY (`id`)
);


CREATE TABLE IF NOT EXISTS `unlocked` (
	`id` int NOT NULL AUTO_INCREMENT,
    `save_id` int,
	`level_unlocked` int,
	PRIMARY KEY (`id`)
);

                                                                                                                                      
CREATE TABLE IF NOT EXISTS `levels` (
	`id` int NOT NULL AUTO_INCREMENT,
    `level_number` int,
	PRIMARY KEY (`id`)
);
INSERT INTO `levels` 
	(`level_number`) 
VALUES
	('1');

CREATE TABLE IF NOT EXISTS `scenes` (
	`id` int NOT NULL AUTO_INCREMENT,
    `level_id` int,
	`scene_jpg` varchar(255),
	PRIMARY KEY (`id`)
);
INSERT INTO `scenes` 
	(`level_id`, `scene_jpg`) 
VALUES
	('1', 'room1.png'),
	('1', 'room2_1.png'),
	('1', 'room2_1.png'),
	('1', 'room3_1.png'),
	('1', 'room3_2.png'),
	('1', 'room4.png'),
	('1', 'room5_1.png'),
	('1', 'room5_2.png');

CREATE TABLE IF NOT EXISTS `objects` (
	`id` int NOT NULL AUTO_INCREMENT,
	`save_id` int,
	`object_name` varchar(255),
	PRIMARY KEY (`id`)
);


CREATE TABLE IF NOT EXISTS `permaObjects` (
	`id` int NOT NULL AUTO_INCREMENT,
    `object_name` varchar(255),
	`level_obtained` int,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `contains` (
	`id` int NOT NULL AUTO_INCREMENT,
    `save_id` int,
	`permaObject_id` int,
	PRIMARY KEY (`id`)
);
<?php


include '../config/db_config.php';
include '../classes/UsersController.php';
include '../classes/Db.php';
include '../classes/Validator.php';



$db = new Db($dbConfig);

 $validator = new Validator();

 $usersController = new UsersController($db, $validator);


$userId = $_GET['user'];


if ($_GET['cmd'] == 'rmuser') {
	$usersController->removeUser($userId);
}



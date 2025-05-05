<?
include "config/db_config.php";
include "classes/UsersController.php";
include "classes/Db.php";



$db = new Db($dbConfig);

$usersController = new UsersController($db);

$DATA_TPL = $usersController->getDataUsers();





















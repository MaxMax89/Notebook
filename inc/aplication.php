<?
include "config/db_config.php";
include "classes/UsersController.php";
include "classes/Validator.php";
include "classes/Db.php";


$db = new Db($dbConfig);

$usersController = new UsersController($db);

$statuses = $usersController->getStatuses();
$DATA_TPL = $usersController->getDataUsers();



include 'templates/table_notes.php';


















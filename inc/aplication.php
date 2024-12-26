<?
include "config/db_config.php";
include "classes/UsersController.php";
include "classes/Validator.php";
include "classes/Db.php";



$db = new Db($dbConfig);

$validator = new Validator();

$usersController = new UsersController($db, $validator);

$statuses = $usersController->getStatuses();
$DATA_TPL = $usersController->getDataUsers();
setcookie('statuses', serialize($statuses));


include 'templates/table_notes.php';
















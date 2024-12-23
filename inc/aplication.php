<?
include "config/db_config.php";
include "classes/UsersController.php";
include "classes/Validator.php";
include "classes/Db.php";
include 'templates/popup_delete.php';
include "debuging.php";


$db = new Db($dbConfig);

$validator = new Validator();

$usersController = new UsersController($db, $validator);

$statuses = $usersController->getStatuses();
$DATA_TPL = $usersController->getDataTpl();







include 'templates/table_notes.php';
















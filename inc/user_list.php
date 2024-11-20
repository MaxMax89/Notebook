<?
include "config/db_config.php";
include "classes/UsersController.php";
include "classes/Validator.php";
include "classes/Db.php";
include "debuging.php";


$db = new Db($dbConfig);

$validator = new Validator();

$usersController = new UsersController($db, $validator);

$users = $usersController->getAllUsers();
$statuses = $usersController->getStatuses();


foreach ($users as $user) {
	$DATA_TPL[] = [
		'id' => $user['id'],
		'name' => $user['name'],
		'phone' => $user['phone'],
		'email' => $user['email'],
		'status' => $user['status'],
		'note' => $user['note']

	];
}

include "templates/forms/notebook_form.php";
include 'templates/table_notes.php';
include 'templates/popup_delete.php';
















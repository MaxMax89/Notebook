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

if (isset($_POST['add_user'])) {
	$usersController->addUser($_POST);
	header("location: index.php");
}

if (isset($_POST['update_user'])) {
	$usersController->updateUser($_POST);
	header("location: /");
}


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

















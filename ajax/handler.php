<?php

include '../config/db_config.php';
include '../classes/UsersController.php';
include '../classes/Db.php';
include '../classes/Validator.php';


$db = new Db($dbConfig);

$validator = new Validator();

$usersController = new UsersController($db);

$usersController->validator = $validator;


/////////// DELETE USER ////////////
if ($_POST['cmd'] == 'delete_user') {
	$userId = $_POST['id'];
	$usersController->removeUser($userId);
	$data = $usersController->getDataUsers();
	echo json_encode($data, JSON_UNESCAPED_UNICODE);
}

///////////// FORM CONTROL /////////////
if ($_POST['cmd'] == 'open_add_form') {
	$statuses = $usersController->getStatuses();
	$form = file_get_contents('../templates/forms/notebook_form_add.php');
	echo json_encode(['form' => $form, 'statuses' => $statuses], JSON_UNESCAPED_UNICODE);
}


if ($_POST['cmd'] == 'open_update_form') {
	$statuses = $usersController->getStatuses();
	$form = file_get_contents('../templates/forms/notebook_form_update.php');
	$data = $usersController->getUserById($_POST['id']);
	echo json_encode(["form" => $form, "user" => $data, "statuses" => $statuses], JSON_UNESCAPED_UNICODE);
}

///////////// USERS CONTROL /////////////
if ($_POST['cmd'] == 'update_user') {
	$usersController->updateUser($_POST);
	$data = $usersController->getDataUsers();
	echo json_encode($data, JSON_UNESCAPED_UNICODE);
}

if ($_POST['cmd'] == 'add_user') {
	$usersController->addUser($_POST);
	$users = $usersController->getDataUsers();
	echo json_encode($users, JSON_UNESCAPED_UNICODE);
}







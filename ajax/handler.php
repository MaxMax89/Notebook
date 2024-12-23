<?php


include '../config/db_config.php';
include '../classes/UsersController.php';
include '../classes/Db.php';
include '../classes/Validator.php';


$db = new Db($dbConfig);

$validator = new Validator();

$usersController = new UsersController($db, $validator);




if($_POST['cmd'] == 'open_form'){
	$_POST['statuses'] = $usersController->getStatuses();
	//echo json_encode($statuses, JSON_UNESCAPED_UNICODE);
}


if ($_POST['cmd'] == 'delete_user') {
	$usersController->removeUser($userId);
}

if ($_POST['cmd'] == 'open_update_form') {
	$data = $usersController->getUserById($_POST['id']);
	echo json_encode($data, JSON_UNESCAPED_UNICODE);
}

if(isset($_POST['update_form'])){
	$usersController->updateUser($_POST);
	$data = $usersController->getUserById($_POST['id']);
	echo json_encode($data, JSON_UNESCAPED_UNICODE);
}

if (isset($_POST['add_form'])) {
	 $usersController->addUser($_POST);
	 $user = $usersController->getLastUser();
	 echo json_encode($user, JSON_UNESCAPED_UNICODE);
}







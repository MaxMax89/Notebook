<?php

$serverName = 'localhost';
$userName = 'root';
$dbName = 'notebook';
$password = '';

try {
	$connect = new PDO("mysql:host=$serverName;dbname=$dbName;", $userName, $password);
} catch (PDOException $e) {
	die($e->getMessage());
}

class Users {


	public function getUserData() {
		$userData = [];
		$users = self::getUsers();
		$statuses = self::getStatuses();

		foreach ($users as $user){
			$userData[$user['id']]  = ['name' => $user['name'], 'phone' => $user['phone'],
				'email' => $user['email'], 'status' => $statuses[$user['id_status']], 'note' => $user['note']];
		}
		return $userData;
	}



	private function getStatuses() {
		$statuses = [];
		$result = self::queryDB('SELECT * FROM `statuses`');
		while($row = $result->fetch()){
			$statuses[$row['id']] = $row['status'];
		}
		return $statuses;
	}

	private function getUsers()  {
		$users = [];
		$result = self::queryDB('SELECT * FROM `users`');
		while($row = $result->fetch()){
			$users[] = ['id' => $row['id'] ,'name' => $row['name'], 'phone' => $row['phone'],
				   'email' => $row['email'], 'id_status' => $row['id_status'], 'note' => $row['note']];
		}
		return $users;
	}

	private function connectDB() {

			$serverName = 'localhost';
			$userName = 'root';
			$dbName = 'notebook';
			$password = '';

			try {
				$connect = new PDO("mysql:host=$serverName;dbname=$dbName;", $userName, $password);
			} catch (PDOException $e) {
				die($e->getMessage());
			}
			return $connect;
	}

	private function queryDB($sql) {
		$connect = self::connectDB();
		return $connect->Query($sql);
	}

}


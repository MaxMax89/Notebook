<?php


class Users
{

	public $id;
	public $name;
	public $phone;
	public $email;
	public $status;
	public $note;

	static function getObject()
	{
		$data = self::getUserData();
		foreach ($data as $item) {
			$users[] = new Users($item);
		}
		return $users;
	}

	public function __construct($data)
	{

		$this->id = $data['id'];
		$this->name = $data['name'];
		$this->phone = $data['phone'];
		$this->email = $data['email'];
		$this->status = $data['status'];
		$this->note = $data['note'];

	}

	static function getUserData()
	{
		$userData = [];
		$users = self::getUsers();
		$statuses = self::getStatuses();

		foreach ($users as $user) {
			$userData[] = ['id' => $user['id'], 'name' => $user['name'], 'phone' => $user['phone'],
				'email' => $user['email'], 'status' => $statuses[$user['id_status']], 'note' => $user['note']];

		}
		return $userData;
	}


	static function getStatuses()
	{
		$statuses = [];
		$result = self::queryDB('SELECT * FROM `statuses`');
		while ($row = $result->fetch()) {
			$statuses[$row['id']] = $row['status'];
		}
		return $statuses;
	}

	static function getUsers()
	{
		$users = [];
		$result = self::queryDB('SELECT * FROM `users`');
		while ($row = $result->fetch()) {
			$users[] = ['id' => $row['id'], 'name' => $row['name'], 'phone' => $row['phone'],
				'email' => $row['email'], 'id_status' => $row['id_status'], 'note' => $row['note']];
		}
		return $users;
	}

	static function connectDB()
	{

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

	static function queryDB($sql)
	{
		$connect = self::connectDB();
		return $connect->Query($sql);
	}

}


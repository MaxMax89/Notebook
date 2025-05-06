<?php


class UsersController
{
	public $validator;
	private $db;


	public function __construct($db)
	{
		$this->db = $db;
	}


	public function getDataUsers()
	{
		$users = self::getAllUsers();
		$statuses = self::getStatuses();
		foreach ($users as $user) {
			$DATA_USERS[] = [
				'id' => $user['id'],
				'name' => $user['name'],
				'phone' => $user['phone'],
				'email' => $user['email'],
				'status' => $statuses[$user['id_status']],
				'note' => $user['note']

			];
		}
		return $DATA_USERS;
	}

	public function getAllUsers()
	{
		return $this->db->getData('SELECT *  FROM `users`');
	}

	public function removeUser($id)
	{
		$this->db->query('DELETE FROM `users` WHERE `id` = ' . $id . '');
	}

	public function getStatuses()
	{
		$result = $this->db->getData('SELECT * FROM `statuses`');
		foreach ($result as $row) {
			$statuses[$row['id_status']] = $row['status'];
		}
		return $statuses;
	}

	public function addUser($data)
	{
		$validation = $this->validator->validate($data);
		if ($validation->hasErrors() == false) {
			$this->db->query("INSERT INTO `users` 
    						( `id`,`name`, `phone`, `email`, `id_status`, `note`) 
							VALUES 
							(NULL ,'{$data['name']}', '{$data['phone']}', '{$data['email']}', '{$data['id_status']}', '{$data['note']}')");
		}

	}

	public function updateUser($data)
	{
		$validation = $this->validator->validate($data);
		if ($validation->hasErrors() == false) {
			$this->db->query("UPDATE `users` 
								SET 
								    `name`      = '{$data['name']}', 
								    `phone`     = '{$data['phone']}', 
								    `email`     = '{$data['email']}', 
								    `id_status` = '{$data['id_status']}',
								    `note`      = '{$data['note']}'
								     WHERE `users`.`id` = '{$data['id']}';");
		}

	}

	public function getUserById($id)
	{
		return $this->db->getData('SELECT * FROM `users` LEFT JOIN `statuses` ON users.id_status = statuses.id_status WHERE users.id = ' . $id . '');
	}


}


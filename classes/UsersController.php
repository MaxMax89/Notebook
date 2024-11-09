<?php


class UsersController
{
	private $validator;
	private $db;


	public function __construct($db, $validator)
	{
		$this->db = $db;
		$this->validator = $validator;
	}

	public function getAllUsers()
	{
		return $this->db->getData('SELECT *  FROM `users` LEFT JOIN `statuses` ON users.id_status = statuses.id_status');
	}

	public function removeUser($id)
	{
		$this->db->query('DELETE FROM `users` WHERE `id` = ' . $id . '');
	}

	public function getStatuses()
	{
		return $this->db->getData('SELECT * FROM `statuses`');
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


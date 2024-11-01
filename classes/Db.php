<?php

class Db
{
	private $connect;


	public function getData($sql)
	{
		$data = $this->connect->query($sql)->fetchAll();
		return $data;
	}

	private function query($sql)
	{
		$this->stmt = $this->connect->prepare($sql);
		$this->stmt->execute();
		return $this;
	}


	public function __construct(array $db_config)
	{
		$dsn = "mysql:host={$db_config['host']};dbname={$db_config['dbname']};charset={$db_config['charset']}";
		try {
			$this->connect = new PDO($dsn, $db_config['username'], $db_config['password'], $db_config['options']);
		} catch (PDOException $e) {
			echo "DB Error: {$e->getMessage()}";
			die;
		}

	}
}
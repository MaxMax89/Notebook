<?php

$dbConfig = [
	'host'     => 'localhost',
	'dbname'   => 'notebook',
	'username' => 'root',
	'password' => '',
	'charset'  => 'utf8mb4',
	'options'  => [
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	]


];



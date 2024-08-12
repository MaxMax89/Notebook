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

include 'classes/Users.php';
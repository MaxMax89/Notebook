<?php


class Users
{

	public $id;
	public $name;
	public $phone;
	public $email;
	public $status;
	public $note;




	public function __construct($data)
	{
		$this->id = $data['id'];
		$this->name = $data['name'];
		$this->phone = $data['phone'];
		$this->email = $data['email'];
		$this->status = $data['status'];
		$this->note = $data['note'];
	}





}


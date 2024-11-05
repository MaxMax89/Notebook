<?php


////////////VALIDATION RULES////////////////

$rules = [
	'name' => [
		'required' => true,
		'max' => 15
	],
	'phone' => [
		'required' => true,
		'max' => 140
	],
	'email' => [
		'email' => true,
		'max' => 20
	],
	'status' => [
		'required' => true,
		'max' => 10
	],
	'note' => [
		'required' => true,
		'max' => 130
	]
];

$data = [
	'name' => 'p',
	'email' => 'jsdhffj@mail.com',
	'status' => 'kefkokekfvevk',
	'phone' => 'kefkokfddfekfvevk'
];











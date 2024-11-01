<?php


include 'classes/Validator.php';


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
	'email' => 'jsdhffjmail.com',
	'status' => 'kefkokekfvevk',
	'phone' => 'kefkokfddfekfvevk'
];

$validator = new Validator();


/////// ADD ERRORS MESSAGE /////////

$validator->message = [
	'required' => 'Поле :fieldname: не должно быть пустым',
	'max' => 'Поле :fieldname: не может быть больше :rulevalue: символов',
	'email' => 'Введите корректный email'
];

$validation = $validator->validate($data, $rules);





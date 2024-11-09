<?php


class Validator
{
	protected $errors = [];
	protected $rolesList = ['required', 'max', 'email'];
	public $message = [
		'required' => 'Поле :fieldname: не должно быть пустым',
		'max' => 'Поле :fieldname: не может быть больше :rulevalue: символов',
		'email' => 'Введите корректный email'
	];
	protected $rules = [
		'name' => [
			'required' => true,
			'max' => 50
		],
		'phone' => [
			'required' => true,
			'max' => 30
		],
		'email' => [
			'email' => true,
			'max' => 50
		],
		'id_status' => [
			'required' => true,
			'max' => 50
		],
		'note' => [
			'required' => true,
			'max' => 130
		]
	];


	public function validate($data = [])
	{
		foreach ($data as $fieldName => $value) {
			if (in_array($fieldName, array_keys($this->rules))) {
				$this->check([
					'fieldname' => $fieldName,
					'value' => $value,
					'rules' => $this->rules[$fieldName]
				]);
			}
		}
		return $this;
	}

	protected function check($field)
	{
		foreach ($field['rules'] as $rule => $ruleValue) {
			if (in_array($rule, $this->rolesList)) {
				if (!call_user_func_array([$this, $rule], [$field['value'], $ruleValue])) {
					$this->addError($field['fieldname'], str_replace(
						[':fieldname:', ':rulevalue:'],
						[$field['fieldname'], $ruleValue],
						$this->message[$rule]));
				}
			}
		}
	}

	public function getErrors()
	{
		return $this->errors;
	}

	public function hasErrors()
	{
		return !empty($this->errors);
	}


	protected function addError($fieldName, $error)
	{
		$this->errors['fieldname'][] = $error;
	}

	protected function required($value, $ruleValue)
	{
		return !empty(trim($value));
	}

	protected function max($value, $ruleValue)
	{
		return mb_strlen($value . 'UTF-8') <= $ruleValue;
	}

	protected function email($value, $ruleValue)
	{
		return filter_var($value, FILTER_VALIDATE_EMAIL);
	}
}
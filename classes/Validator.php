<?php


class Validator
{
	protected $errors = [];
	protected $rolesList = ['required', 'max', 'email'];
	public $message = [];


	public function validate($data = [], $rules = [])
	{
		foreach ($data as $fieldName => $value) {
			if (in_array($fieldName, array_keys($rules))) {
				$this->check([
					'fieldname' => $fieldName,
					'value'     => $value,
					'rules'     => $rules[$fieldName]
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
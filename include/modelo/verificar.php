<?php
	function correo($correo){
		$correo_exp = "/^([\da-zA-Z_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})+$/";
		if (preg_match($correo_exp,$correo,$coincidencias)) {
			return true;
		}
		else{
			return false;
		}
	}

	function password($password){
		$pass_exp = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([\da-zA-Z_\.-]+){6,20}$/";
		if (preg_match($pass_exp,$password,$coincidencias)) {
			return true;	
		}
		else{
			return false;
		}
	}

	function nombre($nombre){
		$nombre_exp = "/^([a-zA-Z0-9áéíóúñ\(\)\-\/ ]{1,60})$/";
		if (preg_match($nombre_exp,$nombre,$coincidencias)) {
			return true;
		}
		else{
			return false;
		}
	}

	function texto($texto){
		$text_exp= "/^([a-zA-Z0-9áéíóúñ\(\)\-\/\.\,\-\&\r\n: ]{1,10000})$/";
		if(preg_match_all($text_exp,$texto,$coincidencias)){
			return true;
		}else{
			return false;
		}
	}

	function id($id){
		$numeros_exp = "/^[0-9]+$/";
		if (preg_match($numeros_exp,$id,$coincidencias)) {
			return true;
		}
		else{
			return false;
		}
	}

	function cantidades($cantidad){
		$cantidades_exp = "/^[0-9]+(\.[0-9]{0,5})?$/";
		if (preg_match($cantidades_exp,$cantidad,$coincidencias)) {
			return true;
		}
		else{
			return false;
		}
	}

	function cif_pass($password){
		$salt = '$daniel_alas$/';
		$password = md5($salt.$password);
		return $password;
	}
?>
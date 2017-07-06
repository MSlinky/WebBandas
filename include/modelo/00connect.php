<?php

class Conexion extends mysqli{
	public function __construct(){
		parent::__construct('localhost','root','','avicolas');
		$this->query("SET NAMES 'utf8';");
		$this->connect_errno == true ? die('Error con la conexion') : $x = 'Conectado';
		unset($x);
	}	

	public function recorrer(){
		return $this->fetch_array(MYSQLI_ASSOC);
	}

	public function rows($y){
		return mysqli_num_rows($y);
	}

	public function liberar($x){
		return mysqli_free_result($x);
	}
}
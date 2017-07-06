<?php
require "00connect.php";
class Comenarios{

	function __construct(){ 
		$this->db = new conexion();
   	}

   	function insert($query){
		$this->db->query($query);
		return $this->db->affected_rows;
   	}

	function allNews($query, $table){
		$obj_res = array();
		if ($this->db->multi_query($query)) {
			$i = 0;
			do {
			   if ($result = $this->db->store_result()) {
					if($result->num_rows > 0){
				   		$vueltas = 0;
						while ($row = $result->fetch_array(MYSQLI_ASSOC)) {

							$obj_res[$i][$table][$vueltas]['info'] = $row;
							$vueltas++;
						}
						$result->free();
					}else
						$obj_res[$i][$table][0] = "vacio";
			   }
			   if ($this->db->more_results()) $i++;
			}while ($this->db->next_result());
		}
		return json_encode($obj_res);
	}
}
?>
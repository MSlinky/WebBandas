<?php
// ini_set('display_errors', 0);
	if(isset($_POST["accion"])){
		$transaccion = $_POST["accion"];
		if(!empty($transaccion)){
			ejecutarTransaccion($transaccion);
		}	
	}else{
		echo "ERROR";
	}
	function ejecutarTransaccion($transaccion){
		if( $transaccion == 1 ){// Buscar todos los comentarios
			include "./modelo/comentarios.php";

			if(isset($_POST["nota"])){
				$obj = new Comenarios();
				
				print($obj->allNews("SELECT * FROM nota WHERE url='".$_POST["nota"]."'; SELECT comentarios.* FROM comentarios, nota  WHERE nota.id = comentarios.id_nota AND url='".$_POST["nota"]."' ORDER BY comentarios.fecha ASC;", "new"));
			}else{
				$obj = new Comenarios();
				print($obj->allNews("SELECT * FROM nota ORDER BY fecha DESC", "news"));
			}
			

		}else if( $transaccion == 2 ){// Enviar correo electronico a los distribuidores
			include "./modelo/verificar.php";

			if(texto($_POST['nombre']));
			else 									{echo "Error de nombre"; return false;}
			if(texto($_POST['asunto']));
			else 									{echo "Error de asunto"; return false;}
			if(correo($_POST['correo']));
			else 									{echo "Error de teléfono"; return false;}
			if(texto($_POST['comentario']));
			else 									{echo "Error de comentario"; return false;}

			// info@okamuramexico.com
			// $_POST['correo1']
			$bool = mail("info@bandasavicolas.com", "Contacto", "Correo: ".$_POST['correo']."\n\n"."Asunto: ".$_POST['asunto']."\n\n"."Nombre: ".$_POST['nombre']."\n\n".$_POST['comentario'], '');
			if($bool){
			   echo "Mensaje enviado";
			}else{
			   echo "Error: mensaje no enviado";
			}
		}else if($transaccion == 3){
			include "./modelo/comentarios.php";
			include "./modelo/verificar.php";

			$obj = new Comenarios();

			if(texto($_POST['comentario']));
			else 									{echo "Error de comentario"; return false;}
			
			$obj->insert("INSERT INTO comentarios(id_nota, comentario, fecha) VALUES ('".$_POST["id_nota"]."','".$_POST["comentario"]."','".date("Y-n-j")."');");

			print($obj->allNews("SELECT comentarios.* FROM comentarios, nota  WHERE nota.id = comentarios.id_nota AND id_nota='".$_POST["id_nota"]."' ORDER BY comentarios.fecha ASC;", "comentarios"));

		}
	}
?>
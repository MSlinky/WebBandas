<?php
	ini_set('display_errors', 0);

	include('./public/html/01header.html');

	if(isset($_GET['Section']) && ($_GET['Section'] == "Nosotros" ) )
		include('./public/html/04nosostros.html');
	else if(isset($_GET['Section']) && ($_GET['Section'] == "Bandas" ) )
		include('./public/html/05bandas.html');
	else if(isset($_GET['Section']) && ($_GET['Section'] == "GarantiasCondiciones" ) )
		include('./public/html/06Condiciones.html');
	else if(isset($_GET['Section']) && ($_GET['Section'] == "Contacto" ) )
		include('./public/html/07contacto.html');
	else if(isset($_GET['Section']) && ($_GET['Section'] == "Blog" ) )
		include('./public/html/08blog.html');
	else
		include('./public/html/03index.html');


	include('./public/html/02footer.html');
?>
var mexicoMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18814.991383210847!2d-103.36864484342405!3d20.65463511197057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b20707017973%3A0x4d63c74ac1acac7c!2sMirlo+1180%2C+Morelos%2C+44910+Guadalajara%2C+Jal.!5e0!3m2!1ses-419!2smx!4v1496832053770" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
var spain = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33139.2656163936!2d-1.6857941027984913!3d42.76456307887342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5091f1d7d0b7b7%3A0x9d887953ee1f6592!2sPol.+Ind.+Comarca+II-F%2C+12%2C+31191+Barbat%C3%A1in%2C+Navarra%2C+Espa%C3%B1a!5e0!3m2!1ses-419!2smx!4v1496831982817" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';

function info(url){
	if(url =="/Contacto"){
		$('.textBanner').html("Contáctanos");
		$('.banner').css({
			"background-image": "url(/public/imgs/banners/Portada_contacto.jpg)"
		});
	}
}

function enviar_ajax(datos,link){
	$.ajax({
		url: link,
		type: 'POST',
		data: datos,
		success: function(text){
			if(text.indexOf("Error") > -1){
				$('#mensaje_error').html("No se permiten comillas( ' ' ) ");
			}else{
				$('#mensaje').html(text);
			}
		},
		error : function (request, error) {
    	}
	});
}

$( document ).ready(function() {
	info(window.location.pathname);

	$('.divMap').html(mexicoMap);

	$('.map').click((event)=>{
		if($(event.target)[0]['textContent'] == "México"){
			$('.divMap').html(mexicoMap);
		}else{
			$('.divMap').html(spain);
		}
	});

	$('#comentarios').submit((event)=>{
		event.preventDefault();
		enviar_ajax('accion=2&'+$(event.target).serialize(),'/include/controlador.php');
		$(event.target).reset();
	})
});
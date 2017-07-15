function info(url){
	if( (url.split("/").length == 2 && url == "/Blog") || (url.split("/").length == 3) ){
		$('.textBanner').html("Blog");
		$('.banner').css({
			"background-image": "url(/public/imgs/banners/portada_nosotros.jpg)"
		});
	}
}

function enviar_ajax(datos,link){
	$.ajax({
		url: link,
		type: 'POST',
		data: datos,
		success: function(text){
			if(text.indexOf("news") > -1){
				let json = JSON.parse(text)[0]['news'];
				let contenido = '';
				for (var i = 0; i < json.length; i++) {
					contenido+= '<div class="nota">';
			    		contenido+='<div class="imgNew"><a href="/Blog/'+json[i]['info']['url']+'"><img class="effectTransition" src="/public/imgs/news/'+json[i]['info']['img']+'" alt=""></div></a>';
			    		contenido+='<div class="titeNew effectTransition"><a href="/Blog/'+json[i]['info']['url']+'">'+json[i]['info']['titulo']+'</a></div>';
			    		contenido+='<div class="dateNew">'+json[i]['info']['fecha']+'</div>';
			    		contenido+='<div class="textNew">'+json[i]['info']['resumen']+' [...]</div>';
		    		contenido+='</div>';
				};
				$('.contentNota').html(contenido);
			}else if(text.indexOf("new") > -1){

				$('#formularioComenario').css({
					'display':'inline-block'
				});


				let json = JSON.parse(text);
				let contenido = '';
				for (var j = 0; j < json[0]['new'].length; j++) {
					contenido+= '<div class="nota">';
						contenido+='<div class="content"><div class="titeNewNota effectTransition">'+json[0]['new'][j]['info']['titulo']+'</div></div>';
			    		contenido+='<div class="content"><div class="imgNewNota"><img src="/public/imgs/news/'+json[0]['new'][j]['info']['img']+'" alt=""></div></div>';
			    		contenido+='<div class="dateNew">'+json[0]['new'][j]['info']['fecha']+'</div>';
			    		contenido+='<div class="textNewNota">'+json[0]['new'][j]['info']['comentario']+'</div>';
		    		contenido+='</div>';
				};
				$('.contentNota').html(contenido);

				$('.comentarios').html(comentarios(json[1]['new']));


				$('#comentarios').submit((event)=>{
					event.preventDefault();
					enviar_ajax('accion=3&id_nota='+json[0]['new'][0]['info']['id']+'&'+$(event.target).serialize(),'/include/controlador.php');
				})

				
			}else if(text.indexOf("comentarios") > -1){
				let json = JSON.parse(text);

				$('.comentarios').html(comentarios(json[0]['comentarios']));
				$('.textComentario').val("");
			}else{
				alert(text + 'No se permiten (")');
				console.log(text);
			}
		},
		error : function (request, error) {
    	}
	});
}

function comentarios(array){
	if(array[0] != 'vacio'){
		let contenido = '';
		for (var j = 0; j < array.length; j++) {
			contenido+= '<div class="comentario">';
				contenido+='<div class="dateNew">'+array[j]['info']['fecha']+'</div>';
	    		contenido+=array[j]['info']['comentario'].replace(/\n/g, "<br>");
			contenido+='</div>';
		};
		return contenido;
	}
}

$( document ).ready(function() {
	info(window.location.pathname);

	url = window.location.pathname.split("/");
	if(url.length == 3){
		enviar_ajax('accion=1&nota='+url[2],'/include/controlador.php');
	}else{
		enviar_ajax('accion=1','/include/controlador.php');
	}
	
});
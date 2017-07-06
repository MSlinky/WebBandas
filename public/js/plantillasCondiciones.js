function info(url){
	if(url =="/GarantiasCondiciones/Huevo"){
		$('.textBanner').html("Garantía y Condiciones <br> Banda de Huevo");
		$('.banner').css({
			"background-image": "url(/public/imgs/banners/Portada_garantías_banda_huevo.jpg)"
		});

		let descarga = '<a href="/public/imgs/Bandas/B.Huevo_Garantiaycondicionesdeuso.pdf" download="CondicionesUsoHuevo.pdf"><img src="/public/imgs/" alt=""></a>';


		$('.textoSection').html(
			'<h3 class="center thing">Banda de transporte de huevo</h3>'+
			'<h3 class="center negrita">Garantía y condiciones de uso</h3><br><br><br>'+
			'<div class="icoHuevo">No almacenar directamente sobre el suelo, utilizar tarima.</div>'+
			'<div class="icoHuevo">No estibar más de 10 unidades.</div>'+
			'<div class="icoHuevo">Almacenar en un sitio seco y sin exposición directa del sol.</div>'+
			'<div class="icoHuevo">La tensión máxima de trabajo es de 115 libras (51 daN) de fuerza.</div>'+
			'<div class="icoHuevo">La banda no está garantizada por desgaste prematuro por exceso de tensión.</div>'+
			'<div class="icoHuevo">Mantener alejado el producto de los roedores; tanto en el almacenaje como en uso.</div>'+
			'<div class="icoHuevo">Un exceso de densidad de huevos por metro lineal puede causar roturas en bandas viejas.</div>'+
			'<div class="icoHuevo">La exposición directa a los rayos de sol puede causar degradación prematura, decoloración y rigidez excesiva.</div>'+
			'<div class="icoHuevo">Lavar con agua fría únicamente.</div>'+
			'<div class="icoHuevo">No usar desinfectantes, desengrasantes o detergentes para su limpieza o mantenimiento.</div>'+
			'<div class="icoHuevo">La garantía de las bandas tiene vigencia por un año por rotura o desgaste prematuro, siempre y cuando la rotura no este causada por mecanismos en mal estado o una tensión inadecuada.</div>'+
			'<div class="icoHuevo">Las bandas tienen tratamiento UVA, pero no pueden estar continuamente expuestas a los rayos solares ya que acortaría su vida útil por cristalización prematura.</div>'+
			'<div class="icoHuevo">La garantía incluye la reposición del producto.</div>'+
			'<div class="fichaTecnica fichaTecnicaCondiciones"><span>'+descarga+'</span></div>'
		);
	}else if(url =="/GarantiasCondiciones/Gallinaza"){
		$('.textBanner').html("Garantía y Condiciones <br> Banda de Gallinaza");
		$('.banner').css({
			"background-image": "url(/public/imgs/banners/Portada_garantías_banda_gallinaza.jpg)"
		});

		let descarga = '<a href="/public/imgs/Bandas/B.Gallinaza_Garantíaycondiciones.pdf" download="CondicionesUsoGallinaza.pdf"><img src="/public/imgs/" alt=""></a>';


		$('.textoSection').html(
			'<h3 class="center thing">Banda de transporte de huevo</h3>'+
			'<h3 class="center negrita">Garantía y condiciones de uso</h3><br><br><br>'+
			'<div class="icoHuevo">No almacenar directamente sobre el suelo, utilizar tarima.</div>'+
			'<div class="icoHuevo">No estibar más de 2 unidades.</div>'+
			'<div class="icoHuevo">Almacenar en un sitio seco y sin exposición directa del sol.</div>'+
			'<div class="icoHuevo">La tensión máxima de trabajo es de 115 libras (51 daN) de fuerza.</div>'+
			'<div class="icoHuevo">La banda no está garantizada por desgaste prematuro por exceso de tensión.</div>'+
			'<div class="icoHuevo">Mantener alejado el producto de los roedores; tanto en el almacenaje como en uso.</div>'+
			'<div class="icoHuevo">Un exceso de densidad de huevos por metro lineal puede causar roturas en bandas viejas.</div>'+
			'<div class="icoHuevo">La exposición directa a los rayos de sol puede causar degradación prematura, decoloración y rigidez excesiva.</div>'+
			'<div class="icoHuevo">Lavar con agua fría únicamente.</div>'+
			'<div class="icoHuevo">No usar desinfectantes, desengrasantes o detergentes para su limpieza o mantenimiento.</div>'+
			'<div class="icoHuevo">La garantía de las bandas tiene vigencia por un año por rotura o desgaste prematuro, siempre y cuando la rotura no este causada por mecanismos en mal estado o una tensión inadecuada.</div>'+
			'<div class="icoHuevo">Las bandas tienen tratamiento UVA, pero no pueden estar continuamente expuestas a los rayos solares ya que acortaría su vida útil por cristalización prematura.</div>'+
			'<div class="icoHuevo">La garantía incluye la reposición del producto.</div>'+
			'<div class="fichaTecnica fichaTecnicaCondiciones"><span>'+descarga+'</span></div>'
		);
	}
}

$( document ).ready(function() {
	info(window.location.pathname);
});
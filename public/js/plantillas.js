function info(url){
	if(url[0] == 'es'){
		if(url[1] == "Nosotros"){
			$('.textBanner').html("La mejor tecnología europea");
			$('.banner').css({
				"background-image": "url(/public/imgs/banners/portada_nosotros.jpg)"
			});
		}else{
			if(url[2] =="BandaGallinaza"){
				$('.textBanner').html("Banda de Gallinaza");
				$('.banner').css({
					"background-image": "url(/public/imgs/banners/portada_banda_gallinaza.jpg)"
				});

				$('.textoSection').html(
					'<h3>BANDA DE GALLINAZA</h3>'+
					'<p>Nuestra banda de transporte y expulsión de gallinaza está fabricada con un copolímero de impacto, el cual da mayor resistencia y longevidad al producto.</p>'+
					'<ul>'+
						'<li>Material: Polipropileno (LYONDELLBASSELL MOPLEN EP440G) Materia Prima Virgen.</li>'+
						'<li>Color: Blanco y Negro. (Con costo adicional)</li>'+
						'<li>Medidas: Fabricamos a medida todos los anchos (85 cm – 250 cm) y espesores (0.8 mm – 1.5 mm).</li>'+
						'<li>Tratamiento UV.</li>'+
					'</ul>'
				);

				let descarga = '<a href="/public/imgs/Bandas/BandaGallinaza/bandas_avicolas_fichas_banda_transportadora_gallinaza_240517.pdf" download="BandadeGallinaza.pdf"><img src="/public/imgs/descarga-ficha.png" alt=""></a>';

				$('.imagenBanderas').html(
					'<div>'+
						'<div><img src="/public/imgs/Bandas/BandaGallinaza/monta_gallinaza.jpg" alt=""></div>'+
						'<div><img src="/public/imgs/Bandas/BandaGallinaza/b.gallinaza_cortada.jpg" alt=""></div>'+
					'</div>'+
					'<div>'+
						'<div><img src="/public/imgs/Bandas/BandaGallinaza/grafica_banda_gallinaza.jpg" alt=""></div>'+
						'<div class="fichaTecnica"><span><img src="/public/imgs/Made-Spain.png" alt="">'+descarga+'</span></div>'+
					'</div>');
			}else if(url[2] =="BandaHuevo"){
				$('.textBanner').html("Banda de Huevo");
				$('.banner').css({
					"background-image": "url(/public/imgs/banners/portada_banda_huevo.png)"
				});

				$('.textoSection').html('<h3>BANDA DE HUEVO</h3><p>Nuestra banda de recolección de huevo está diseñada para ofrecer resistencia, poseen un tejido que garantiza absorción de huevos rotos, y evitar suciedad en la demás producción.</p><ul><li>Material: Hilo de Polipropileno. Y estabilizado para rayos UV.</li><li>Color: Beige, con rayas laterales azules.</li><li>Medidas: Anchos desde 80 mm a 200 mm</li><li>Resistentes a hongos y bacterias.</li><li>Lavables, no mantienen la humedad.</li></ul>');

				let descarga = '<a href="/public/imgs/Bandas/BandaHuevo/bandas_avicolas_fichas_banda_transportadora_huevo_240517.pdf" download="BandadeHuevo.pdf"><img src="/public/imgs/descarga-ficha.png" alt=""></a>';

				$('.imagenBanderas').html('<div><div><img src="/public/imgs/Bandas/BandaHuevo/fotos_banda_huevo2.jpg" alt=""></div><div><img src="/public/imgs/Bandas/BandaHuevo/fotos_banda_huevo1.jpg" alt=""></div></div><div><div><img src="/public/imgs/Bandas/BandaHuevo/gráfica_banda_huevo.jpg" alt=""></div><div class="fichaTecnica"><span><img src="/public/imgs/Made-Spain.png" alt="">'+descarga+'</span></div></div>');
			}else if(url[2] =="DeflectorGallinaza"){
				$('.textBanner').html("Deflector de Gallinaza");
				$('.banner').css({
					"background-image": "url(/public/imgs/banners/portada_deflectordegallinaza.jpg)"
				});

				$('.textoSection').html('<h3>DEFLECTOR DE GALLINAZA</h3><p>Nuestro Deflector está fabricado con un copolimero de polipropileno de alta tenacidad.</p><ul><li>Material: Polipropileno (LYONDELLBASSELL MOPLEN EP440G) Materia Prima Virgen.</li><li>Medidas: Fabricamos a medida todos los anchos (60 cm) y espesores (0.8 mm). Tenemos también pedidos a medida para todas las jaulas del mercado.</li><li>Se puede fabricar con o sin ojillos de fijación.</li><li>Tratamiento UV.</li><li>Color: Blanco y Negro. (Con costo adicional)</li></ul>');

				let descarga = '<a href="/public/imgs/Bandas/DeflectorGallinaza/bandas_avicolas_fichas_deflector_gallinaza_240517.pdf" download="DeflectorGallinaza.pdf"><img src="/public/imgs/descarga-ficha.png" alt=""></a>';

				$('.imagenBanderas').html('<div><div><img src="/public/imgs/Bandas/DeflectorGallinaza/foto_deflector.jpg" alt=""></div><div><img src="/public/imgs/Bandas/DeflectorGallinaza/foto_deflector2.jpg" alt=""></div></div><div><div><img src="/public/imgs/Bandas/DeflectorGallinaza/Copia de gráfica_banda_gallinaza.jpg" alt=""></div><div class="fichaTecnica"><span><img src="/public/imgs/Made-Spain.png" alt="">'+descarga+'</span></div></div>');
			}else if(url[2] =="BandaElevadoraGallinaza"){
				$('.textBanner').html("Banda Transversal Elevadora de Gallinaza");
				$('.banner').css({
					"background-image": "url(/public/imgs/banners/portada_banda_transversal.jpg)"
				});

				$('.textoSection').html(
					'<h3>Banda Transversal Elevadora de Gallinaza</h3>'+
					'<p>Nuestra banda transversal está fabricada con la mejor tecnología ofreciendo así alta resistencia. Vulcanizada.</p>'+
					'<ul>'+
						'<li>Material: Poliéster Rígido</li>'+
						'<li>Peso: 3.50 kg /m2</li>'+
						'<li>Color: Verde (cobertura superior) y Negro o crudo (cobertura interterior)</li>'+
						'<li>Espesor Total: 2.90 mm (2 telas de 1.50 mm aprox)</li>'+
						'<li>Antiestática.</li>'+
					'</ul>'
				);

				let descarga = '';

				$('.imagenBanderas').html(
					'<div>'+
						'<div><img src="/public/imgs/Bandas/Transversal/foto_banda_transversal1.jpg" alt=""></div>'+
						'<div><img src="/public/imgs/Bandas/Transversal/foto_banda_transversal2.jpg" alt=""></div>'+
					'</div>'+
					'<div>'+
						'<div class="fichaTecnica"><span><img src="/public/imgs/Made-Spain.png" alt="">'+descarga+'</span></div>'+
						'<div></div>'+
					'</div>');
			}else if(url[2] =="SoldadorUltrasonido"){
				$('.textBanner').html("SOLDADOR DE ULTRASONIDO");
				$('.banner').css({
					"background-image": "url(/public/imgs/banners/portada_soldador_ultrasonido.jpg)"
				});

				$('.textoSection').html(
					'<h3>SOLDADOR DE ULTRASONIDO</h3>'+
					'<div>'+
						'<p>La soldadura Ultrasónica es un proceso de soldadura en estado sólido que suelda por la aplicación vibraciones de energía de alta frecuencia mientras las piezas están siendo sujetadas a presión.</p>'+
						'<p>Nuestro ultrasonido ofrece alta calidad en soldadura, uniforme y resistente. No hay calentamiento por lo que no se fragilizan zonas afectadas por calor. Los tiempos de ciclo son menores a un segundo. La contaminación superficial y oxidación no afectan. No contamina al no emitir gases ni residuos.</p>'+
					'</div>'+
					'<div style="padding-left: 100px">'+
						'<ul>'+
							'<li>Frecuencia: 40KHz</li>'+
							'<li>Potencia: 250 Watt</li>'+
							'<li>Temporizador Electrónico</li>'+
							'<li>Filtro de red.</li>'+
							'<li>Cable de conexión 5 mts</li>'+
							'<li>Microamperómetro digital</li>'+
							'<li>Dimensiones: 400mm x 330mm x135mm</li>'+
							'<li>Peso total del equipo con maletín: 12 kg</li>'+
						'</ul>'+
					'</div>'
				);

				$('.textoSection').addClass('textoSectionCompleto');
				

				let descarga = '<a href="/public/imgs/Bandas/Soldador/bandas_avicolas_fichas_soldador_ultrasonido_240517.pdf" download="SoldadorUltrasonido.pdf"><img src="/public/imgs/descarga-ficha.png" alt=""></a>';

				$('.imagenBanderas').html(
					'<div>'+
						'<div><img src="/public/imgs/Bandas/Soldador/foto_soldador1.jpg" alt=""></div>'+
						'<div><img src="/public/imgs/Bandas/Soldador/foto_soldador2.jpg" alt=""></div>'+
					'</div>'+
					'<div>'+
						'<div class="fichaTecnica"><span><img src="/public/imgs/Made-Spain.png" alt="">'+descarga+'</span></div>'+
						'<div></div>'+
					'</div>');
			}
		} 
	}else{
		if(url[1] == "Nosotros"){
			$('.textBanner').html("La mejor tecnología europea");
			$('.banner').css({
				"background-image": "url(/public/imgs/banners/portada_nosotros.jpg)"
			});
		}else{
			if(url[2] =="BandaGallinaza"){
				$('.textBanner').html("Poultry belt");
				$('.banner').css({
					"background-image": "url(/public/imgs/banners/portada_banda_gallinaza.jpg)"
				});

				$('.textoSection').html(
					'<h3>BANDA DE GALLINAZA</h3>'+
					'<p>Nuestra banda de transporte y expulsión de gallinaza está fabricada con un copolímero de impacto, el cual da mayor resistencia y longevidad al producto.</p>'+
					'<ul>'+
						'<li>Material: Polipropileno (LYONDELLBASSELL MOPLEN EP440G) Materia Prima Virgen.</li>'+
						'<li>Color: Blanco y Negro. (Con costo adicional)</li>'+
						'<li>Medidas: Fabricamos a medida todos los anchos (85 cm – 250 cm) y espesores (0.8 mm – 1.5 mm).</li>'+
						'<li>Tratamiento UV.</li>'+
					'</ul>'
				);

				let descarga = '<a href="/public/imgs/Bandas/BandaGallinaza/bandas_avicolas_fichas_banda_transportadora_gallinaza_240517.pdf" download="BandadeGallinaza.pdf"><img src="/public/imgs/descarga-ficha.png" alt=""></a>';

				$('.imagenBanderas').html(
					'<div>'+
						'<div><img src="/public/imgs/Bandas/BandaGallinaza/monta_gallinaza.jpg" alt=""></div>'+
						'<div><img src="/public/imgs/Bandas/BandaGallinaza/b.gallinaza_cortada.jpg" alt=""></div>'+
					'</div>'+
					'<div>'+
						'<div><img src="/public/imgs/Bandas/BandaGallinaza/grafica_banda_gallinaza.jpg" alt=""></div>'+
						'<div class="fichaTecnica"><span><img src="/public/imgs/Made-Spain.png" alt="">'+descarga+'</span></div>'+
					'</div>');
			}else if(url[2] =="BandaHuevo"){
				$('.textBanner').html("Banda de Huevo");
				$('.banner').css({
					"background-image": "url(/public/imgs/banners/portada_banda_huevo.png)"
				});

				$('.textoSection').html('<h3>BANDA DE HUEVO</h3><p>Nuestra banda de recolección de huevo está diseñada para ofrecer resistencia, poseen un tejido que garantiza absorción de huevos rotos, y evitar suciedad en la demás producción.</p><ul><li>Material: Hilo de Polipropileno. Y estabilizado para rayos UV.</li><li>Color: Beige, con rayas laterales azules.</li><li>Medidas: Anchos desde 80 mm a 200 mm</li><li>Resistentes a hongos y bacterias.</li><li>Lavables, no mantienen la humedad.</li></ul>');

				let descarga = '<a href="/public/imgs/Bandas/BandaHuevo/bandas_avicolas_fichas_banda_transportadora_huevo_240517.pdf" download="BandadeHuevo.pdf"><img src="/public/imgs/descarga-ficha.png" alt=""></a>';

				$('.imagenBanderas').html('<div><div><img src="/public/imgs/Bandas/BandaHuevo/fotos_banda_huevo2.jpg" alt=""></div><div><img src="/public/imgs/Bandas/BandaHuevo/fotos_banda_huevo1.jpg" alt=""></div></div><div><div><img src="/public/imgs/Bandas/BandaHuevo/gráfica_banda_huevo.jpg" alt=""></div><div class="fichaTecnica"><span><img src="/public/imgs/Made-Spain.png" alt="">'+descarga+'</span></div></div>');
			}else if(url[2] =="DeflectorGallinaza"){
				$('.textBanner').html("Deflector de Gallinaza");
				$('.banner').css({
					"background-image": "url(/public/imgs/banners/portada_deflectordegallinaza.jpg)"
				});

				$('.textoSection').html('<h3>DEFLECTOR DE GALLINAZA</h3><p>Nuestro Deflector está fabricado con un copolimero de polipropileno de alta tenacidad.</p><ul><li>Material: Polipropileno (LYONDELLBASSELL MOPLEN EP440G) Materia Prima Virgen.</li><li>Medidas: Fabricamos a medida todos los anchos (60 cm) y espesores (0.8 mm). Tenemos también pedidos a medida para todas las jaulas del mercado.</li><li>Se puede fabricar con o sin ojillos de fijación.</li><li>Tratamiento UV.</li><li>Color: Blanco y Negro. (Con costo adicional)</li></ul>');

				let descarga = '<a href="/public/imgs/Bandas/DeflectorGallinaza/bandas_avicolas_fichas_deflector_gallinaza_240517.pdf" download="DeflectorGallinaza.pdf"><img src="/public/imgs/descarga-ficha.png" alt=""></a>';

				$('.imagenBanderas').html('<div><div><img src="/public/imgs/Bandas/DeflectorGallinaza/foto_deflector.jpg" alt=""></div><div><img src="/public/imgs/Bandas/DeflectorGallinaza/foto_deflector2.jpg" alt=""></div></div><div><div><img src="/public/imgs/Bandas/DeflectorGallinaza/Copia de gráfica_banda_gallinaza.jpg" alt=""></div><div class="fichaTecnica"><span><img src="/public/imgs/Made-Spain.png" alt="">'+descarga+'</span></div></div>');
			}else if(url[2] =="BandaElevadoraGallinaza"){
				$('.textBanner').html("Banda Transversal Elevadora de Gallinaza");
				$('.banner').css({
					"background-image": "url(/public/imgs/banners/portada_banda_transversal.jpg)"
				});

				$('.textoSection').html(
					'<h3>Banda Transversal Elevadora de Gallinaza</h3>'+
					'<p>Nuestra banda transversal está fabricada con la mejor tecnología ofreciendo así alta resistencia. Vulcanizada.</p>'+
					'<ul>'+
						'<li>Material: Poliéster Rígido</li>'+
						'<li>Peso: 3.50 kg /m2</li>'+
						'<li>Color: Verde (cobertura superior) y Negro o crudo (cobertura interterior)</li>'+
						'<li>Espesor Total: 2.90 mm (2 telas de 1.50 mm aprox)</li>'+
						'<li>Antiestática.</li>'+
					'</ul>'
				);

				let descarga = '';

				$('.imagenBanderas').html(
					'<div>'+
						'<div><img src="/public/imgs/Bandas/Transversal/foto_banda_transversal1.jpg" alt=""></div>'+
						'<div><img src="/public/imgs/Bandas/Transversal/foto_banda_transversal2.jpg" alt=""></div>'+
					'</div>'+
					'<div>'+
						'<div class="fichaTecnica"><span><img src="/public/imgs/Made-Spain.png" alt="">'+descarga+'</span></div>'+
						'<div></div>'+
					'</div>');
			}else if(url[2] =="SoldadorUltrasonido"){
				$('.textBanner').html("SOLDADOR DE ULTRASONIDO");
				$('.banner').css({
					"background-image": "url(/public/imgs/banners/portada_soldador_ultrasonido.jpg)"
				});

				$('.textoSection').html(
					'<h3>SOLDADOR DE ULTRASONIDO</h3>'+
					'<div>'+
						'<p>La soldadura Ultrasónica es un proceso de soldadura en estado sólido que suelda por la aplicación vibraciones de energía de alta frecuencia mientras las piezas están siendo sujetadas a presión.</p>'+
						'<p>Nuestro ultrasonido ofrece alta calidad en soldadura, uniforme y resistente. No hay calentamiento por lo que no se fragilizan zonas afectadas por calor. Los tiempos de ciclo son menores a un segundo. La contaminación superficial y oxidación no afectan. No contamina al no emitir gases ni residuos.</p>'+
					'</div>'+
					'<div style="padding-left: 100px">'+
						'<ul>'+
							'<li>Frecuencia: 40KHz</li>'+
							'<li>Potencia: 250 Watt</li>'+
							'<li>Temporizador Electrónico</li>'+
							'<li>Filtro de red.</li>'+
							'<li>Cable de conexión 5 mts</li>'+
							'<li>Microamperómetro digital</li>'+
							'<li>Dimensiones: 400mm x 330mm x135mm</li>'+
							'<li>Peso total del equipo con maletín: 12 kg</li>'+
						'</ul>'+
					'</div>'
				);

				$('.textoSection').addClass('textoSectionCompleto');
				

				let descarga = '<a href="/public/imgs/Bandas/Soldador/bandas_avicolas_fichas_soldador_ultrasonido_240517.pdf" download="SoldadorUltrasonido.pdf"><img src="/public/imgs/descarga-ficha.png" alt=""></a>';

				$('.imagenBanderas').html(
					'<div>'+
						'<div><img src="/public/imgs/Bandas/Soldador/foto_soldador1.jpg" alt=""></div>'+
						'<div><img src="/public/imgs/Bandas/Soldador/foto_soldador2.jpg" alt=""></div>'+
					'</div>'+
					'<div>'+
						'<div class="fichaTecnica"><span><img src="/public/imgs/Made-Spain.png" alt="">'+descarga+'</span></div>'+
						'<div></div>'+
					'</div>');
			}
		} 
	}
}

function content(data){
	info(ObjUrl.getUrl());
}

$( document ).ready(function() {
	info(ObjUrl.getUrl());
});
var menuActivado=false;
var altura = 69;

function contentHeaderFooter(data){
	let cadena = '';
	for (var i = 0; i < data['header'].length; i++) {
		if(Array.isArray(data['header'][i])){
			cadena += '<li class="litopn effectTransition"><div class="submenuMovile">'+data['header'][i][0]+'</div><ul class="effectTransition">';
			for (var j = 1; j < data['header'][i].length; j++) {
				cadena += '<li>'+data['header'][i][j]+'</li>';
			};
			cadena += '</ul></li>';
		}else{
			cadena += '<li class="litopn effectTransition">'+data['header'][i]+"</li>";
		}
	};
	$('#nav').html(cadena);
}

function menuFixed(){
	if ( $(window).scrollTop() > altura ){
		$('nav').addClass('menu_fixed');
	} else {
		$('nav').removeClass('menu_fixed');
	}
}

function main(){
	menuFixed();
	$(window).on('scroll', function(){
		menuFixed();
	});

	$('.icoMovile').click(()=>{
		if(menuActivado == false){
			$('nav').addClass('nav-act');
			$('.black-screen').addClass('black-screen-act');
			$('html, body').css('overflow', 'hidden');

			$('.black-screen-act').click(()=>{
				$('nav').removeClass('nav-act');
				$('.black-screen').removeClass('black-screen-act');
				$('html, body').css('overflow', 'auto');
				menuActivado=false;
			});

			$('.submenuMovile').click((event) => {

				$('.submenuMovile + ul').css({
					'display': 'none'
				});

				$(event.target.nextElementSibling).css({
					'display': 'block'
				});
			});

			menuActivado=true;
		}else{
			$('nav').removeClass('nav-act');
			$('.black-screen').removeClass('black-screen-act');
			$('html, body').css('overflow', 'auto');
			menuActivado=false;
		}
	});
}

main();
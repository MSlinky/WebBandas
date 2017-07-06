var menuActivado=false;
var altura = 69;

function contentHeaderFooter(data){
	console.log(data);
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
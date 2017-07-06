function contHeaderFooter(){
	ObjUrl.loadFile('/public/html/json/header-'+localStorage.getItem('Lan')+'.json', function(data){
		contentHeaderFooter(data);
	});
}

function loadContentJson(){
	return '/public/html/json/'+ObjUrl.getUrl()[1]+"-"+localStorage.getItem('Lan')+'.json';
}

function loadContent(){
	ObjUrl.checkLan(function (){
		contHeaderFooter();
	});
	let data = null;
	ObjUrl.loadFile(loadContentJson(), function(data){
		content(data);
	});
}

function main(){
	$('#'+localStorage.getItem('Lan')).addClass('lan-active');
	
	$('.lan').click((event) => { 
		if(event.target.id != localStorage.getItem('Lan')){
			ObjUrl.changeLan(event.target.id, function(){
				loadContent();
			});
		}
	});

	loadContent();
	window.onpopstate = function(){
		loadContent();
	}
}

main();
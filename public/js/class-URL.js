class UrlsExplorer{
	constructor(){
		this.NewUrl();
	}

	NewUrl(){
		this.url = document.location.href.split('/');
		this.url.shift(), this.url.shift(), this.url.shift();
	}

	loadFile(File, callBack){
		$.getJSON(File, (datos) => {
			callBack(datos);
	   })
		.fail(function() {
			console.log( "error al cargar JSON" );
		});
	}

	GetLan(){
		return localStorage.getItem('Lan');
	}

	addLan(url){
		window.location = '/'+localStorage.getItem('Lan')+url;
	}

	checkLan(callBack){
		if(this.getUrl()[0] != 'es' && this.getUrl()[0] != 'en' && this.getUrl()[0] != 'it'){
			if(localStorage.getItem('Lan') != 'es' && localStorage.getItem('Lan') != 'en' && localStorage.getItem('Lan') != 'it'){
				localStorage.setItem('Lan', navigator.language.split('-')[0]);
			}
			let url = "";
			for (let i = 0; i <= this.getUrl().length-1; i++) {
				url += "/"+this.getUrl()[i];
			};
			window.history.replaceState('', '', '/'+localStorage.getItem('Lan')+url);
			// location.reload();
		}


		$('.lan').removeClass('lan-active');
		this.NewUrl();
		localStorage.setItem('Lan', this.getUrl()[0]);
		$('#'+localStorage.getItem('Lan')).addClass('lan-active');
		callBack();
	}

	changeLan(lan, callBack){
		localStorage.setItem('Lan', lan);

		let url = '/'+localStorage.getItem('Lan');
		for(let cont=1; cont<this.url.length; cont++) url += '/'+this.url[cont];
		window.history.pushState('', '', url);
		callBack();
		return true;
	}

	getUrl(){
	   return this.url;
	}
};

var ObjUrl = new UrlsExplorer;
function content(data){
	for (var i = 0; i < data['textSection'].length; i++) {
		$('#section-'+i).html(data['textSection'][i]['text']);
	};
}
$(document).ready(function(){
	//votre code
	var compteur = 0;
	$('.cake').click(function(){
		compteur++;
		console.log(compteur);
		$('.counter').text(compteur);
		if(compteur%20 == 0){
			alert('Rien de mieux à faire ?');
		}
	});
});
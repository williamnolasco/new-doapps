var input_container = document.querySelectorAll('.input-container'),
	lively_bar = document.querySelectorAll('.lively-bar'),
	row_input_content = document.querySelectorAll('.row-input-content'),
	form_input = document.querySelectorAll('.form-input');

/*function livelyBar(posicion){
	return function(){
		lively_bar[posicion].classList.add('active');
		row_input_content[posicion].classList.add('active');
		for(var b=0; b<input_container.length; b++){
			input_value = form_input[posicion].value;
			if(input_value === ''){
				console.log('Todos los  input estan vacio');
			}else{
				console.log('Todos los  input estan lleno');
			}

		}
	};
}

for(var a=0; a<input_container.length; a++){
	input_container[a].addEventListener('click', livelyBar(a));
}*/

//Script para el select
/*var form_select = document.querySelector('.form-select'),
	ul_form_select = document.querySelector('.ul-form-select');

form_select.addEventListener('click', function(){
	ul_form_select.classList.add('active');
});*/

//Para que si no escribes nada, regrese a aus estado
$('.form-input').focusin(function() {
	$(this).parent().find('.lively-bar').addClass('active');
	$(this).parent().find('.row-input-content').addClass('active');

});
$('.form-input').focusout(function() {
	$(this).parent().find('.row-input-content').removeClass('active');
	$(this).parent().find('.lively-bar').removeClass('active');
});
$('body').on('change', '.form-input', function(event) {
	$input = $(this);
	if ($input.val().length < 1) {
		$(this).parent().find('.row-input-content').removeClass('active1');
		console.log('Estoy vacio');
	}else{
		$(this).parent().find('.row-input-content').addClass('active1');
		console.log('Estoy lleno');
	}
});






/*function animationsFooter(){
	if($(window).width() >= 1024){
		var footer_top = $('.footer-top');

		footer_top.waypoint(function(direction){
			if(direction === 'down'){
				$('.button-form').addClass('active');
			}else{
			}
			},{
			offset: '-30%'
		});
	}
}

animationsFooter();
$(window).resize(function(event){
	animationsFooter();
});*/
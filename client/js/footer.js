var input_container = document.querySelectorAll('.input-container'),
	lively_bar = document.querySelectorAll('.lively-bar'),
	row_input_content = document.querySelectorAll('.row-input-content');

function livelyBar(posicion){
	return function(){
		lively_bar[posicion].classList.add('active');
		row_input_content[posicion].classList.add('active');
	};
}

for(var a=0; a<input_container.length; a++){
	input_container[a].addEventListener('click', livelyBar(a));
}

function animationsFooter(){
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
});
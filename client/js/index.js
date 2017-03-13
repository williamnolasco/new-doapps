// Slider
var row_clients_length= $('.row-clients').length;

if (row_clients_length > 1) {
	$('.slider-clients-container').addClass('owl-carousel');

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		autoplay: true,
		responsive:{
			0:{
				items:1
			}
		}

	});
}

//animaciones

function animations(){
	if ($(window).width() >= 1024){
		//Contador
		var anima_item_b7 = $('.we-develop-bottom');
		anima_item_b7.waypoint(function(direction) {
			if (direction === 'down') {
				$('.timer1').countTo({
					from: 0,
					to: 140,
					speed: 1500,
					refreshInterval: 50,
					onComplete: function(value) {
					}
				});
				$('.timer2').countTo({
					from: 0,
					to: 50,
					speed: 1500,
					refreshInterval: 50,
					onComplete: function(value) {
					}
				});
				$('.timer3').countTo({
					from: 0,
					to: 80,
					speed: 1500,
					refreshInterval: 50,
					onComplete: function(value) {
					}
				});
			}else{
			}
			}, {
			offset:'90%'
		});

		//Animaciones en la seccion "we-develop" -   Animando el celular
		var animate_cel = $('.we-develop');
		animate_cel.waypoint(function(direction) {
			if (direction === 'down') {
				$('.we-develop-right').addClass('active');
			}else{
			}
			}, {
			offset:'-40%'
		});

		//Animacion en la seccion "Client"  -  Animando el boton d eesa seccion
		var animate_client = $('.client');
		animate_client.waypoint(function(direction){
			if(direction === 'down'){
				$('.btn-client').addClass('active');
			}else{
			}
			}, {
			offset: '0%'
		});
	}
}

animations();
$(window).resize(function(event) {
	animations();
});


//Click, en el boton "Scroll para mas", de la primera vista

$('.scroll-down').click(function(){
	$('html, body').animate({
		scrollTop: $('.client').offset().top
	}, 600);
});





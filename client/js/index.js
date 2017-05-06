// Slider
var items_length= $('.row-clients img').length;

if (items_length > 1) {
	$('.row-clients').addClass('owl-carousel');

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		autoplay: true,
		responsive:{
			0:{
				items:2
			},
			481:{
				items:3
			},
			768:{
				items: 4
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

$('.button-work').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $('.works').offset().top
	}, 600);
});





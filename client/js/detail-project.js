function animations(){
	if ($(window).width() >= 1024){
		//Contador
		var anima_item_b7 = $('.we-develop-bottom');
		anima_item_b7.waypoint(function(direction) {
			if (direction === 'down') {
				$('.timer1').countTo({
					from: 0,
					to: 30,
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
	}
}

animations();
$(window).resize(function(event) {
	animations();
});

$('.owl-carousel').owlCarousel({
	loop:true,
	margin:0,
	nav:false,
	autoplay: false,
	responsive:{
		0:{
			items:1
		},
		768:{
			items: 2
		}
	}

});

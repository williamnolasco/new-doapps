function animations(){
	var timer1_value = $('.timer1').text(), 
		timer2_value = $('.timer2').text(),
		timer3_value = $('.timer3').text();

	if ($(window).width() >= 1024){
		//Contador
		var anima_item_b7 = $('.we-develop-bottom');
		anima_item_b7.waypoint(function(direction) {
			if (direction === 'down') {
				$('.timer1').countTo({
					from: 0,
					to: timer1_value,
					speed: 1500,
					refreshInterval: 50,
					onComplete: function(value) {
					}
				});
				$('.timer2').countTo({
					from: 0,
					to: timer2_value,
					speed: 1500,
					refreshInterval: 50,
					onComplete: function(value) {
					}
				});
				$('.timer3').countTo({
					from: 0,
					to: timer3_value,
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

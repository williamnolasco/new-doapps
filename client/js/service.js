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
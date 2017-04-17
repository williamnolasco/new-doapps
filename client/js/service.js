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

//section "service-process", para cambiar imagen de fondo segun el dispositivo
function medidas(){
	$('.service-process-image').each(function(index, el) {
		var urlimg = $(this).attr('data-img');
		var img = urlimg.split(';');

		var screen = $(window).width();
		var bgi = '';
		var cierre = '';

		// insertando imagen segun medida
		if (screen > 0 && screen <= 480) {
			$(el).find('.service-process-bg').attr('src', bgi+img[0]+cierre);
		}
		if (screen > 480 && screen <= 768) {
			$(el).find('.service-process-bg').attr('src', bgi+img[1]+cierre);
		}
		if (screen > 768){
			$(el).find('.service-process-bg').attr('src', bgi+img[2]+cierre);
		}
	});
}
medidas();
$(window).resize(function(event) {
	medidas();
});
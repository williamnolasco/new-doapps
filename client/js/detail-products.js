
function carousel_detail_products(){
	if($(window).width() <= 600){
		$('.preview-slider').addClass('owl-carousel');
		$('.preview-slider').addClass('preview-slider-carousel');

		$('.preview-slider-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			autoplayTimeout: 2000,
			autoplay: false,
			responsive:{
				0:{
					items:1
				}
			}

		});
	}else{
		$('.owl-item .preview-slider').removeClass('owl-carousel');
		$('.owl-item.active .preview-slider').removeClass('preview-slider-carousel');
		$('.preview-slider-carousel').trigger('destroy.owl.carousel');
	}
}

carousel_detail_products();

$(window).resize(function(){
	carousel_detail_products();
});
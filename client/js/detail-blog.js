$(document).ready(function() {
	if (window.matchMedia('(max-width: 768px)').matches) {
		$('.publicity').appendTo('.detail-blog-content .wancho');
		console.log('llego')
	} else {
		$('.publicity').appendTo('.detail-blog-top');

	}
	
});

$(window).resize(function(event) {
	if (window.matchMedia('(max-width: 768px)').matches) {
		$('.publicity').appendTo('.detail-blog-content .wancho');
		console.log('llego')
	} else {
		$('.publicity').appendTo('.detail-blog-top');

	}
});
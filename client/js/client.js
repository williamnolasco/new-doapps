// Slider
jQuery(function($) {
	function generatePages() {
		var _total, i, _link;
		
		_total = $( "#carousel" ).rcarousel( "getTotalPages" );
		
		for ( i = 0; i < _total; i++ ) {
			_link = $( "<a href='#'></a>" );
			
			$(_link)
				.bind("click", {page: i},
					function( event ) {
						$( "#carousel" ).rcarousel( "goToPage", event.data.page );
						event.preventDefault();
					}
				)
				.addClass( "bullet off" )
				.appendTo( "#pages" );
		}
		
		// mark first page as active
		$( "a:eq(0)", "#pages" )
			.removeClass( "off" )
			.addClass( "on" )
			.css( "background-image", "url(images/page-on.png)" );

	}

	function pageLoaded( event, data ) {
		$( "a.on", "#pages" )
			.removeClass( "on" )
			.css( "background-image", "url(images/page-off.png)" );

		$( "a", "#pages" )
			.eq( data.page )
			.addClass( "on" )
			.css( "background-image", "url(images/page-on.png)" );
	}
	
	$("#carousel").rcarousel(
		{
			visible: 1,
			step: 1,
			speed: 700,
			auto: {
				enabled: true
			},
			width: 780,
			height: 240,
			start: generatePages,
			pageLoaded: pageLoaded
		}
	);
	
	$( "#ui-carousel-next" )
		.add( "#ui-carousel-prev" )
		.add( ".bullet" )
		.hover(
			function() {
				$( this ).css( "opacity", 0.7 );
			},
			function() {
				$( this ).css( "opacity", 1.0 );
			}
		);
});

//Contador
var media_min_1025 = window.matchMedia('(min-width: 1025px)');
if(media_min_1025.matches){
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
			// anima_item_b7.removeClass('active');
		}
		}, {
		offset:'90%'
	});
}
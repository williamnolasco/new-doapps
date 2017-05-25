$(document).on('ready', function(event) {

	function toggle_modulo(){
		if($(window).width() < 481){
			$('.courses-temary-item-bottom').slideUp();

			$(".courses-temary-item-top").on('click', function(event) {

				$this = $(this);

				$contentItem = $this.siblings('.courses-temary-item-bottom');

				if($contentItem.is(":visible")){

					$this.find("h5 i").removeClass().addClass('icon-chevron-thin-down');
					$contentItem.slideUp();
				}
				else{
					$this.find("h5 i").removeClass().addClass('icon-chevron-thin-up');
					$contentItem.slideDown();
				}

			});
		}
	}
	toggle_modulo();

	$(window).resize(function(){
		toggle_modulo();
	});

});

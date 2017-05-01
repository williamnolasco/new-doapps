$(document).on('ready', function(event) {

	$(".courses-temary-item-top").on('click', function(event) {

		$this = $(this);

		$contentItem = $this.siblings('.courses-temary-item-bottom');

		if($contentItem.is(":visible")){

			$this.find("h5 i").removeClass().addClass('icon-chevron-thin-left');
			$contentItem.slideUp();
		}
		else{
			$this.find("h5 i").removeClass().addClass('icon-angle-double-down');
			$contentItem.slideDown();
		}

	});
});
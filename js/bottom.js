$(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.return-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('return-is-visible') : $back_to_top.removeClass('return-is-visible return-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('return-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

// Show at bottom
$(window).scroll(function() {

  if ($(window).scrollTop() >= $(document).height() - $(window).height() - 250) {

       $(".return-bottom").addClass("visible");

   }
});

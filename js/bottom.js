
$(window).scroll(function() {

  if ($(window).scrollTop() >= $(document).height() - $(window).height() - 250) {
       //you are at bottom
       $(".return-bottom").addClass("visible");

   }
});

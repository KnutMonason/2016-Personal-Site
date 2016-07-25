
$(window).scroll(function() {
   $(".return-bottom").removeClass("visible");
  if ($(window).scrollTop() >= $(document).height() - $(window).height() - 300) {
       //you are at bottom
       $(".return-bottom").addClass("visible");

   }
});

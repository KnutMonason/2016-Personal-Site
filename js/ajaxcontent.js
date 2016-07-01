
         $('div[id="top"] ul li a').live(.click, function(e) {
         e.stopImmediatePropagation();
         e.preventDefault();
         var html = $(this).html();
         var content = $('div[id="middle"]');
         $(content).html(html);
         });

    
// -- snowflakes --//
$(document).ready(function(){
            $('.gallery').featherlightGallery({
                gallery: {
                    fadeIn: 300,
                    fadeOut: 300
                },
                openSpeed:    300,
                closeSpeed:   300
            });
            $('.gallery2').featherlightGallery({
                gallery: {
                    next: 'next »',
                    previous: '« previous'
                },
                variant: 'featherlight-gallery2'
            });

        });

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//stats.g.doubleclick.net/dc.js','ga');

        ga('create', 'UA-5342062-6', 'noelboss.github.io');
        ga('send', 'pageview');

      $("canvas.snow").let_it_snow({
            speed: 0,
            interaction: true,
            size: 2,
            count: 500,
            opacity: 0.1,
            color: "#ffffff",
            windPower: 1.3,
            image: false
        });
  


// -- calendar and date  --//

(function() {

  'use strict';

  // date

  var date = new Date(),
      month = date.getMonth() + 1,
      day = date.getDate() -10;



  if (month === 11) {

    for (var i = 0; i <= day; i++) {
      $('.day-' + i).addClass('active open');
    }

    var $day = $('.day-' + day);

    $day.on('click', function() {
      $day.addClass('active');
    });

  }


  $('.day-' + day).on('click', function() {
    var $this = $(this);
    if ($this.hasClass('open')) {
      
    } 
  });

})();


(function() {
    'use strict';
   
    var date = new Date(),
        month = date.getMonth() + 1,
        day = date.getDate() ;

    if (month === 1,2,3,4,5,6,7,8,9,10,11,12) {
        for (var i = 0; i <= day; i++) {
            $('.day-' + i).addClass('active open');
            $('.anima-' + i).addClass('slide-fwd-center-element');
        }
        
        var $day = $('.day-' + day);
        $day.on('click', function() {
            $day.addClass('active');
        });
    }


 
    $('.active').on('click', function() {
        var $this = $(this);    
        if ($this.hasClass('open')) {   
        } else {
            $this.addClass('open');
        }
    });

    $('.day-' + day).on('click', function() {
        var $this = $(this);
        if ($this.hasClass('iner')) { 
        } else {
            $this.addClass('wobble-hor-top');
        } 
    });

    $(document).ready(function(){    
        $day.addClass("wobble-hor-top");
        $day.hover(function() {
            if ($day.hasClass('wobble-hor-top')) {
                $day.removeClass('wobble-hor-top');
            }
        });
    });



})();

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


(function(i,s,o,g,r,a,m){i['']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })

$("canvas.snow").let_it_snow({
    speed: 0,
    interaction: true,
    size: 1.7,
    count: 100,
    opacity: 0.1,
    color: "#ffffff",
    windPower: 1.3,
    image: false
});


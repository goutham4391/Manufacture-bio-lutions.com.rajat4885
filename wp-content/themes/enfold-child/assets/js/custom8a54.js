(function($)
{   
    "use strict";

    $(window).load(function(){
        $('.avia-tooltip').hide();
        $('.av-image-hotspot').on('click', function(){
            $('.avia-tooltip').hide();
            $(this).find('.avia-tooltip').show();            
        });
    });

    $(document).mouseup(function(e) {
        var container = $('.av-image-hotspot');

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $('.avia-tooltip').hide();
        }
    });

    $(document).ready(function() {
        $('#logo-slider').slick({
            arrows: false,
            slidesToShow: 6,
            variableWidth: false,
            responsive: [
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        fade: true,
                    }
                },
            ]
        });

        // Get next slide by click
        $('#logo-slider').on("click", function(){
            $('.slide').slick('slickNext');
        });
    });

})(jQuery);
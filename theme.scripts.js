(function ($) {
    "use strict";

    /**!-------------------------------------------
        01. PRELOADER
    --------------------------------------------**/
    var $mainwindow = $(window);
    $mainwindow.on('load', function() {

        $("#loader").fadeOut(1000);
    });
    
    /**!-------------------------------------------
        01. COUNTERUP ACTIVATION
    --------------------------------------------**/
    $(window).on('scroll', function () {
        function winScrollPosition() {
            var scrollPos = $(window).scrollTop(),
                winHeight = $(window).height();
            var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
            return scrollPosition;
        }
        var elemOffset = $('.odometer').offset().top;
        if (elemOffset < winScrollPosition()) {

            $('.odometer').each(function () {
                $(this).html($(this).data('count-to'));
            });
        }
    });

    /**!-------------------------------------------
        02. COUNTER DOWN
    --------------------------------------------**/
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="countdown-body countdown-day"> <h2 class="countdown-count">%-D</h2> <h5>Days</h5></div><div class="countdown-body countdown-hour"> <h2 class="countdown-count">%-H</h2> <h5>Hour</h5></div><div class="countdown-body countdown-minutes"> <h2 class="countdown-count">%M</h2> <h5>Min</h5></div><div class="countdown-body countdown-seconds"> <h2 class="countdown-count">%S</h2> <h5>Sec</h5></div>'));
        });
    });

    
})(jQuery);
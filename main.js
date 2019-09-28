$(document).ready(function() {

    'use strict';


    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('active');
            if ($(window).width() < 768) {
                $('.nav-menu').slideUp();
            }
        });

        $(this).addClass('active');

        var target = this.hash,
            menu = target;

        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top - 80
        }, 500, 'swing', function() {
            window.location.hash = target.selector;
            $(document).on("scroll", onScroll);
        });
    });

    $('.responsive').on('click',function(e){
        $('.nav-menu').slideToggle();
    });

    function onScroll(event) {
        if ($('.home').length) {
            var scrollPos = $(document).scrollTop();
            $('nav ul li a').each(function() {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
            });
        }
    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $("#main-nav").slideDown(700);
        } else {
            $("#main-nav").slideUp(700);
        }
    });






    $('.btn-hover').on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    }).on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    });


});


/*========Window Load Function========*/
$(window).on("load", function() {
    
        
    // ========================================================================= //
    //  pre-loader
    // ========================================================================= //
    
    $(".pre-loader").fadeOut(10000);
    
    
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-grid-item'
    });

    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

});

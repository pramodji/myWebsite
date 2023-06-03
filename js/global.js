(function ($) {
    // USE STRICT
    "use strict";

    // Global variables
    var html_body = $('html, body');

    //-------------------------------------------------------
    // Config Library
    //-------------------------------------------------------

    // Config Slick
    var slickClass = $('.js-slick');
    slickClass.each(function () {
        var option = {
            accessibility: true,
            adaptiveheight: false,
            autoplay: false,
            autoplayspeed: 5000,
            arrows: false,
            asnavfor: null,
            appendarrows: $(this),
            appenddots: $(this),
            prevarrow: '<button type="button" class="slick-prev">Previous</button>',
            nextarrow: '<button type="button" class="slick-next">Next</button>',
            centermode: false,
            centerpadding: '50px',
            cssease: 'ease',
            dots: false,
            dotsclass: 'slick-dots',
            draggable: true,
            fade: false,
            speed: 500,
            pauseonhover: false,
            lg: 1, md: this.lg, sm: this.md, xs: this.sm,
            vertical: false,
            loop: true,
            thumb: false

        };

        for (var k in option) {
            if (option.hasOwnProperty(k)) {
                if ($(this).attr('data-slick-' + k) != null) {
                    option[k] = $(this).data('slick-' + k);
                }
            }
        }

        if (option.thumb)
            $(this).slick({
                accessibility: option.accessibility,
                adaptiveHeight: option.adaptiveheight,
                autoplay: option.autoplay,
                autoplaySpeed: option.autoplayspeed,
                arrows: option.arrows,
                asNavFor: option.asnavfor,
                appendArrows: option.appendarrows,
                appendDots: option.appenddots,
                prevArrow: option.prevarrow,
                nextArrow: option.nextarrow,
                centerMode: option.centermode,
                centerPadding: option.centerpadding,
                cssease: option.cssease,
                dots: option.dots,
                dotsClass: option.dotsclass,
                draggable: option.draggable,
                pauseOnHover: option.pauseonhover,
                fade: option.fade,
                vertical: option.vertical,
                slidesToShow: option.lg,
                infinite: option.loop,
                swipeToSlide: true,
                customPaging: function(slick, index) {
                    var portrait = $(slick.$slides[index]).data('thumb');
                    return '<img src=" ' + portrait + ' "/><div class="bg-overlay"></div>';
                },

                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: option.lg
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: option.md
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: option.md
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: option.sm
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: option.xs
                        }
                    }
                ]
            });
        else
            $(this).slick({
                accessibility: option.accessibility,
                adaptiveHeight: option.adaptiveheight,
                autoplay: option.autoplay,
                autoplaySpeed: option.autoplayspeed,
                arrows: option.arrows,
                asNavFor: option.asnavfor,
                appendArrows: option.appendarrows,
                appendDots: option.appenddots,
                prevArrow: option.prevarrow,
                nextArrow: option.nextarrow,
                centerMode: option.centermode,
                centerPadding: option.centerpadding,
                cssease: option.cssease,
                dots: option.dots,
                dotsClass: option.dotsclass,
                draggable: option.draggable,
                pauseOnHover: option.pauseonhover,
                fade: option.fade,
                vertical: option.vertical,
                slidesToShow: option.lg,
                infinite: option.loop,
                swipeToSlide: true,

                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: option.lg
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: option.md
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: option.md
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: option.sm
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: option.xs
                        }
                    }
                ]
            });

        $(this).on('init', function() {
            var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        $(this).on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $(this).find('[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });


        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('animation-delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    });


    // Config Animsition
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 800,
        outDuration: 800,
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'loader-wrapper',
        loadingInner: '<div class="loader"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });

    // Config Couter up
    var counterUp = $(".counterUp");
    if (counterUp) {
        counterUp.counterUp({
            delay: 10,
            time: 1000
        });
    }

    // Progress bar
    var executed = false;
    var waypointSelector = $('.js-waypoint');
    if (waypointSelector) {
        waypointSelector.waypoint(function () {
            if (!executed) {
                executed = true;
                /*progress bar*/
                $('.au-progress .au-progress-bar').progressbar({
                    update: function (current_percentage, $this) {
                        $this.find(".value").html(current_percentage + '%');
                    }
                });
            }
        }, {offset: 'bottom-in-view'});
    }

    // WOW JS
    function afterReveal (el) {
        el.addEventListener('animationend', function () {
            $(this).css({
                'animation-name': 'none'
            });
        });
    }
    var wow = new WOW({
        mobile:  false,
        callback: afterReveal
    });
    wow.init();

    //-------------------------------------------------------
    // Theme JS
    //-------------------------------------------------------

    // Variable selector

    // Navbar
    var header_bar = $('.js-header-bar, .js-header-bar-mobile');
    var header_bar_mobile = $('.js-header-bar-mobile');
    var header_bar_navbar = header_bar_mobile.find('.navbar-primary');
    var header_bar_toggler = header_bar_mobile.find('.navbar-toggler');
    var header_bar_offsetTop =  header_bar.offset().top;

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > header_bar_offsetTop) {
            header_bar.addClass("sticky");
        } else {
            header_bar.removeClass("sticky");
        }
    });

    // Bind to scroll
    var topMenu = header_bar,
        menuItems = topMenu.find(".nav-link"),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    menuItems.on("click", function (e) {
        var that = $(this);
        if (header_bar.hasClass('sticky'))
            html_body.animate({scrollTop: $(that.attr("href")).offset().top - header_bar.outerHeight()}, 800);
        else
            header_bar.addClass("sticky").delay(300).queue(function (next) {
                next();
                html_body.animate({scrollTop: $(that.attr("href")).offset().top - header_bar.outerHeight()}, 800);
            });
        header_bar_navbar.slideUp();
        e.preventDefault();
    });

    $(window).scroll(function(){
        var fromTop = $(this).scrollTop() + header_bar.outerHeight() + 15;
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
    });

    // Navbar mobile
    header_bar_navbar.hide();
    header_bar_toggler.on('click', function (e) {
        header_bar_navbar.slideToggle();
        e.preventDefault();
    });

    // Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Config Modal
    var modal = $('.js-modal');

    var modalAPImodal = modal.modal({
        backdrop: false,
        show: false
    });

    modalAPImodal.on('show.bs.modal', function () {
        $(this).find('.modal-dialog').attr('class', 'modal-dialog  ' + 'fadeIn' + '  animated');
        $(this).find('.modal-primary').hide();
    });

    modalAPImodal.on('shown.bs.modal', function () {
        var loader = $(this).find('.loader');
        loader.show();
        $(this).find('.modal-primary').delay(1000).fadeIn(500, function () {
            slickClass.slick('setPosition');
            loader.hide();
        });
    });

    modalAPImodal.on('hide.bs.modal', function () {
        $(this).find('.modal-dialog').attr('class', 'modal-dialog  ' + 'fadeOut' + '  animated');
    });

    // Config Slick Arrow Testimonials

    function posArrow() {
        $('.js-slick-test').each(function () {
            var x = $(this).find('.client-avatar img').offset().top - $(this).offset().top;
            $(this).find('.arrow').css('top', x);
        });
    }
    posArrow();

    $(window).on('resize', function () {
        posArrow();
    });

    // Config Intro
    var introSelector = $('.js-intro');

    // Lib
    $.fn.introSlider = function(options) {

        options = $.extend({
            layout: 'fullscreen',
            bg: null
        }, options);

        this.each(function(index, value){
            var $item = $(this);
            if(options.layout == 'fullscreen') {
                var wHeight = $(window).height();
                $item.height(wHeight);
                if ($(window).width() >= 992)
                    $(window).on('resize', function (){
                        wHeight = $(window).height();
                        $item.height(wHeight);
                    });
            }
            if (options.bg != null) {
                $item.css('background', 'url(' + options.bg + ') center center no-repeat');
                $item.css('background-size', 'cover');
            }
            window.onload = function () {
                $item.find('[data-intro-animate]').css('visibility', 'hidden');
                $item.find('[data-intro-animate]').each(function () {
                    var aniamteClass = $(this).data('intro-animate');
                    var aniamteDelay = $(this).data('intro-delay');
                    $(this).delay(aniamteDelay).queue(function (next) {
                        $(this).addClass(aniamteClass);
                        $(this).css('visibility', 'visible');
                        next();
                    });
                });
            };
        });

        return this;
    };

    // Run

    introSelector.each(function () {
        var option = {
            layout: 'fullscreen',
            bg: null
        };

        for (var k in option) {
            if (option.hasOwnProperty(k)) {
                if ($(this).attr('data-intro-' + k) != null) {
                    option[k] = $(this).data('intro-' + k);
                }
            }
        }
        $(this).introSlider({
            layout: option.layout,
            bg: option.bg
        });
    });




    // Back To Top
    var offset = 450;
    var duration = 500;
    var upToTop = $("#up-to-top");
    upToTop.hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            upToTop.fadeIn(duration);
        } else {
            upToTop.fadeOut(duration);
        }
    });

    upToTop.on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {

    /* Make sure the slider actually exists before initializing the slider */
    if (jQuery('section.header-bubble').length == 0) {
        return;
    }

    /* Start the animation as soon as page is loaded */ 
    $container = jQuery('section.header-bubble');
    
    gsap.to($container.find('.bg-pattern'), {
        duration: 1.2,
        y: '0px', 
        rotate: '0deg',
        opacity: 1,
    });

    gsap.to($container.find('.text'), {
        duration: 1.2,  
        y: '0px', 
        opacity: 1,
        delay: 0
    });

    gsap.to($container.find('.cta-image picture'), {
        duration: 1.2,
        y: '0px', 
        opacity: 1,
        delay: 0
    });

    gsap.to($container.find('.cta'), {
        duration: 1.2,
        y: '0px', 
        scale: 1,
        opacity: 1,
        delay: 0
    });

    gsap.to($container.find('.inner-slide'), {
        duration: 3,
        y: '0px', 
        ease: "elastic.out(1, 0.6)",
        scale: 1,
        opacity: 1,
        delay: 0,
        stagger: 0.1
    });

    gsap.to($container.find('.slide-right'), {
        duration: 0.4,
        opacity: 1,
        delay: 0.4
    });




    var HBSlider = new Array();
    jQuery('section.header-bubble .keen-slider').each(function (i) {

        var $this = jQuery(this);
        var $slides = $this.children().length;
        //var animation = { duration: ($slides * 20000), easing: (t) => t };

        let keenOptions = {
            selector: '.' + $this.children()[0].classList[0],
            slides: {
                perView: 'auto',
                spacing: '30'
            },
            mode: 'free-snap',
            loop: false,
            created: (s) => {
                $this.addClass('keen-slider').children().addClass('keen-slide');
            },
            breakpoints: {
                "(max-width: 700px)": {
                    slides: {
                        perView: 'auto',
                        spacing: '20'
                    }
                }
            }
        };

        HBSlider[i] = new KeenSlider($this[0], keenOptions);

        $this.siblings('.slide-right').click(function(){
            HBSlider[i].next();
        });
    });

});
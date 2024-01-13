document.addEventListener("DOMContentLoaded", function() {
   
    /* Make sure the slider actually exists before initializing the slider */
    if (jQuery('.bubbles.container').length == 0) {
        return;
    }

    /* Show profile for the clicked person */
    jQuery('.bubbles.container .bubble').off().click(function(){

        /* Make sure profile big is done animating */
        if( jQuery('.profile-big').is(':animated') ) { return; }
        
        /* Set clicked bubble as active */
        jQuery('.bubbles.container .bubble').removeClass('active');
        jQuery(this).addClass('active');
        
        /* If a profile is already being shown, hide it */
        jQuery('.profile-big').removeClass('fade');
        jQuery('.profile-big').removeClass('active'); 
        
        $profile = jQuery(this).attr('data-profile');
        jQuery('[data-profile="'+ $profile +'"]').addClass('active');
        setTimeout(function(){ 
            jQuery('[data-profile="'+ $profile +'"]').addClass('fade');
        }, 50);

    });

    /* Save slider object to array */
    var bubblesSlider = new Array();

    /* Loop through all the sliders */
    jQuery('section.bubbles .keen-slider').each(function(i){

        var $this = jQuery(this);
        var $slides = $this.children().length;
        //var animation = { duration: ($slides * 32000), easing: (t) => t };
        
        let keenOptions = {
            selector: '.' + $this.children()[0].classList[0],
            slides: {
                perView: '5',
                spacing: () => {
                  return jQuery(window).width() * 0.03;
                }
            },
            mode: 'free-snap',
            loop: true,
            created: (s) => {
               $this.addClass('keen-slider').children().addClass('keen-slide');
            },
            breakpoints: {
                "(max-width: 1600px)": {
                    slides: {
                        perView: '4',
                        spacing: () => {
                            return jQuery(window).width() * 0.03;
                        }
                    }
                },
                "(max-width: 1200px)": {
                    slides: {
                        perView: '3',
                        spacing: () => {
                            return jQuery(window).width() * 0.03;
                        }
                    }
                },
                "(max-width: 900px)": {
                    slides: {
                        perView: '2',
                        spacing: () => {
                            return jQuery(window).width() * 0.03;
                        }
                    }
                },
                "(max-width: 600px)": {
                    slides: {
                        perView: '1.5',
                        spacing: '20'
                    }
                },

            }
        };

        bubblesSlider[i] = new KeenSlider($this[0], keenOptions);

        /* Slide to the left when clicking on .slide-left */
        $this.siblings('.slide-left').click(function(){
            bubblesSlider[i].prev();
        });
        $this.siblings('.slide-right').click(function(){
            bubblesSlider[i].next();
        });

    });

});
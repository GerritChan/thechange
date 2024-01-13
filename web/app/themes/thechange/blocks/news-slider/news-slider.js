jQuery(document).ready(function(){

    /* Make sure the slider actually exists before initializing the slider */
    if (jQuery('section.news-slider .keen-slider').length == 0) {
        return;
    }
    
    /* Save slider object to array */
    var newsSlider = new Array();

    /* Loop through all the sliders */
    jQuery('section.news-slider .keen-slider').each(function(i){

        var $this = jQuery(this);
        
        let keenOptions = {
            selector: '.' + $this.children()[0].classList[0],
            slides: {
                perView: 3,
                spacing: '26'
            },
            animationStarted: (props) => {
                $this.children().removeClass('active');
                $this.children().eq(props.animator.targetIdx).addClass('active');

                /* Hide slider controls when at the beginning or at the end of the slides */
                $this.siblings('.slide-left').removeClass('hide');
                $this.siblings('.slide-right').removeClass('hide');
                if (props.animator.targetIdx == 0) {
                    $this.siblings('.slide-left').addClass('hide');
                }
                if (props.animator.targetIdx == $this.children().length - props.options.slides.perView) {
                    $this.siblings('.slide-right').addClass('hide');
                }

            },
            created: (instance) => {
               $this.children().eq(0).addClass('active');
               $this.addClass('keen-slider').children().addClass('keen-slide');
            },
            breakpoints: {
                "(max-width: 1200px)": {
                    slides: {
                        perView: 2,
                        spacing: 30
                    }
                },
                "(max-width: 800px)": {
                    slides: {
                        perView: 1,
                        spacing: 25
                    }
                }
            }

        };

        newsSlider[i] = new KeenSlider($this[0], keenOptions);

        /* Slide to the left when clicking on .slide-left */
        $this.siblings('.slide-left').click(function(){
            newsSlider[i].prev();
        });
        $this.siblings('.slide-right').click(function(){
            newsSlider[i].next();
        });

    });
    
});
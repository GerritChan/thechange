document.addEventListener("DOMContentLoaded", function () {
    addSubjectEffects();
});

function addSubjectEffects() {

    /* Make sure the slider actually exists before initializing the slider */
    if (jQuery('section.subjects').length == 0) {
        return;
    }

    /* Show all subjects on desktop, show slider on mobile? */

    ScrollTrigger.create({
        trigger: jQuery('section.subjects')[0], 
        start: "top bottom-=200",
        onEnter: function () {
            gsap.to(jQuery('section.subjects a'), {
                duration: 2.5,
                ease: "elastic.out(1, 0.5)", 
                y: '0px', 
                delay: 0,
                opacity: 1, 
                stagger: 0.06
            });
        }
    });

        // /* Save slider object to array */
        // var tagSlider = new Array();

        // /* Loop through all the sliders */
        // jQuery('section.subjects .keen-slider').each(function (i) {

        //     var $this = jQuery(this);
        //     var $slides = $this.children().length;
        //     var animation = { duration: ($slides * 20000), easing: (t) => t };

        //     let keenOptions = {
        //         selector: '.' + $this.children()[0].classList[0],
        //         slides: {
        //             perView: 'auto',
        //             spacing: '10'
        //         },
        //         mode: 'free-snap',
        //         loop: true,
        //         created: (s) => {
        //             $this.addClass('keen-slider').children().addClass('keen-slide');
        //             s.moveToIdx(s.track.details.abs + ($slides - 1), true, animation)
        //          },
        //          updated(s) {
        //              s.moveToIdx(s.track.details.abs + ($slides - 1), true, animation)
        //          },
        //          animationEnded(s) {
        //              s.moveToIdx(s.track.details.abs + ($slides - 1), true, animation)
        //          }
        //     };

        //     tagSlider[i] = new KeenSlider($this[0], keenOptions);
        // });
}
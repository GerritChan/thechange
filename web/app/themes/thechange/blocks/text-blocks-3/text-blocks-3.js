document.addEventListener("DOMContentLoaded", function () {
    

    jQuery('section.text-blocks-3').each(function(){

        var $this = jQuery(this);

        ScrollTrigger.create({
            trigger: $this[0],  
            start: "top 85%", 
            onEnter: function () {
                gsap.to($this.find('.text-block'), {
                    duration: 3, 
                    ease: "elastic.out(1, 0.4)", 
                    y: '0px', 
                    delay: 0.4,
                    opacity: 1,
                    stagger: 0.1
                });
            }
        });

    });

});
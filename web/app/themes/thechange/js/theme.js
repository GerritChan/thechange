document.addEventListener("DOMContentLoaded", function() {

  animateSection();

});

function animateSection() {

  if (!jQuery('.animate-in').length) return;

  jQuery('.animate-in').each(function () {

      var $this = jQuery(this);

      ScrollTrigger.create({
          trigger: $this[0],
          start: "top bottom-=100",
          onEnter: function () {
              $this.find('.inner-wide').addClass('in-viewport');
              $this.find('.inner').addClass('in-viewport');
              $this.find('.inner-narrow').addClass('in-viewport');
              $this.find('.text-image-wrapper').addClass('in-viewport');
              $this.find('.hero-image-container').addClass('in-viewport');
              $this.find('.bubbles-slider').addClass('in-viewport');
          }
      });
  });

}
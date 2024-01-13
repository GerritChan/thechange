var menu = 'closed';
jQuery(document).ready(function () {
    
    jQuery('.mobile-menu-trigger').click(function () {
        (menu == 'closed') ? openMenu() : closeMenu();
    });
    
    jQuery('.mobile-menu-viewport .menu-item-has-children > a').removeAttr('href');
    jQuery('.mobile-menu-viewport .menu-item-has-children').click(function(e){
      
       let $this = jQuery(this);
       /* close other menu's */
       if(!$this.hasClass('active')){
          jQuery('.mobile-menu-viewport .menu-item-has-children.active').toggleClass('active').find('ul.sub-menu').slideToggle(400, 'swing');
       }
       
       $this.toggleClass('active');
       $this.find('ul.sub-menu').slideToggle(400, 'swing');
    });

});

function openMenu() {
   jQuery('header').addClass('headroom--menu-open').addClass('headroom--menu-opened');
   jQuery('.mobile-menu-bg').removeClass('mobile-menu-bg--hidden').addClass('mobile-menu-bg--show');
   jQuery('.mobile-menu-trigger').removeClass('mobile-menu-trigger--initial').addClass('mobile-menu-trigger--close');
   jQuery('.mobile-menu-container').addClass('mobile-menu-container--show');
   jQuery('.mobile-menu-viewport').addClass('mobile-menu-viewport--active');
    
   
   var duration = 1; 
   var y = 120;
   jQuery('.mobile-menu-container a:visible').each(function () {

        var $this = jQuery(this);
        

        duration -= 0.1; 
        y -= 10;

   });

    gsap.from(jQuery('.mobile-menu-container a:visible'), {
        duration: 0.8,
        ease: "elastic.out(1, 0.75)",
        y: 30,
        scale: 0.75,
        delay: 0.4,
        opacity: 0,
        stagger: 0.04
    });


   menu = 'open';
   bodyScrollLock.disableBodyScroll(document.querySelector('.mobile-menu-viewport'));
}

function closeMenu() {
   if (menu == 'open') {
      jQuery('.mobile-menu-bg').addClass('mobile-menu-bg--hidden').removeClass('mobile-menu-bg--show');
      jQuery('.mobile-menu-container').removeClass('mobile-menu-container--show');
      jQuery('.mobile-menu-trigger').removeClass('mobile-menu-trigger--close').addClass('mobile-menu-trigger--initial');
      jQuery('header').removeClass('headroom--menu-open').removeClass('headroom--menu-opened');
      jQuery('.mobile-menu-viewport').removeClass('mobile-menu-viewport--active');
      menu = 'closed';
      bodyScrollLock.enableBodyScroll(document.querySelector('.mobile-menu-viewport'));
   }
}

document.addEventListener("DOMContentLoaded", function () {
      
    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: function (scroll) {
            if(scroll.direction === -1){
               jQuery('header').addClass('scrolling-up').removeClass('scrolling-down');
            }else{
               jQuery('header').addClass('scrolling-down').removeClass('scrolling-up');
            }

            if(scroll.progress === 0){
               jQuery('header').addClass('top').removeClass('not-top');
            }else{
               jQuery('header').addClass('not-top').removeClass('top');
            }
        }
    });

});
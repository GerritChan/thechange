jQuery(document).ready(function () {

    /* Make sure the block actually exists before continueing */
    if (!jQuery('section.drop-down').length) { return; }

    jQuery('.drop-down-row .title').click(function () { 

        var $this = jQuery(this).closest('.drop-down-row');

        jQuery('.drop-down-row').not($this).removeClass('active');
        jQuery('.drop-down-row').not($this).find('.content').slideUp();

        $this.toggleClass('active');
        $this.find('.content').slideToggle();

    });
    
    /* Scroll to corresponding section when clicking on a menu item */
    jQuery('.menu-hotlink').click(function () {

        /* Get current menu item eq */
        var $current = jQuery(this).index();

        /* Scroll to corresponding section */
        jQuery('html, body').animate({
            scrollTop: jQuery(".dropdown-title").eq( $current - 1 ).offset().top - 60
        }, 800);

    });

});
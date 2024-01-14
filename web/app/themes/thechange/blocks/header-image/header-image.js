document.addEventListener("DOMContentLoaded", function() {

    if (!jQuery('section.header-image').length) { return; }

    /* Check if this block is the first child */
    var isFirst = jQuery('section.header-image').parent().children().first().hasClass('header-image');

    if(isFirst){
        jQuery('header').addClass('white');
    }

    
});

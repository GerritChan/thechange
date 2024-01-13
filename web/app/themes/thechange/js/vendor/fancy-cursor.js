/* if user is using a touchscreen, disable fancy cursor */
window.addEventListener('touchstart', function () {
    window.removeEventListener('mousemove', fancyCursor);
    jQuery('.fancy-cursor').addClass('disabled');
 });
 
 /* Triggers for the fancy cursor */
 window.addEventListener('mousemove', fancyCursor);
 
 function fancyCursor(e) {
 
    var mouseY = e.clientY;
    var mouseX = e.clientX;
 
    var $this = jQuery(e.target);
    var $cursor = jQuery('.fancy-cursor');
 
    var cursor = window.getComputedStyle(e.target)["cursor"];
    /* when cursor is set to none, check for custom cursor */
    if (cursor == 'none') {
      let $closest = $this.closest("*[data-cursor]");
      let $cursorClass = $closest.attr('data-cursor');
      $cursor.attr('class', 'fancy-cursor');
      $cursor.addClass($cursorClass);
    }else{
      $cursor.attr('class', 'fancy-cursor');
    }
 
    /* Check if target needs fancy cursor */
    $cursor.css('transform', 'translate3d(' + mouseX + 'px, ' + mouseY + 'px, 0)');
 }
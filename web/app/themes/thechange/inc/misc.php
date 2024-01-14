<?php 

/* Removes Gutenberg default styles on front-end */
add_action('wp_print_styles', function () {
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
});

/* Give empty (spacing) paragraphs a tag to allow better frontend styling */
add_filter('the_content', function ($text) {
    $text = str_replace("<p style=\"text-align: center;\">\n", '<p class="space">&nbsp;', $text);
    $text = str_replace('<p>&nbsp;', '<p class="space">&nbsp;', $text);
    return $text;
});

/* Increase standard cropping jpg quality for better end-results */
add_filter('jpeg_quality', function ($arg) {
    return 100;
});

/* Defer javascript for beter pagespeed scores / experience */
add_filter('script_loader_tag', function ($url) {

    /* Do not change admin JS/CSS */
    if (is_user_logged_in()) return $url;

    /* Some files should not be deferred, list them here.  */
    $do_not_defer = array('jquery.js', 'jquery.min.js', 'dist/i18n', 'dist/hooks');
    if (str_replace($do_not_defer, '', $url) != $url) return $url;

    /* Remove un-used JS */
    $do_not_load = array('jquery-migrate', 'wp-embed');
    if (str_replace($do_not_load, '', $url) != $url) return '';

    /* No objections found, defer JS */
    if (strpos($url, '.js')) return str_replace(' src', ' defer src', $url);

    /* Load CSS Async for better pagespeeds */
    if (strpos($url, '.css')) return str_replace(' href', ' rel="preload" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"> href', $url);

}, 10);

/* Change hyperlink for login logo */
add_filter( 'login_headerurl', function(){
    return "https://thechange-leefstijl.nl"; 
});

/* Enable svg for upload */
add_filter( 'upload_mimes', function( $mimes ){
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
});

/* Add 404 page programmatically if it does exist. Return 404 page id */
function check_404_page(){
    
    $page_404 = get_page_by_path('404-niet-gevonden');
    if(!empty($page_404)){ return $page_404->ID; }

    $page_404_id = wp_insert_post(array(
        'post_title'    => '404',
        'post_name'     => '404-niet-gevonden',
        'post_status'   => 'publish',
        'post_type'     => 'page'
    ));

    update_post_meta( $page_404_id, '_yoast_wpseo_meta-robots-noindex', '1' );
    update_post_meta( $page_404_id, '_yoast_wpseo_meta-robots-nofollow', '1' );

    return $page_404_id;

}

/* After theme activation, directly make 404 page */
add_action('after_switch_theme', 'check_404_page');

/* disable emoji's because it gives errors */
add_action( 'init', function(){
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
});
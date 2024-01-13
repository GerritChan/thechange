<?php 

/* If 404 page has not been made yet, create it manually */
$id = check_404_page();

/* Get 404 page content */
$content = apply_filters('the_content', get_post_field('post_content', $id));

get_header(); 

echo $content;

get_footer();
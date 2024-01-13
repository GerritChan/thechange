<?php

function render_news_slider( $block, $content = '', $is_preview = false, $post_id = 0 ) {
     
    $fields = get_fields();
    
    /* See news-overview for the function */
    $news_items = get_latest_news(6, $post_id);

    include 'view.php';

}

function get_latest_news($amount = '3', $exclude = ''){

    $args = array(
        'post_type' => 'blog',
        'posts_per_page' => $amount,
        'post_status' => 'publish',
        'orderby' => 'date',
        'order' => 'DESC'
    );

    /* Exclude post is set */
    if($exclude){
        $args['post__not_in'] = array($exclude);
    }

    $query = new WP_Query( $args );
    
    /* Loop through the posts and get the title, date and image */
    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();
            
            $news_items[] = array(
                'id' => get_the_id(),
                'title' => get_the_title(),
                'excerpt' => get_the_excerpt(),
                'permalink' => get_the_permalink(),
                'date' => date_i18n( 'd F Y', get_the_date('U', get_the_id())  ),
                'date_tag' => date_i18n( 'Y-m-d', get_the_date('U', get_the_id())  ),
                'image' => get_the_post_thumbnail_url(get_the_id()),
            );
        }
        /* reset the query */
        wp_reset_postdata();
    } else{
        return false;
    }

    return $news_items;
}
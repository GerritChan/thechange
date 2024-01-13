<?php

function render_reviews( $block, $content = '', $is_preview = false, $post_id = 0 ) {
     
    $fields = get_fields();
    
    /* See news-overview for the function */
    $news_items = get_latest_news(6, $post_id);

    include 'view.php';

}

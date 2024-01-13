<?php

function render_bubbles( $block, $content = '', $is_preview = false, $post_id = 0 ) {
    
    $cropper = new Cropper($post_id, $block);
    $fields = get_fields();
    include 'view.php';

}
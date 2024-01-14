<?php

function render_header_image( $block, $content = '', $is_preview = false, $post_id = 0 ) {
    
    $cropper = new Cropper($post_id, $block);
    $fields = get_fields();

    $images = array(
        'mobile_webp' => $cropper->resize($fields['image_mobile']['url'], 600, '', 'webp'),
        'mobile' => $cropper->resize($fields['image_mobile']['url'], 600),
        'desktop' => $cropper->resize($fields['image']['url'], 1920),
        'desktop_webp' => $cropper->resize($fields['image']['url'], 1920, '', 'webp'),
    );

    include 'view.php';

}
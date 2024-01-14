<?php

function render_text_image_header( $block, $content = '', $is_preview = false, $post_id = 0 ) {
     
    $fields = get_fields();

    /* Crop images to the right size */
    $cropper = new Cropper($post_id);
    $fields['cropped'] = array(
        'mobile' => $cropper->resize($fields['image_mobile']['url'], 500),
        'mobile_webp' => $cropper->resize($fields['image_mobile']['url'], 500, '', 'webp'),
        'desktop' => $cropper->resize($fields['image']['url'], 900),
        'desktop_webp' => $cropper->resize($fields['image']['url'], 900, '', 'webp')	
    );

    include 'view.php';

}
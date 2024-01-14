<?php

function render_text_blocks_3( $block, $content = '', $is_preview = false, $post_id = 0 ) {
     
    if( isset( $block['data']['is_example'] )  ) { 
        echo '<img src="'. get_template_directory_uri() .'/blocks/' . basename(dirname(__FILE__)) . '/example.png" style="width:100%; height:auto;">';
        return;
    }
    
    $fields = get_fields();
    include 'view.php';

}
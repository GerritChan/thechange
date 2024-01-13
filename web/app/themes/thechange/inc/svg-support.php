<?php

/* add SVG mime type */
add_filter( 'upload_mimes', function($mimes){
   $mimes['svg'] = 'image/svg+xml';
   $mimes['svgz'] = 'image/svg+xml';
   return $mimes;
}, 99);


add_filter( 'wp_check_filetype_and_ext', function($checked, $file, $filename, $mimes){
   if ( ! $checked['type'] ) {

      $check_filetype = wp_check_filetype( $filename, $mimes );
      $ext = $check_filetype['ext'];
      $type	= $check_filetype['type'];
      $proper_filename	= $filename;

      if ( $type && 0 === strpos( $type, 'image/' ) && $ext !== 'svg' ) {
         $ext = $type = false;
      }

      $checked = compact( 'ext','type','proper_filename' );
   }

   return $checked;
}, 10, 4 );


/* Display SVG in attachment modal */
add_filter( 'wp_prepare_attachment_for_js', function($response, $attachment, $meta){
   if ( $response['mime'] == 'image/svg+xml' && empty( $response['sizes'] ) ) {

      $svg_path = get_attached_file( $attachment->ID );

      if ( ! file_exists( $svg_path ) ) {
         // If SVG is external, use the URL instead of the path
         $svg_path = $response['url'];
      }

      $svg = simplexml_load_file( $svg_path );
      $width = $height = '0';

      if ( $svg !== FALSE ) {
         $attributes = $svg->attributes();
         $width = (string) $attributes->width;
         $height = (string) $attributes->height;
      }

      $response['sizes'] = array(
         'full' => array(
            'url' => $response['url'],
            'width' => $width,
            'height' => $height,
            'orientation' => $width > $height ? 'landscape' : 'portrait'
         )
      );
   }
   return $response;
}, 10, 3 );
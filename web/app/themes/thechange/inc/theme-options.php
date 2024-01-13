<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

/* Load fields into block */
add_action('acf/init', function (){

    // Check function exists.
    if( function_exists('acf_add_options_sub_page') ) {

        // Add parent.
        $parent = acf_add_options_page(array(
            'page_title'  => __('Thema opties'),
            'menu_title'  => __('Thema opties'),
            'menu_slug' => 'theme_options',
            'menu_position' => '2',
            'redirect'    => 'theme_options_header',
        ));

        // Add sub page.
        $header = acf_add_options_sub_page(array(
            'page_title'  => __('Header'),
            'menu_title'  => __('Header'),
            'menu_slug' => 'theme_options_header',
            'parent_slug' => $parent['menu_slug'],
        ));

        $footer = acf_add_options_sub_page(array(
            'page_title'  => __('Footer'),
            'menu_title'  => __('Footer'),
            'menu_slug' => 'theme_options_footer',
            'parent_slug' => $parent['menu_slug'],
        ));

        $social = acf_add_options_sub_page(array(
            'page_title'  => __('Social media'),
            'menu_title'  => __('Social media'),
            'menu_slug' => 'theme_options_social',
            'parent_slug' => $parent['menu_slug'],
        ));

    }

});

require_once 'theme-options/options-header.php';

require_once 'theme-options/options-footer.php';

require_once 'theme-options/options-social.php';
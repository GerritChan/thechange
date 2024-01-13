<?php 

/* Register custom post type blog */

add_action('init', function () {
    register_post_type('blog', array(
        'labels' => array(
            'name' => 'Reviews',
            'singular_name' => 'Reviews',
            'add_new' => 'Toevoegen',
            'add_new_item' => 'Artikel toevoegen',
            'edit_item' => 'Artikel bewerken',
            'new_item' => 'Nieuwe artikel',
            'view_item' => 'Bezoek artikel',
            'search_items' => 'Artikelen zoeken',
            'not_found' => 'Geen artikelen gevonden',
            'not_found_in_trash' => 'Geen artikelen gevonden',
            'parent_item_colon' => 'Hoofd',
            'menu_name' => 'Reviews',
        ),
        'hierarchical' => false,
        'description' => 'Blog',
        'supports' => array('title', 'editor', 'thumbnail', 'revisions', 'author', 'excerpt'),
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-share',
        'show_in_nav_menus' => true,
        'publicly_queryable' => true,
        'public' => true,
        'exclude_from_search' => false,
        'show_in_rest' => true,
        'has_archive' => false,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => true,
        'capability_type' => 'post',
        'taxonomies' => array(' onderwerp '),
    ));

    register_taxonomy(
        'onderwerp', 
        array('blog'), 
        array(
            'hierarchical' => true,
            'label' => 'Onderwerp',
            'query_var' => true,
            'show_in_rest' => true
        )
    );

});
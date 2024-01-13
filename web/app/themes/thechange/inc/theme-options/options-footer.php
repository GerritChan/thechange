<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

$footer_options = new FieldsBuilder('theme_options_footer');

$footer_options
    ->setLocation('options_page', '==', 'theme_options_footer');

$footer_options

    //other footer content
    ->addWysiwyg('footer_content_one', [
        'label' => 'Kolom 1',
        'wrapper' => [
            'width' => 25,
        ]
    ])

    ->addWysiwyg('footer_content_two', [
        'label' => 'Kolom 2',
        'wrapper' => [
            'width' => 25,
        ]
    ])

    ->addWysiwyg('footer_content_three', [
        'label' => 'Kolom 3',
        'wrapper' => [
            'width' => 25,
        ]
    ])

    ->addWysiwyg('footer_content_four', [
        'label' => 'Kolom 4',
        'wrapper' => [
            'width' => 25,
        ]
    ]);

add_action('acf/init', function () use ($footer_options) {

    acf_add_local_field_group($footer_options->build());

});
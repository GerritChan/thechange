<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

$header_options = new FieldsBuilder('theme_options_header');

$header_options
    ->setLocation('options_page', '==', 'theme_options_header');

$header_options
    ->addImage('header_logo', [
        'label' => 'Logo',
        'instructions' => 'Kies je logo',
        'wrapper' => [
            'width' => 25,
        ]
    ]);

add_action('acf/init', function () use ($header_options) {

    acf_add_local_field_group($header_options->build());

});
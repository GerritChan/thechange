<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

$social_options = new FieldsBuilder('theme_options_social');

$social_options
    ->setLocation('options_page', '==', 'theme_options_social');

$social_options
    ->addText('facebook_link', [
        'label' => 'Facebook',
        'wrapper' => [
            'width' => 25,
        ]
    ])

    ->addText('twitter_link', [
        'label' => 'Twitter',
        'wrapper' => [
            'width' => 25,
        ]
    ])

    ->addText('instagram_link', [
        'label' => 'Instagram',
        'wrapper' => [
            'width' => 25,
        ]
    ])

    ->addText('linkedin_link', [
        'label' => 'LinkedIn',
        'wrapper' => [
            'width' => 25,
        ]
    ]);

add_action('acf/init', function () use ($social_options) {

    acf_add_local_field_group($social_options->build());

});
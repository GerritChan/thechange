<?php
/* https://github.com/Log1x/acf-builder-cheatsheet */

$block->addWysiwyg('Tekst', [
  'name' => 'text'
])

->addField('image', 'image_aspect_ratio_crop', [
  'label' => 'Afbeelding',
  'crop_type' => 'free_crop',
  'return_format' => 'array',
  'preview_size' => 'medium',
  'wrapper' => [
     'width' => 100
  ]
])

->addTextarea('Cta tekst', [
  'name' => 'cta_text'
])

->addRelationship('posts', [
  'label' => 'Toon blog/nieuws',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
      'width' => '',
      'class' => '',
      'id' => '',
  ],
  'post_type' => ['blog', 'post'],
  'filters' => [
      0 => 'search',
      1 => 'post_type',
      2 => 'taxonomy',
  ],
  'return_format' => 'id'
]);
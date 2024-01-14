<?php
/* https://github.com/Log1x/acf-builder-cheatsheet */


$block->addField('image', 'image_aspect_ratio_crop', [
  'label' => 'Afbeelding',
  'crop_type' => 'aspect_ratio',
  'aspect_ratio_width' => '975',
  'aspect_ratio_height' => '1175',
  'return_format' => 'array',
  'preview_size' => 'medium',
  'wrapper' => [
    'width' => 35
  ]
])

->addField('image_mobile', 'image_aspect_ratio_crop', [
  'label' => 'Afbeelding mobiel',
  'crop_type' => 'aspect_ratio',
  'aspect_ratio_width' => '100',
  'aspect_ratio_height' => '75',
  'return_format' => 'array',
  'preview_size' => 'medium',
  'wrapper' => [
    'width' => 35
  ]
])

->addWysiwyg('Tekst', [
  'name' => 'text',
  'wrapper' => [
    'width' => 65
  ]
]);


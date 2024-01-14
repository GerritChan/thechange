<?php
/* https://github.com/Log1x/acf-builder-cheatsheet */


$block->addRadio('bg_color', [
  'label' => 'Achtergrondkleur',
  'choices' => [
    'bg-primary' => 'Wit',
    'bg-secondary' => 'Lichtgrijs',
  ],
  'wrapper' => [
    'width' => '50',
  ],
  'default_value' => 'bg-primary',
])

->addRadio('image_position', [
  'label' => 'Positionering',
  'choices' => [
    'text-right' => 'Afbeelding | Tekst',
    'text-left' => 'Tekst | Afbeelding'
  ],
  'default_value' => ['text-right'],
  'wrapper' => [
    'width' => 25
  ]
])

->addRadio('text_alignment', [
  'label' => 'Verticale tekst positie',
  'choices' => [
    'text-top' => 'Bovenaan',
    'text-center' => 'In het midden',
    'text-bottom' => 'Onderaan'
  ],
  'default_value' => ['text-center'],
  'wrapper' => [
    'width' => 25
  ]
])

->addRadio('image_width', [
  'label' => 'Verdeling tekst en afbeelding',
  'choices' => [
    'image-40' => '60/40',
    'image-50-overlap' => '70/50 (overlap)',
    'image-50' => '50/50',
    'image-60' => '40/60'
  ],
  'default_value' => ['image-50'],
  'wrapper' => [
    'width' => 25
  ]
])

->addField('image', 'image_aspect_ratio_crop', [
  'label' => 'Afbeelding',
  'crop_type' => 'free_crop',
  //'aspect_ratio_width' => '500',
  //'aspect_ratio_height' => '500',
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
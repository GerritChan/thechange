<?php

$block->addWysiwyg('Tekst', [
   'name' => 'text',
   'wrapper' => [
      'width' => 40
   ]
])

->addField('image', 'image_aspect_ratio_crop', [
   'label' => 'Afbeelding desktop',
   'crop_type' => 'aspect_ratio',
   'aspect_ratio_width' => 1920,
   'aspect_ratio_height' => 1080,
   'return_format' => 'array',
   'preview_size' => 'medium',
   'wrapper' => [
      'width' => 30
   ]
])

->addField('image_mobile', 'image_aspect_ratio_crop', [
   'label' => 'Afbeelding mobile',
   'crop_type' => 'aspect_ratio',
   'aspect_ratio_width' => 800,
   'aspect_ratio_height' => 600,
   'return_format' => 'array',
   'preview_size' => 'medium',
   'wrapper' => [
      'width' => 30
   ]
])

->addTrueFalse('scroll_arrow', [
   'label' => 'Toon scroll pijltje'
]);

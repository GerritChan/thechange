<?php
/* https://github.com/Log1x/acf-builder-cheatsheet */


/* add wysiwyg field */
$block->addWysiwyg('Tekst boven bubbels', [
   'name' => 'text',
   'wrapper' => [
      'width' => 100
   ]
])

->addRepeater('cards', [
   'label' => 'Bubbels',
   'wrapper' => [
      'width' => 100,
      'class' => 'quarter-width'
   ],
   'min' => 4,
   'layout' => 'block'
])

->addGroup('profile_small', [
   'label' => 'Profiel klein',
   'wrapper' => [
      'width' => 40
   ], 
])

->addField('image', 'image_aspect_ratio_crop', [
   'label' => 'Afbeelding',
   'crop_type' => 'aspect_ratio',
   'aspect_ratio_width' => 400,
   'aspect_ratio_height' => 400,
   'return_format' => 'array',
   'preview_size' => 'medium',
   'wrapper' => [
      'width' => 100
   ]
])

->addText('name', [
   'label' => 'Naam'
])

->addText('function', [
   'label' => 'Functie'
])

->endGroup()

->addGroup('profile_big', [
   'label' => 'Profiel groot',
   'wrapper' => [
      'width' => 60
   ], 
])

->addField('image', 'image_aspect_ratio_crop', [
   'label' => 'Afbeelding',
   'crop_type' => 'aspect_ratio',
   'aspect_ratio_width' => 400,
   'aspect_ratio_height' => 400,
   'return_format' => 'array',
   'preview_size' => 'medium',
   'wrapper' => [
      'width' => 100
   ]
])

->addWysiwyg('Tekst', [
   'name' => 'text',
   'wrapper' => [
      'width' => 100
   ]
])

->endGroup()

->endRepeater();
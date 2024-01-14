<?php
/* https://github.com/Log1x/acf-builder-cheatsheet */

$block->addWysiwyg('Tekst', [
  'name' => 'text'
])

->addRepeater('reviews', [
  'label' => 'Reviews',
  'wrapper' => [
     'width' => 100,
  ],
  'min' => 3,
  'layout' => 'block'
])

->addText('name', [
  'label' => 'Naam'
])

->addWysiwyg('Tekst', [
  'name' => 'text',
  'wrapper' => [
     'width' => 100
  ]
])

->endRepeater();
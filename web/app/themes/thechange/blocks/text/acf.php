<?php
/* https://github.com/Log1x/acf-builder-cheatsheet */

$block->addRadio('width', [
  'label' => 'Breedte',
  'choices' => [
    'inner-narrow' => 'Standaard',
    'inner' => 'Breed',
  ],
  'wrapper' => [
    'width' => '50',
  ],
  'default_value' => 'inner-narrow',
])

->addRadio('bg_color', [
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

->addWysiwyg('Tekst', [
  'name' => 'text'
]);

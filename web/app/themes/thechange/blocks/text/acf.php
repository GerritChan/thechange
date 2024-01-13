<?php
/* https://github.com/Log1x/acf-builder-cheatsheet */

$block->addRadio('width', [
  'label' => 'Breedte',
  'choices' => [
    'inner-narrow' => 'Standaard',
    'inner' => 'Breed',
  ],
  'default_value' => 'inner-narrow',
])

->addWysiwyg('Tekst', [
  'name' => 'text'
]);

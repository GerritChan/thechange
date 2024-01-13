<?php

$block->addRepeater('downloads_row', [
  'label' => 'Downloads blok',
  'wrapper' => [
     'width' => 100,
  ],
  'min' => 1,
  'layout' => 'block'
])

->addtext('download_category', [
  'label' => 'Download categorie',
])

->addRepeater('files', [
    'label' => 'Bestanden',
    'wrapper' => [
      'width' => 100,
    ],
    'min' => 1,
    'layout' => 'block'
])

->addFile('file', [
  'label' => 'Bestand',
  'instructions' => '',
  'return_format' => 'array',
  'library' => 'all',
  'min_size' => '',
  'max_size' => '',
  'mime_types' => '',
])

->endRepeater()

->endRepeater()

->addWysiwyg('text_right', [
  'label' => 'Tekst naast vragen',
  'wrapper' => [
    'width' => 100
  ]
]);

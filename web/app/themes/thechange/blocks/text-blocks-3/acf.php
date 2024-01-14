<?php
/* https://github.com/Log1x/acf-builder-cheatsheet */


/* add wysiwyg field */
$block->addRepeater('blocks', [
    'label' => 'Blokken',
    'wrapper' => [
       'width' => 100,
       'class' => 'third-width'
    ],
    'min' => 3,
    'layout' => 'block'
])

->addLink('link', [
   'label' => 'Link',
])

->addText('title', [
   'label' => 'Titel',
])

->addTextarea('subtitle', [
   'label' => 'Subtitel',
])

->endRepeater();
<?php
/* https://github.com/Log1x/acf-builder-cheatsheet */


/* add wysiwyg field */
$block->addRepeater('subjects', [
    'label' => 'Onderwerpen',
    'wrapper' => [
       'width' => 100,
       'class' => 'quarter-width'
    ],
    'min' => 3,
    'layout' => 'block'
])

->addLink('subject', [
   'label' => 'Subject',
   'instructions' => '',
   'required' => 0,
   'conditional_logic' => [],
   'wrapper' => [
       'width' => '',
       'class' => '',
       'id' => '',
   ],
   'return_format' => 'array',
   'post_type' => ['post', 'page'],
])


->endRepeater();
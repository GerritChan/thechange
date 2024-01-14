<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="preload" href="<?= get_template_directory_uri(); ?>/styles/fonts/glacialindifference-regular.woff2" as="font" type="font/woff2" crossorigin>
		<?php wp_head(); ?>
	</head>

	<body <?php body_class( array('front-end', sanitize_title(get_the_title()) ) ); ?>>

	    <?php include 'blocks/header/view.php'; ?>
		<main>


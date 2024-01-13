<?php
    /* Add Menu Walker: https://awhitepixel.com/blog/wordpress-menu-walkers-tutorial/ */
    /* wp_nav_menu opties: https://developer.wordpress.org/reference/functions/wp_nav_menu/ */

    $desktop_menu = array(
       'theme_location' => 'main-menu',
       'container' => 'nav',
       'container_class' => 'desktop-menu',
    ); 
?>

<header class="top">
    <div class="inner-wide">

        <a href="<?= get_home_url(); ?>" class="logo">
            <?= file_get_contents(get_template_directory_uri() . '/build/images/logo.svg'); ?>
        </a>

        <div class="nav-container">
            <?php wp_nav_menu( $desktop_menu ); ?>
        </div>

        
        <a class="cta cta-1" href="http://localhost:8888/thechange/aanbod/personal-training/"> Contact</a>

        <div class='mobile-menu-trigger mobile-menu-trigger--initial mobile'>
            <div class='hamburger-menu'>
                <span></span>
                <span></span>
                <span></spatn>
            </div>
        </div>


    </div>
</header>

<?php 
$desktop_menu['container_class'] = 'mobile-menu'; ?>

<div class="mobile-menu-viewport mobile">
    <div class="mobile-menu-container">
        <div class="inner-wide">

        <?= wp_nav_menu($desktop_menu); ?>

        </div>
        <img src="<?= get_template_directory_uri(); ?>/build/images/pattern-dark.svg" class="bg-pattern">
        <!-- <div class="mobile-menu-bottom">
            <div class="inner-wide">
            </div>
        </div> -->
    </div>
</div>
<div class="mobile-menu-bg mobile-menu-bg--hidden"></div>
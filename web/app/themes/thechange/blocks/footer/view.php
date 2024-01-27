<?php
    /* Add Menu Walker: https://awhitepixel.com/blog/wordpress-menu-walkers-tutorial/ */
    /* wp_nav_menu opties: https://developer.wordpress.org/reference/functions/wp_nav_menu/ */
    
?>

<section class="footer container">


    <div class="inner-wide bottom">

        <div class="col">
            <article>
            <a href="<?= get_home_url(); ?>" class="logo">
            <?= file_get_contents(get_template_directory_uri() . '/build/images/logo.svg'); ?>
            </a>
            </article>

            <article>
            <div class="socials"> 
            <a href="<?= get_field('instagram_link', 'option'); ?>" target="_blank"><?= file_get_contents( get_template_directory() . '/build/images/instagram.svg' ); ?></a>
            <a href="<?= get_field('facebook_link', 'option'); ?>" target="_blank"><?= file_get_contents( get_template_directory() . '/build/images/facebook.svg' ); ?></a>
            <a href="<?= get_field('linkedin_link', 'option'); ?>" target="_blank"><?= file_get_contents( get_template_directory() . '/build/images/linkedin.svg' ); ?></a>
        </div>
            </article>

  

  
        </div>

        <div class="col">
            <article>
                <?php the_field('footer_content_two', 'option'); ?>
            </article>
        </div>

        <div class="col">
            <article>
                <?php the_field('footer_content_three', 'option'); ?>
            </article>
        </div>

        <div class="col">
            <article>
                <?php the_field('footer_content_four', 'option'); ?>
            </article>
        </div>

    </div>

</section>
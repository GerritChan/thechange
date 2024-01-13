<!-- <section class="news-slider container animate-in bg-primary">
    <div class="inner">
        
        <div class="top">
            <div class="left">
                <h2>Anderen over Cynthia</h2>
            </div>
        </div>

        <div class="wrapper">
            <div class="slide-left hide"></div>

            <div class="slides keen-slider">
                <?php foreach ($news_items as $item) {
                    $cropper = new Cropper($item['id']);
                    ?> 
                    
                    <a class="news-card" href="<?= $item['permalink']; ?>">
                        
                        <picture>
                            <source srcset="<?= $cropper->resize($item['image'], 720, '', 'webp'); ?>" type="image/webp"/>
                            <img src="<?= $cropper->resize($item['image'], 720); ?>" alt="<?= $item['title']; ?>" loading="lazy"/>
                        </picture>
                        <div class="content">
                            <h5><?= $item['title']; ?></h5>
                            <p><?= $item['excerpt']; ?></p> 
                        </div>
                    
                    </a>

                <?php } ?>

                <?php foreach ($news_items as $item) {
                    $cropper = new Cropper($item['id']);
                    ?> 
                    
                    <a class="news-card" href="<?= $item['permalink']; ?>">
                        
                        <picture>
                            <source srcset="<?= $cropper->resize($item['image'], 720, '', 'webp'); ?>" type="image/webp"/>
                            <img src="<?= $cropper->resize($item['image'], 720); ?>" alt="<?= $item['title']; ?>" loading="lazy"/>
                        </picture>
                        <div class="content">
                            <h5><?= $item['title']; ?></h5>
                            <p><?= $item['excerpt']; ?></p> 
                        </div>
                    
                    </a>
                    
                <?php } ?>
            </div>

            <div class="slide-right"></div>
        </div>

    </div>
</section> -->


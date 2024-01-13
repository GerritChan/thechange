<div class="wave-top relative w-full">
    <svg preserveAspectRatio="none" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 28.4746C0 28.4746 275.556 -35.5932 720 28.4746C1164.44 92.5424 1440 28.4746 1440 28.4746V80H0V28.4746Z" fill="#F8F8F8"></path>
</svg>
  </div>



<section class="news-slider container animate-in bg-primary">
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
</section>


<div class="wave-bottom relative w-full">
    <svg preserveAspectRatio="none" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1440 51.5254C1440 51.5254 1164.44 115.593 720 51.5254C275.556 -12.5424 0 51.5254 0 51.5254V0H1440V51.5254Z" fill="#F8F8F8"></path>
</svg>

  </div>
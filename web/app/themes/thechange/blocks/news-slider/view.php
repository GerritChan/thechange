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
                    
                    <div class="news-card" href="<?= $item['permalink']; ?>">
                        
                        <div class="content">
                            <h5><?= $item['title']; ?></h5>
                            <p>Ooit was ik ruim 30 kilo te zwaar en at ik meer patat dan goed voor me was. Niet omdat ik dit wilde, maar omdat ik er simpelweg geen weerstand tegen kon bieden.<?= $item['excerpt']; ?></p> 
                        </div>
    
                    </div>

                <?php } ?>

            </div>

            <div class="slide-right"></div>
        </div>

    </div>
</section>
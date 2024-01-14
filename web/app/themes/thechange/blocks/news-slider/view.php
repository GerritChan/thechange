<section class="news-slider container animate-in bg-primary">
    <div class="inner">
        
        <div class="top">
            <div class="left">
                <h2><?= $fields['text']; ?></h2>
            </div>
        </div>

        <div class="wrapper">
            <div class="slide-left hide"></div>

            <div class="slides keen-slider">
                <?php foreach ($fields['reviews'] as $review) {
                    ?> 
                    
                    <div class="news-card">
                        
                        <div class="content">
                            <h5><?= $review['name']; ?></h5>
                            <?= $review['text']; ?>
                        </div>
    
                    </div>

                <?php } ?>

            </div>

            <div class="slide-right"></div>
        </div>

    </div>
</section>
<section class="bubbles container animate-in bg-primary no-pad">
   
   <?php if ($fields['text']) { ?>
      <div class="inner">
         <?= $fields['text']; ?>
      </div>
   <?php } ?>

   <div class="bubbles-slider">
      <div class="slide-left"></div>
      <div class="bubbles-wrapper keen-slider">
         <?php foreach ($fields['cards'] as $card) { ?>
            <div class="bubble" data-profile="<?= sanitize_title( $card['profile_small']['name'] ); ?>" data-cursor="plus">
               <div class="inner-bubble">
                  <picture>
                     <source srcset="<?= $cropper->resize( $card['profile_small']['image']['url'], 320, '', 'webp'); ?>" type="image/webp" />
                     <img src="<?= $cropper->resize( $card['profile_small']['image']['url'], 320 ); ?>" alt="<?= $card['profile_small']['image']['alt']; ?>" loading="lazy" />
                  </picture>
                  <div class="bubble-hover">
                     <h4><?= $card['profile_small']['name']; ?></h4>
                     <h5><?= $card['profile_small']['function']; ?></h5>
                  </div>
               </div>
            </div>
         <?php } ?>
      </div>
      <div class="slide-right"></div>
   </div>
   
   <div class="inner profile-wrapper">
      <div class="profiles">
      <?php foreach ($fields['cards'] as $card) { ?>
         <div class="profile-big" data-profile="<?= sanitize_title( $card['profile_small']['name'] ); ?>">
            <div class="green-bubble">
               <div class="text">
                  <?= $card['profile_big']['text']; ?>
               </div>
            </div>
            <div class="blue-bubble">
               <picture>
                  <source srcset="<?= $cropper->resize( $card['profile_big']['image']['url'], 450, '', 'webp'); ?>" media="(max-width: 500px)" type="image/webp" />
                  <source srcset="<?= $cropper->resize( $card['profile_big']['image']['url'], 450); ?>" media="(max-width: 500px)" />
                  <source srcset="<?= $cropper->resize( $card['profile_big']['image']['url'], 900, '', 'webp'); ?>" type="image/webp" />
                  <img src="<?= $cropper->resize( $card['profile_big']['image']['url'], 900 ); ?>" alt="<?= $card['profile_big']['image']['alt']; ?>" loading="lazy" />
               </picture>
            </div>
         </div>
      <?php } ?>
      </div>
   </div>

</section>
<section class="text-image-header container bg-primary">
   <div class="inner">

      <div class="text-image-wrapper">

         <div class="text-container">
            <?= $fields['text']; ?>
         </div>

         <div class="spacer"></div>

         <!-- <picture class="image">
            <source srcset="<?= $fields['cropped']['desktop_webp']; ?>" type="image/webp"/>
            <img src="<?= $fields['cropped']['desktop']; ?>" alt="<?= $fields['image']['alt']; ?>"/>
         </picture> -->

      </div>

   </div>

   <div class="mask2">
      <picture class="image">
         <source srcset="<?= $fields['cropped']['mobile_webp']; ?>" media="(max-width: 500px)" type="image/webp" />
         <source srcset="<?= $fields['cropped']['mobile']; ?>" media="(max-width: 500px)" />
         <source srcset="<?= $fields['cropped']['desktop_webp']; ?>" type="image/webp" />
         <img src="<?= $fields['cropped']['desktop']; ?>" alt="<?= $fields['image']['alt']; ?>" />
      </picture>
   </div>

</section>
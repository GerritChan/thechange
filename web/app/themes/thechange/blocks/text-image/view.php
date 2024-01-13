<section class="text-image bg-primary container animate-in">
   <div class="inner">

      <div class="text-image-wrapper <?= $fields['image_position']; ?> <?= $fields['text_alignment']; ?> <?= $fields['image_width']; ?>">

         <div class="text-container">

            <?= $fields['text']; ?>
         </div>

         <div class="spacer"></div>

         <picture class="image">
            <source srcset="<?= $fields['cropped']['desktop_webp']; ?>" type="image/webp"/>
            <img src="<?= $fields['cropped']['desktop']; ?>" alt="<?= $fields['image']['alt']; ?>"/>
         </picture>

      </div>
      
   </div>
</section>

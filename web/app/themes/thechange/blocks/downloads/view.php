<section class="container downloads bg-primary animate-in">
   <div class="inner-narrow">

      <!--<div class="text-wrapper">
         <div class="text-top-column">
            <?= $fields['text']; ?>
         </div>
         <div class="menu-column">
            <h4>Snel naar</h4>

            <?php
            if(!empty($fields['question_row'])) {
            foreach ($fields['question_row'] as $faq_row) { ?>
               <div class="menu-hotlink cta-2"><?= $faq_row['title']; ?></div>
            <?php } 
            }
            ?>
         </div>
      </div>-->

      <div class="downloads-wrapper">

         <div class="downloads-column">
            <?php foreach ($fields['downloads_row'] as $row) {
               if ($row['download_category']) { ?>
                  <h4 class="download-title"><?= $row['download_category']; ?></h4>
               <?php } ?>

               <div class="download-wrapper">
                  <?php foreach ($row['files'] as $download) { 
                     $file = $download['file'];
                     ?>
                     <a class="download" href="<?= $file['url']; ?>" download>
                        <div class="filename"><?= $file['title']; ?></div>
                        <div class="download-arrow">
                           <strong>Download</strong>
                           <span></span>
                        </div>
                     </a>
                  <?php } ?>
               </div>

            <?php } ?>
         </div>
         <div class="text-column">
             <?= $fields['text_right']; ?>
         </div>

      </div>

   </div>
</section>
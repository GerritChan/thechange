<section class="text-blocks-3 container bg-primary">
   <div class="inner">

      <div class="text-block-wrapper">
         <?php
         foreach ($fields['blocks'] as $block) {
         ?> 
            <a class="text-block" <?= ($block['link']) ? 'href="'.$block['link']['url'].'"' : ''; ?>">
               <div class="inner-block">
                  <p class="title"><?= $block['title']; ?></p>
                  <p class="subtitle"><?= $block['subtitle']; ?></p>
               </div>
            </a>
         <?php
         }
         ?>
      </div>

   </div>
</section>
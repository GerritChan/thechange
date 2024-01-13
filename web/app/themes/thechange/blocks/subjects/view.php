<section class="subjects container bg-primary animate-in">
   <div class="inner">

      <h3>Meest bekeken onderwerpen</h3>

      <div class="subject-wrapper keen-slider">
         <?php foreach ($fields['subjects'] as $subject) { ?> 
            <a class="subject cta-2" href="<?= $subject['subject']['url']; ?>"> <?= $subject['subject']['title']; ?> </a>
         <?php } ?> 
      </div>

   </div>
</section>
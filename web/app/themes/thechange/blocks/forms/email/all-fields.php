<?php 
/* https://gravitywiz.com/gravity-forms-all-fields-template/#form-specific-template */

foreach( $items as $item ){ ?> 

<p>
	<strong><?php echo $item['label']; ?></strong><br>
	<?php echo $item['value']; ?>
</p>
<p class="spacing-20">&nbsp;</p>

<?php } ?>
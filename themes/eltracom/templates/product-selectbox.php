<?php 
$proQuery = new WP_Query(array(
  'post_type' => 'product',
  'posts_per_page'=> -1,
  'order'=> 'ASC',
));

if( $proQuery->have_posts() ){
?>
<div class=" pro-select-main">
	<select class="selectpicker select_location">
	<option selected="selected">ALL PRODUCTS</option>
	<?php  while($proQuery->have_posts()): $proQuery->the_post();  ?>
		<option value="<?php echo get_the_permalink(); ?>"><?php echo get_the_title(); ?></option>
	<?php endwhile; ?>
	</select>
</div>
<?php } wp_reset_postdata();?>
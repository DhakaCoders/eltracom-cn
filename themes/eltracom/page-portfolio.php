<?php 
/*
	Template Name: Portfolio
*/
get_header(); 
get_template_part( 'templates/page', 'banner' );

$thisID = get_the_ID()
?>

<div class="portfolio-page-overflow-con">
<?php 
$introsec = get_field('introsec', $thisID);
if($introsec):
  
?>
<section class="portfolio-intro-sec-wrp">     
  <div class="portfolio-intro-logo">
    <img src="<?php echo THEME_URI; ?>/assets/images/portfolio-intro-logo.png" alt="" />
  </div>  
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="portfolio-intro-sec-innr">
          <?php if( !empty( $introsec['content'] ) ) echo wpautop($introsec['content']); ?>
        </div>  
      </div>
    </div>
  </div>
</section>
<?php 
endif;
$proQuery = new WP_Query(array(
  'post_type' => 'product',
  'posts_per_page'=> 8,
  'order'=> 'ASC',
));

if( $proQuery->have_posts() ){
?>
<section class="portfolio-main-sec-wrp"> 
  <div class="portfolio-main-innr-wrp">
    <?php $i = 1;
                    
      while($proQuery->have_posts()): $proQuery->the_post(); 
      $overview = get_field('overviewsec', get_the_ID());
      $gridimage = '';
      if(!empty($overview['image'])){
        $gridimage = cbv_get_image_src($overview['image']);
      } 
      $gridlogotag = '';
      if(!empty($overview['logo'])){
        $gridlogotag = cbv_get_image_tag($overview['logo']);
      }
      $excerpt = $overview['excerpt'];
      $posttitle = get_the_title();
      if(!empty($overview['title'])) $posttitle = $overview['title'];     
    ?>
    <div class="portfolio-main-item" style="background:url(<?php echo $gridimage; ?>);">
      <div class="portfolio-main-item-overlay"></div>
      <div class="portfolio-main-item-des">
        <div class="portfolio-main-item-des-head">
          <i><?php echo $gridlogotag; ?></i>  
          <?php printf( '<a href="%s">%s</a>', get_the_permalink(), $posttitle); ?>        
        </div>
        <?php 
          if( !empty( $overview['excerpt'] ) ) echo wpautop( $overview['excerpt'] ); 
        ?> 
      </div>
    </div>
    <?php endwhile; ?>
  </div>
</section>  
<?php } wp_reset_postdata();?>
</div>




<section class="ftr-top-wrp text-center" id="">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img src="<?php echo THEME_URI; ?>/assets/images/ftr-top-bg-2.png" alt="" />
      </div>
    </div>
  </div>
</section>
<?php get_footer(); ?>
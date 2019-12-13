<?php
/*
 * Template Name: Food Packageing
 * Template Post Type: product
 */
 
get_header(); 
get_template_part( 'templates/product', 'banner' );
$thisID = get_the_ID();
 ?>

<section class="food-Packag-main-sec">
<?php 
$introsec = get_field('introsec', $thisID);
if($introsec):
$icons = $introsec['icons'];
$intropostersrc = '';
if(!empty($introsec['image'])){
  $intropostersrc = cbv_get_image_src($introsec['image']);
}
?>
  <div class="food-Packag-block-wrp clearfix">
    <div class="food-Packag-img pro-page-top-con">
      <div class="food-Packag-img-inner-wrp">
        <div class="food-Packag-img-inner" style="background: url(<?php echo THEME_URI; ?>/assets/images/food-rgt-bg-img.jpg);">
          <img src="<?php echo THEME_URI; ?>/assets/images/food-rgt-bg-img.jpg" alt="" />
        </div>          
      </div>    
      <div class="pro-page-logo-img">
        <img src="<?php echo THEME_URI; ?>/assets/images/pro-page-logo-2.png" alt="" />
      </div>
    </div>
    <div class="food-Packag-des pro-page-top-con clearfix">
      <div class="food-Packag-des-innr">
        <?php if( !empty( $introsec['content'] ) ) echo wpautop($introsec['content']); 
        if($icons):
        ?>
        <div class="food-Packag-des-img-inc-wrp">
          <?php 
          foreach($icons as $icon):
            $iconpostertag = '';
            if(!empty($icon['icon'])){
              $iconpostertag = cbv_get_image_tag($icon['icon']);
            } 
          ?>
          <a><?php echo $iconpostertag; ?></a>
        <?php endforeach; ?>
        </div>
      <?php endif; ?>
      </div>
    </div>
  </div>
<?php endif; 

$fpboard = get_field('food_properties', $thisID);
if($fpboard):
$plink = $fpboard['plink'];
$gridlogotag = '';
if(!empty($fpboard['image'])){
  $gridlogotag = cbv_get_image_tag($fpboard['image']);
}
?>
  <div class="food-Packag-two-part-con clearfix">
    <div class="food-Packag-left-part food-Packag-part clearfix">
      <div class="pro-web-left-bg"></div>
      <div class="food-Packag-left-part-innr">        
        <div class="food-Packag-left-des">
          <?php 
            if( !empty( $fpboard['title'] ) ) printf( '<h6>%s</h6>', $fpboard['title']);
            if( !empty( $fpboard['content'] ) ) echo wpautop($fpboard['content']);
          ?>
        </div>
      </div>
    </div>
    <div class="food-Packag-rgt-part food-Packag-part">     
      <div class="food-pack-pic">
        <?php echo $gridlogotag; ?>
      </div>       
    </div>
  </div>
  <div class="productPage-slc-wrp text-center">
  <?php 
   get_template_part( 'templates/product', 'selectbox' );
  if( is_array( $plink ) &&  !empty( $plink['url'] ) ){
    printf('<a href="%s" target="%s">%s</a>', $plink['url'], $plink['target'], $plink['title']); 
  }
  ?>
  </div>
  <?php endif; ?>
</section>
 <?php get_footer();  ?>
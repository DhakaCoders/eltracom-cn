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
$show_hideintro = get_field('show_hideintro', $thisID);
if($show_hideintro):
$introsec = get_field('introsec', $thisID);
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

$show_hidepboard = get_field('show_hidepboard', $thisID);
if($show_hidepboard):
$fpboard = get_field('food_properties', $thisID);
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
    <div class=" pro-select-main">
      <select class="selectpicker ">
        <option selected="selected">ALL PRODUCTS</option>
        <option>Corrugated Case MATERIALS </option>
        <option>Cartonboard</option>
        <option>Specialty Papers</option>
        <option>Cupstock</option>
        <option>Tissue PaperS</option>
      </select>
    </div>
  <?php 
  if( is_array( $plink ) &&  !empty( $plink['url'] ) ){
    printf('<a href="%s" target="%s">%s</a>', $plink['url'], $plink['target'], $plink['title']); 
  }
  ?>
  </div>
  <?php endif; ?>
</section>
 <?php get_footer();  ?>
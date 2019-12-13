<?php
/*
 * Template Name: Cupstock
 * Template Post Type: product
 */
 
get_header(); 
get_template_part( 'templates/product', 'banner' );
$thisID = get_the_ID();
 ?>
<section class="cupstock-main-sec">
<?php 
$introsec = get_field('introsec', $thisID);
if($introsec):
$icons = $introsec['icons'];
$plink = $introsec['plink'];
$intropostersrc = '';
if(!empty($introsec['image'])){
  $intropostersrc = cbv_get_image_src($introsec['image']);
}
?>
  <div class="cupstock-block-wrp clearfix">
    <div class="cupstock-img pro-page-top-con">
      <div class="cupstock-img-inner-wrp">
        <div class="cupstock-img-inner" style="background: url(<?php echo $intropostersrc; ?>);">
          <img src="<?php echo $intropostersrc; ?>" alt="mobile image" />
        </div>          
      </div>      
      <div class="pro-cupstock-img">
        <img src="<?php echo THEME_URI; ?>/assets/images/cupstock-cup-img.png" alt="" />
      </div>     
      <div class="pro-page-logo-img">
        <img src="<?php echo THEME_URI; ?>/assets/images/pro-page-logo-1.png" alt="" />
      </div>
    </div>
    <div class="cupstock-des pro-page-top-con clearfix">
      <div class="cupstock-des-innr">
        <?php if( !empty( $introsec['content'] ) ) echo wpautop($introsec['content']); 
        if($icons):
        ?>
        <div class="cupstock-des-imh-inc-wrp">
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
  <div class="productPage-slc-wrp text-center productPage-slc-wrp-2 clearfix">
    <?php 
     get_template_part( 'templates/product', 'selectbox' );
      if( is_array( $plink ) &&  !empty( $plink['url'] ) ){
        printf('<a href="%s" target="%s">%s</a>', $plink['url'], $plink['target'], $plink['title']); 
      }
     ?>
  </div>
  <?php endif; ?>
</section>


<section class="ftr-top-wrp text-center" id="ftr-top-cupstock">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img src="<?php echo THEME_URI; ?>/assets/images/ftr-top-bg-2.png" alt="" />
      </div>
    </div>
  </div>
</section>

 <?php get_footer();  ?>
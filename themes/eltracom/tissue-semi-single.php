<?php
/*
 * Template Name: Tissue Semi
 * Template Post Type: product
 */
 
get_header(); 
get_template_part( 'templates/product', 'banner' );
$thisID = get_the_ID();
 ?>
<div class="ptissue-semi-contain-ctlr">
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
  <section class="cb-product-details-sec-wrp clearfix">
    <div class="ec-product-details-rgt clearfix matchHeightCol">
        <div class="ec-product-details-img" style="background: url(<?php echo $intropostersrc; ?>);">
          <img class="show-sm" src="<?php echo $intropostersrc; ?>" alt="mobile image">
          <div class="ec-product-rgt-bg-icon" style="background: url(<?php echo THEME_URI; ?>/assets/images/ec-product-rgt-bg-icon.png);">
          </div>
        </div>
      </div>
      <div class="ec-product-details-left clearfix matchHeightCol">
        <div class="ec-product-details-dsc">
        <?php if( !empty( $introsec['content'] ) ) echo wpautop($introsec['content']); 
        if($icons):
        ?>
        <div class="ec-product-icon">
          <?php 
          foreach($icons as $icon):
            $iconpostertag = '';
            if(!empty($icon['icon'])){
              $iconpostertag = cbv_get_image_tag($icon['icon']);
            } 
          ?>
          <span><?php echo $iconpostertag; ?></span>
          <?php endforeach; ?>
        </div>
        <?php endif; ?>
        </div>
      </div>
  </section><!-- end of cb-product-details-sec-wrp -->
<?php endif; 
$show_hidepboard = get_field('show_hidepboard', $thisID);
if($show_hidepboard):
$tsboard = get_field('tissue_properties', $thisID);
$plink = $tsboard['plink'];

?>
  <section class="cb-two-grid-sec-wrp">
     <div class="cb-two-grid-controller clearfix">
       <div class="cb-two-grid-dsc-lft-con matchHeightCol">
          <div class="cb-two-grid-dsc-lft tsf-two-grid-dsc-lft">
            <?php 
            if( !empty( $tsboard['content_1'] ) ) echo wpautop($tsboard['content_1']);
            ?>
           </div>
       </div>
       <div class="cb-two-grid-dsc-rgt-con matchHeightCol">
         <div class="cb-two-grid-dsc-rgt tsf-two-grid-dsc-rgt">
           <?php 
            if( !empty( $tsboard['content_2'] ) ) echo wpautop($tsboard['content_2']);
            ?>
         </div>         
       </div>
     </div>
  </section>

  <div class="productPage-slc-wrp text-center productPage-slc-wrp-2 clearfix">
  <?php 
   get_template_part( 'templates/product', 'selectbox' );
  if( is_array( $plink ) &&  !empty( $plink['url'] ) ){
    printf('<a href="%s" target="%s">%s</a>', $plink['url'], $plink['target'], $plink['title']); 
  }
  ?>
  </div>
  <?php endif; ?>
</div>

<section class="ftr-top-wrp text-center mt--65">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img src="<?php echo THEME_URI; ?>/assets/images/ftr-top-bg-2.png" alt="" />
      </div>
    </div>
  </div>
</section>
<?php get_footer();  ?>
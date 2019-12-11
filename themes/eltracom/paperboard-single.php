<?php
/*
 * Template Name: Paper Board
 * Template Post Type: product
 */
 
get_header(); 
get_template_part( 'templates/product', 'banner' );
$thisID = get_the_ID();
 ?>

<div class="ppaperboard-contain-ctlr">
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
$fboard = get_field('rcartonboard', $thisID);
$vfcb = get_field('vf_cartonboard', $thisID);
$pboard = get_field('pboardsec', $thisID);
$plink = $pboard['plink'];
$gridlogotag = '';
if(!empty($pboard['image'])){
  $gridlogotag = cbv_get_image_tag($pboard['image']);
}
?>
  <section class="cb-two-grid-sec-wrp pb-two-grid-sec">
     <div class="cb-two-grid-controller clearfix matchHeight">
       <div class="box-packaging-img">
         <?php echo $gridlogotag; ?>
       </div>
       <div class="cb-two-grid-dsc-lft-con clearfix matchHeightCol">
         <div class="cb-two-grid-dsc-lft pb-grid-dsc-lft">
           <?php 
            if( !empty( $fboard['title'] ) ) printf( '<h6>%s</h6>', $fboard['title']);
            if( !empty( $fboard['content'] ) ) echo wpautop($fboard['content']);
            ?>
         </div>
       </div>
       <div class="cb-two-grid-dsc-rgt-con clearfix matchHeightCol">
         <div class="cb-two-grid-dsc-rgt">
           <?php 
           if( !empty( $vfcb['title'] ) ) printf( '<h6>%s</h6>', $vfcb['title']);
           if( !empty( $vfcb['content'] ) ) echo wpautop($vfcb['content']);
           ?>
         </div>
       </div>
     </div>
  </section>

  <div class="productPage-slc-wrp text-center productPage-slc-wrp-2 clearfix">
    <div class=" pro-select-main">
      <select class="selectpicker">
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
<?php 
/*
Template Name: CRS
*/

get_header(); 
$thisID = get_the_ID();
$pageTitle = get_the_title($thisID);
$standaardbanner = get_field('banner_image', $thisID);
$custom_page_title = get_field('custom_page_title', $thisID);
if(!empty(str_replace(' ', '', $custom_page_title))){
  $pageTitle = $custom_page_title;
}
?>

<section class="page-banner">
  <div class="page-banner-controller" style="position: relative; overflow: hidden;">
    <div class="page-banner-bg" style="background-image:url(<?php echo $standaardbanner; ?>);"></div>
    <div class="page-banner-des">
      <div class="container-lg">
        <div class="row">
          <div class="col-sm-12">
            <div class="page-banner-des-inner" style="min-height: 793px;">
              <div>
                <h1 class="banner-page-title"><?php echo $pageTitle; ?></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php 
$formcsrsec = get_field('formcsrsec', $thisID);
$intro = get_field('intro', $thisID);
if($intro): 
?>
<section class="crs-page-con-wrap">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="crs-page-entry-hdr">
          <?php 
            if( !empty( $intro['title'] ) ) printf( '<h1>%s</h1>', $intro['title']); 
            if( !empty( $intro['content'] ) ) echo wpautop($intro['content']);
          ?>
        </div>
      </div>
    </div>
  </div>
  <?php 
  $box = $intro['box_content'];
  if($box):
  $posterr = '';
  if(!empty($box['image'])){
    $posterr = cbv_get_image_src($box['image'], 'crsbox');
  }
  ?>
  <div class="crs-gray-box">
    <div class="crs-gray-box-container clearfix">
      <div class="crs-gray-box-grd-lft">
        <div class="crs-gray-box-grd-lft-img" style="background: url(<?php echo $posterr; ?>);"></div>
      </div>
      <div class="crs-gray-box-grd-rgt">
        <?php 
          if( !empty( $box['content'] ) ) echo wpautop($box['content']);
          if($formcsrsec):
        ?>
          <a href="#teamModal" data-toggle="modal"><span>SOLUTIONS TOGETHER</span></a>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <?php endif; ?>
</section>
<?php endif; ?>

<section class="ftr-top-wrp text-center" id="ftr-top-">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img src="<?php echo THEME_URI; ?>/assets/images/ftr-top-bg-2.png" alt="" />
      </div>
    </div>
  </div>
</section>


<?php if($formcsrsec): ?>
<!-- start modal content -->
<div class="modal fade team-modal" id="teamModal" tabindex="-1" role="dialog" aria-labelledby="teamModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
        <div class="team-modal-con-controller">
          <div class="ec-contact-frm-wrp clearfix">
             <div class="contact-form clearfix">
              <div class="ec-contact-frm-dsc">
                <?php if( !empty( $formcsrsec['content'] ) ) echo wpautop($formcsrsec['content']); ?>
              </div>
              <div class="wpforms-form">
              <?php if( !empty( $formcsrsec['shortcode'] ) ) echo do_shortcode($formcsrsec['shortcode']); ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div><!-- end of modal content -->

<?php endif; get_footer(); ?>
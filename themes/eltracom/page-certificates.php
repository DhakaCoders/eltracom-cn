<?php 
/*
  Template Name: Certificates
*/

get_header(); 

$thisID = get_the_ID();
?>

<section class="page-banner">
  <div class="page-banner-controller" style="position: relative; overflow: hidden;">
    <div class="page-banner-bg" style="background-image:url(<?php echo THEME_URI; ?>/assets/images/page-banner.jpg);"></div>
    <div class="page-banner-des">
      <div class="container-lg">
        <div class="row">
          <div class="col-sm-12">
            <div class="page-banner-des-inner">
              <div>
                <strong class="banner-page-title">Our <span>Certificates</span></strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<?php 
$show_hide = get_field('show_hide', $thisID);
if($show_hide):
  $content = get_field('content', $thisID);
  $certificates = get_field('certificates', $thisID);
?>
<section class="certificates-page-con-wrap">
  <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="certificates-page-entry-con">
          <?php if( !empty( $content ) ) echo wpautop($content); ?>
          </div>
        </div>
      </div>
  </div>
  <?php if($certificates): ?>
  <div class="certificates-page-con">
    <div class="container-md">
      <div class="row">
        <div class="col-sm-12">
          <div class="certificates-page-con-controller">
           
            <ul class="clearfix ulc">
               <?php 
              foreach($certificates as $certificate):
                $postertag = '';
                if(!empty($certificate['image'])){
                  $postertag = cbv_get_image_tag($certificate['image']);
                }
            ?>
              <li>
                <div class="certificates-item-row clearfix">
                  <div class="certificates-item-row-logo">
                    <?php echo $postertag; ?>
                  </div>
                  <div class="certificates-item-row-des">
                    <?php 
                      if( !empty( $certificate['bold_title'] ) ) printf( '<strong>%s<span> %s</span></strong>', $certificate['bold_title'], $certificate['normal_title']); 
                      if( !empty( $certificate['content'] ) ) echo wpautop($certificate['content']);
                    ?>
                  </div>
                </div>
              </li>
              <?php endforeach; ?>
            </ul>
          </div>
        </div>
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
<?php get_footer(); ?>
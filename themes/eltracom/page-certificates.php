<?php 
/*
  Template Name: Certificates
*/

get_header(); 

$thisID = get_the_ID();
get_template_part( 'templates/page', 'banner' );


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
                      if( !empty( $certificate['title'] ) ) printf( '<strong>%s</strong>', $certificate['title']); 
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
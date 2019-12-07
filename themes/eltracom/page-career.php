<?php 
/*
  Template Name: Career
*/
get_header(); 
while ( have_posts() ) : the_post();
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
                <strong class="banner-page-title"><span>Career</span> Opportunities</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="career-frm-sec-wrp">
  <div class="career-frm-sec-bg hide-sm"></div>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="ec-contact-frm-wrp">
           <div class="contact-form">
            <div class="ec-contact-frm-dsc">
              <?php the_content(); ?>
            </div>
            <div class="wpforms-form">
            <?php echo do_shortcode('[contact-form-7 id="36" title="Career Form"]'); ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section><!-- end of contact-frm-sec-wrp -->


<section class="ftr-top-wrp text-center" id="ftr-top-">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img src="<?php echo THEME_URI; ?>/assets/images/ftr-top-bg-2.png" alt="" />
      </div>
    </div>
  </div>
</section>
<?php endwhile; get_footer(); ?>

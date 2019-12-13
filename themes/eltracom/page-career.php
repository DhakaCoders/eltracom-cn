<?php 
/*
  Template Name: Career
*/
get_header(); 
while ( have_posts() ) : the_post();
$thisID = get_the_ID();
get_template_part( 'templates/page', 'banner' );
$introsec = get_field('introsec', $thisID);
$shortcode = get_field('shortcode', $thisID);
?>

<section class="career-frm-sec-wrp">
  <div class="career-frm-sec-bg hide-sm"></div>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="ec-contact-frm-wrp">
           <div class="contact-form">
            <div class="ec-contact-frm-dsc">
             <?php if( !empty( $introsec['content'] ) ) echo wpautop($introsec['content']); ?> 
            </div>
            <?php if(!empty($shortcode)): ?>
            <div class="wpforms-form">
            <?php echo do_shortcode($shortcode); ?>
            </div>
            <?php endif; ?>
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

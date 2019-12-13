<?php 
get_header(); 
while ( have_posts() ) : the_post();
$thisID = get_the_ID();
$content = get_field('intro', $thisID);
get_template_part( 'templates/page', 'banner' );
?>
<section class="article-wrap">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="block-1070 clearfix article-inner" id="main-content">
          <div id="content" class="single-article-wrap clearfix">
            <div class="article-content">
             <?php if( !empty( $content ) ) echo wpautop($content); ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section><!--.end of article-wrap -->

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

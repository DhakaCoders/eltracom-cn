<?php 
/*  
  Template Name: Terms
*/
get_header(); 
get_template_part( 'templates/page', 'banner' );

$thisID = get_the_ID();
$show_hide = get_field('show_hide', $thisID);
if($show_hide):
  $terms = get_field('terms', $thisID);
  if($terms):
?>
<section class="article-wrap">
  <span class="terms-page-rgt-bg-txt">
    <img src="<?php echo THEME_URI; ?>/assets/images/terms-page-rgt-bg-txt.png">
  </span>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="block-1070 clearfix article-inner" id="main-content">
          <div id="sidebar" class="sidebar">
            <div class="sidebar__inner clearfix">
              <div class="sidebar-controller">
                <?php _e('<strong>Contents</strong>', THEME_NAME);?>
                <ul class="clearfix ulc">
                  <?php 
                  foreach($terms as $term):
                  $slug = str_replace(' ', '', $term['title']);
                  $slug = preg_replace('/[^A-Za-z0-9]/', '', $slug);
                  ?>
                   <li><a href="#<?php echo $slug;?>"><?php if( !empty( $term['title'] ) ) printf( '%s', $term['title']); ?></a></li>
                  <?php endforeach; ?>
                </ul>
              </div>
            </div>
          </div>
          <div id="content" class="single-article-wrap clearfix">
            <div class="article-content">
              <?php 
                foreach($terms as $term):
                $slug = str_replace(' ', '', $term['title']);
                $slug = preg_replace('/[^A-Za-z0-9]/', '', $slug);
              ?>
              <div class="article-content-row" id="<?php echo $slug;?>">
                <?php 
                  if( !empty( $term['title'] ) ) printf( '<h3>%s</h3>', $term['title']); 
                  if( !empty( $term['content'] ) ) echo wpautop($term['content']);
                ?>
              </div>
               <?php endforeach; ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section><!--.end of article-wrap -->
<?php endif; endif; ?>

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
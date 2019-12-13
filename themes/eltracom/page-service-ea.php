<?php 
/*
	Template Name: Service exclusiveAgencies
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
    <div class="page-banner-bg" style="background-image:url(<?php echo THEME_URI; ?>/assets/images/page-banner.jpg);"></div>
    <div class="page-banner-des">
      <div class="container-lg">
        <div class="row">
          <div class="col-sm-12">
            <div class="page-banner-des-inner">
              <div>
                <span class="banner-page-subtitle">Our Services</span>
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
$serviceea = get_field('serviceea', $thisID);
if($serviceea):
  $seas = $serviceea['exclusive_agencies'];
  $link = $serviceea['link'];
?>
<section class="service-ex-sec">
  <div class="company-inc-logo">
    <img src="<?php echo THEME_URI; ?>/assets/images/company-logo-inc-img.png" alt="">
  </div>  
  <div class="company-inc-logo-2">
    <img src="<?php echo THEME_URI; ?>/assets/images/company-logo-inc-img-2.png" alt="">
  </div>  
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="service-ex-agenc-grd-wrp">
          <?php if($seas): ?>
          <ul class="ulc">
            <?php 
            foreach($seas as $sea): 
            $link1 = !empty($sea['link'])? $sea['link']: '#';
            $seapostertag = '';
            if(!empty($sea['image'])){
              $seapostertag = cbv_get_image_tag($sea['image']);
            } 
            ?>
            <li class="clearfix">
              <div class="service-ex-img"> 
                <div class="service-ex-img-inner">
                  <?php echo $seapostertag; ?>
                </div>
                <a href="<?php echo $link1; ?>" class="overlay-link"></a>
              </div>
              <div class="service-ex-des">
                <?php 
                  $subtitle = !empty($sea['subtitle'])? '<br/><span>('.$sea['subtitle'].')</span>': '';
                  if( !empty( $sea['title'] ) ) printf( '<h4>%s%s</h4>', $sea['title'], $subtitle); 
                  if( !empty( $sea['content'] ) ) echo wpautop($sea['content']);
                ?>
              </div>
            </li>
            <?php endforeach; ?>
          </ul>
          <?php endif; 
            if( is_array( $link ) &&  !empty( $link['url'] ) ){
              printf('<div class="service-ex-btm-lnc"><a href="%s" target="%s">%s</a></div>', $link['url'], $link['target'], $link['title']); 
            }

          ?>
        </div>
      </div>
    </div>
  </div>    
</section>
<?php endif; ?>

<section class="ftr-top-wrp text-center" id="ftr-top-service-ex">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img src="<?php echo THEME_URI; ?>/assets/images/ftr-top-bg-2.png" alt="" />
      </div>
    </div>
  </div>
</section>
<?php get_footer(); ?>
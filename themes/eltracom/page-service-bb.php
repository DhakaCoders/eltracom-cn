<?php 
/*
	Template Name: Service BusinessBrokerage
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

<section class="business-brokerage-page-con-wrap">
<?php 
$show_hideintro = get_field('show_hideintro', $thisID);
if($show_hideintro):
  $intro = get_field('introsec', $thisID);
?>
  <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="business-brokerage-page-entry-con">
            <?php if( !empty( $intro['content'] ) ) echo wpautop($intro['content']); ?>
          </div>
        </div>
      </div>
  </div>
<?php endif; 

$show_hideintro = get_field('show_hideintro', $thisID);
if($show_hideintro):
  $servicessec = get_field('servicessec', $thisID);
  $services = $servicessec['servicesrep'];
  $link = $servicessec['link'];
?>
  <div class="business-brokerage-page-con">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="business-brokerage-page-grd-controller">
            <?php if($services): ?>
            <ul class="clearfix ulc">
              <?php 
              foreach($services as $service): 
                $spostertag = '';
                if(!empty($service['icon'])){
                  $spostertag = cbv_get_image_tag($service['icon']);
                }

              ?>
              <li>
                <div class="bb-page-grd-item">
                  <i>
                    <?php echo $spostertag; ?>
                  </i>
                  <?php if( !empty( $service['title'] ) ) printf( '<strong>%s</strong>', $service['title']); ?>
                </div>
              </li>
              <?php endforeach; ?>
            </ul>
            <?php endif; 
            if( is_array( $link ) &&  !empty( $link['url'] ) ){
              printf('<div class="exclusive-agencies-btn"><a href="%s" target="%s">%s</a></div>', $link['url'], $link['target'], $link['title']); 
            }
            ?>
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
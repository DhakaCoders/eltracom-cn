<?php
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
            <div class="page-banner-des-inner">
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
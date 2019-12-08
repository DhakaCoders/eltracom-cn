<?php 
/*
  Template Name: Contact
*/
get_header(); 
$thisID = get_the_ID();
?>
<section class="page-banner contact-page-banner">
  <div class="page-banner-controller" style="position: relative; overflow: hidden;">
    <div class="page-banner-bg" style="background-image:url(<?php echo THEME_URI; ?>/assets/images/bg-contact.jpg);"></div>
    <div class="page-banner-des">
      <div class="container-lg">
        <div class="row">
          <div class="col-sm-12">
            <div class="page-banner-des-inner">
              <strong class="banner-page-title"><span>Contact</span> Page</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<?php 
  $title = get_field('title', $thisID);
  $content = get_field('content', $thisID);
  $address_ttitle = get_field('address_ttitle', $thisID);
  $schedules = get_field('schedule', $thisID);
  $google_map = get_field('google_maps');
?>
<section class="ec-contact-frm-sec-wrp">
  <div class="ec-contact-frm-sec-bg hide-sm"></div>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="ec-contact-frm-wrp">
           <div class="contact-form">
            <div class="wpforms-form">
            <?php 
              if( !empty( $title ) ) printf( '<h1>%s</h1>', $title); 
              if( !empty( $content ) ) echo wpautop($content);
            ?>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section><!-- end of contact-frm-sec-wrp -->

<?php 

  $spacialArry = array(".", "/", "+", " ");$replaceArray = '';
  $adres = get_field('address', 'options');
  $gmapsurl = get_field('google_maps', 'options');
  $e_mailadres = get_field('emailaddress', 'options');
  $show_telefoon = get_field('telephone', 'options');
  $telefoon = trim(str_replace($spacialArry, $replaceArray, $show_telefoon));
  $gmaplink = !empty($gmapsurl)?$gmapsurl: 'javascript:void()';

  $fburl = get_field('facebook_url', 'options');
  $link_url = get_field('linkedin_url', 'options');


  $segments = explode(' ', $show_telefoon);
  $phonenumber = '';

  for ($i = 0; $i < count($segments); $i++) {
      if ($i === 0) {
          $phonenumber .= '(' . $segments[$i] . ')';  
          continue;
      } 

      $phonenumber .= ' ' . $segments[$i];
  }
?>
<section class="google-map-sec-wrp">
  <div class="map-address">
    <div class="addr-box">
      <div class="addr-box-inner">
        <?php 
          if( !empty( $address_ttitle ) ) printf( '<h3>%s</h3>', $address_ttitle); 
        ?>  
        <ul>
          <?php 
          if( !empty( $adres ) ) printf('<li><a href="%s" target="_blank">%s</a></li>', $gmaplink, $adres); 
          if( !empty( $show_telefoon ) ) printf('<li><a href="tel:%s">%s</a></li>', $telefoon, $phonenumber); 
          if( !empty( $e_mailadres ) ) printf('<li><a href="mailto:%s">%s</a></li>', $e_mailadres, $e_mailadres); 
          ?> 
        </ul>
        <div class="map-socail">
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>
        <?php if($schedules): ?>
        <div class="map-date">
          <ul>
            <?php foreach($schedules as $schedule):?>
            <li>
              <?php 
                if( !empty( $schedule['day'] ) ) printf( '<span>%s</span>', $schedule['day']); 
                if( !empty( $schedule['time'] ) ) printf( '<span>%s</span>', $schedule['time']); 
              ?>
            </li>
            <?php endforeach; ?>
          </ul>
        </div>
        <?php endif; ?>
      </div>
      <div class="map-address-bg"></div>
    </div>
  </div>
  <div id="contactMap" data-homeurl="<?php echo THEME_URI; ?>" data-latitude="<?php echo $google_map['lat']; ?>" data-longitude="<?php echo $google_map['lng']; ?>"></div>
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
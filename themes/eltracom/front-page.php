<?php 
get_header('home'); 
$bannersec = get_field('bannersec', HOMEID);
$bannerposter = '';
if(!empty($bannersec['image'])){
  $bannerposter = cbv_get_image_src($bannersec['image']);
}
$bannerlogotag = '';
if(!empty($bannersec['logo'])){
  $bannerlogotag = cbv_get_image_tag($bannersec['logo']);
}
?>
<section id="intro" class="home-page-bnr" style="background: url(<?php echo $bannerposter ; ?>);">
  <span class="home-page-bnr-overlay-bg"></span>
  <a class="home-bnr-logo" href="<?php echo esc_url(home_url('/')); ?>">
    <?php echo $bannerlogotag; ?>
  </a>
  <span class="scroll-btn" data-to="#aboutId">
    <img src="<?php echo THEME_URI; ?>/assets/images/scroll.png">
  </span>
  <div class="home-bnr-sidebar">
    <div class="home-bnr-sidebar-inner clearfix">
      <div class="hdr-rgt">
        <div class="hdr-humberger-btn">
          <div class="hdr-humberger-btn-inr">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="language">
          <a class="active" href="#">En</a>
          <a href="#">Sl</a>
        </div>
      </div>
      <div class="bnr-sidebar-links">
        <div class="bnr-sidebar-links-inner">
          <strong class="sec-title-show" id="astitle">INTRODUCTION</strong>
          <ul class="clearfix ulc">
            <li class="current" data-section="intro">
              <a title="Introduction" href="#intro">
                <span></span>
                <strong>01</strong> 
              </a>
            </li>
            <li data-section="about">
              <a title="About" href="#aboutId">
                <span></span>
                <strong>02</strong> 
              </a>
            </li>
            <li data-section="products">
              <a title="Our Products" href="#ourProductId">
                <span></span>
                <strong>03</strong> 
              </a>
            </li>
            <li data-section="figures">
              <a title="Key Figures" href="#keyFiguresId">
                <span></span>
                <strong>04</strong> 
              </a>
            </li>
            <li data-section="values">
              <a title="Core Values" href="#coreValuesId">
                <span></span>
                <strong>05</strong> 
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="chat-box">
        <img src="<?php echo THEME_URI; ?>/assets/images/Chat.png">
      </div>
    </div>

  </div>
</section>
<?php 
get_template_part('templates/burger', 'menu'); 

$show_hidehintro = get_field('show_hidehintro', HOMEID);
if($show_hidehintro):
  $introsec = get_field('introsec', HOMEID);
  $introposter = '';
  if(!empty($introsec['image'])){
    $introposter = cbv_get_image_src($introsec['image']);
  } 
  $link = $introsec['link'];
?>
<section class="perfection-section" id="aboutId">
  <span class="perfection-sec-btm-rgt-img"><img src="<?php echo THEME_URI; ?>/assets/images/perfection-sec-btm-rgt-img.png"></span>
  <div class="perfection-sec-inner clearfix">
    <div class="perfection-sec-fea-img" style="background: url(<?php echo $introposter; ?>);"></div>
    <div class="perfection-sec-des-bx">
      <div class="perfection-sec-des-bx-inner">
        <?php 
        if( !empty( $introsec['content'] ) ) echo wpautop($introsec['content']); 
        if( is_array( $link ) &&  !empty( $link['url'] ) ){
          printf('<a href="%s" target="%s">%s</a>', $link['url'], $link['target'], $link['title']); 
        }
        ?>
      </div>
    </div>
  </div>    
</section>
<?php endif; 

$show_hidehfea = get_field('show_hidehfea', HOMEID);
if($show_hidehfea):
  $featuressec = get_field('featuressec', HOMEID);
  $features = $featuressec['featuresrep'];
  
?>

<section class="home-2-plate-grd-section">
  <div class="home-2-plate-grd-controller">
    <?php if($features): ?>
    <ul class="clearfix ulc">
      <?php foreach($features as $feature): 
        $feapostertag = '';
          if(!empty($feature['image'])){
            $feapostertag = cbv_get_image_tag($feature['image']);
          } 
          $link1 = !empty($feature['link'])? $feature['link']: '#';

        ?>
      <li>
        <div class="home-2-plate-grd-item">
          <div class="home-2-plate-grd-img">
            <a href="<?php echo $link1; ?>">
              <?php echo $feapostertag; ?>
            </a>
          </div>
          <?php if( !empty( $feature['title'] ) ) printf( '<strong><a href="%s">%s</a></strong>', $link1, $feature['title']); ?>
        </div>
      </li>
    <?php endforeach; ?>
    </ul>
  <?php endif; ?>
  </div>   
</section>
<?php endif; 

$show_hidehprod = get_field('show_hidehprod', HOMEID);
if($show_hidehprod):
  $hproductsec = get_field('hproductsec', HOMEID);
  $products = $hproductsec['products'];
  $link4 = $hproductsec['portfolio_link'];
?>
<section class="h-products-section" id="ourProductId" style="background: #e8e9ed">
  <span class="home-sec-wave" style="background: url(<?php echo THEME_URI; ?>/assets/images/home-sec-wave.png);"></span>
  <div class="container-md-2">
      <div class="row">
        <div class="col-sm-12">
          <div class="h-products-sec-grd-controller">
            <ul class="clearfix ulc">
              <li>
                <div class="h-pro-grd-item-sec-hdr-wrap">
                  <?php 
                    if( !empty( $hproductsec['title'] ) ) printf( '<h3>%s</h3>', $hproductsec['title']);
                    if( !empty( $hproductsec['product_quote'] ) ):
                  ?>
                  <div class="h-pro-grd-item-sec-hdr">
                    <blockquote><sup><img src="<?php echo THEME_URI; ?>/assets/images/blockquote-top-icon.png"></sup> 
                    <?php  echo $hproductsec['product_quote']; ?>
                    <sub><img src="<?php echo THEME_URI; ?>/assets/images/blockquote-btm-icon.png"></sub></blockquote>
                  </div>
                  <?php endif; ?>
                </div>
              </li>
              <?php
              if($products):
                foreach ($products as $product):
                  $link3 = $product['link'];
                  $linkurl = !empty($link3['url'])? $link3['url']: '#';
                  $ppostertag = '';
                  if(!empty($product['icon'])){
                    $ppostertag = cbv_get_image_tag($product['icon']);
                  } 
              ?>
              <li>
                <div class="h-pro-grd-item">
                  <?php 
                    $subtitle = !empty($product['normal_text'])? '<span>'.$product['normal_text'].'</span>': '';
                    if( !empty( $product['bold_text'] ) ) printf( '<h4><a href="%s">%s %s</a></h4>', $linkurl, $product['bold_text'], $subtitle);
                  ?>
                  <div class="h-pro-grd-item-des">
                    <i><?php echo $ppostertag; ?></i>
                    <?php if( !empty( $product['content'] ) ) echo wpautop($product['content']); 
                    if( is_array( $link3 ) &&  !empty( $link3['url'] ) ){
                      printf('<a href="%s" target="%s">%s</a>', $link3['url'], $link3['target'], $link3['title']); 
                    }
                    ?>
                  </div>
                </div>
              </li>
              <?php endforeach; endif; ?>
            </ul>
            <?php 
              if( is_array( $link4 ) &&  !empty( $link4['url'] ) ){
                printf('<div class="h-pro-more-btn"><a href="%s" target="%s">%s</a></div>', $link4['url'], $link4['target'], $link4['title']); 
              }
            ?>
          </div>
        </div>
      </div>
  </div>    
</section>
<?php endif; 

$show_hidekeyfea = get_field('show_hidekeyfea', HOMEID);
if($show_hidekeyfea):
  $keyfigures = get_field('keyfigures', HOMEID);
  $counters = $keyfigures['key_figuresrep'];
  $counterposter = THEME_URI.'/assets/images/counter-bg.jpg';
  if(!empty($keyfigures['bg_image'])){
    $counterposter = $keyfigures['bg_image'];
  } 
?>
<section class="company-counter-sec" id="keyFiguresId" style="background:url(<?php echo $counterposter; ?>);">
  <div class="counter-inc-logo">
    <img src="<?php echo THEME_URI; ?>/assets/images/company-counter-sec-ing.png" alt="">
  </div>  
  <div class="counter-overlay-spn"></div>
  <div class="container-lg">
    <div class="row">
      <div class="col-sm-12">
        <div class="company-counter-innr">
          <div class="counter-des text-right ">
            <?php if( !empty( $keyfigures['content'] ) ) echo wpautop($keyfigures['content']); ?>
          </div>
          <?php if($counters): ?>
          <div class="counter-main clearfix text-center ">
            <?php $i = 1; foreach($counters as $counter):?>
            <div class="counter-col counter-col-<?php echo $i; ?>">
              <?php 
                  $sym = !empty($counter['symbol'])? $counter['symbol']: '';
                  if( !empty( $counter['value'] ) ) printf( '<strong><span class="counter">%s</span>%s</strong>', $counter['value'], $sym); 
                  if( !empty( $counter['title'] ) ) printf( '<small>%s</small>', $counter['title']); 
                ?>
            </div>
            <?php $i++; endforeach; ?>
          </div>
        <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</section>
<?php endif; 

$show_hidehcore = get_field('show_hidehcore', HOMEID);
if($show_hidehcore):
  $corevalues = get_field('corevalues', HOMEID);
  $coreoposter = '';
  if(!empty($corevalues['image'])){
    $coreoposter = cbv_get_image_src($corevalues['image']);
  } 
  $clink = $corevalues['link'];
?>
<section class="perfection-section perfection-sec-2" id="coreValuesId">
  <span class="perfection-sec-btm-rgt-img-2"><img src="<?php echo THEME_URI; ?>/assets/images/perfection-sec-btm-rgt-img-2.png"></span>
  <div class="perfection-sec-inner clearfix">
    <div class="perfection-sec-fea-img" style="background: url(<?php echo $coreoposter; ?>);"></div>
    <div class="perfection-sec-des-bx">
      <div class="perfection-sec-des-bx-inner">
        <?php 
        if( !empty( $corevalues['content'] ) ) echo wpautop($corevalues['content']); 
        if( is_array( $clink ) &&  !empty( $clink['url'] ) ){
          printf('<a href="%s" target="%s">%s</a>', $clink['url'], $clink['target'], $clink['title']); 
        }
        ?>
      </div>
    </div>
  </div>    
</section>
<?php endif; 

$show_hidelink = get_field('show_hidelink', HOMEID);
if($show_hidelink):
  $linksec = get_field('linksec', HOMEID);
  $linkposter = THEME_URI.'/assets/images/get-in-touch-sec-bg.jpg';
  if(!empty($linksec['image'])){
    $linkposter = $linksec['bg_image'];
  } 
  $gettuch = $linksec['get_touch'];
  $jointeam = $linksec['join_our_team'];
  $glink = $gettuch['link'];
  $jlink = $jointeam['link'];
?>
<section class="get-in-touch-section" style="background: url(<?php echo $linkposter; ?>);">
  <span class="get-in-touch-sec-overlay-bg"></span>
  <div class="container-xlg">
    <div class="row">
      <div class="col-sm-6 get-in-touch-grd">
        <div class="get-in-touch-sec-grd-item">
          <?php 
            if( !empty( $gettuch['title'] ) ) printf( '<h3>%s</h3>', $gettuch['title']);
            if( !empty( $gettuch['content'] ) ) echo wpautop($gettuch['content']); 
            if( is_array( $glink ) &&  !empty( $glink['url'] ) ){
              printf('<a href="%s" target="%s">%s</a>', $glink['url'], $glink['target'], $glink['title']); 
            }
          ?>
        </div>
      </div>
      <div class="col-sm-6 get-in-touch-grd">
        <div class="get-in-touch-sec-grd-item">
        <?php 
          if( !empty( $jointeam['title'] ) ) printf( '<h3>%s</h3>', $jointeam['title']);
          if( !empty( $jointeam['content'] ) ) echo wpautop($jointeam['content']); 
          if( is_array( $jlink ) &&  !empty( $jlink['url'] ) ){
            printf('<a href="%s" target="%s">%s</a>', $jlink['url'], $jlink['target'], $jlink['title']); 
          }
        ?>
        </div>
      </div>
    </div>
  </div>   
</section>
<?php endif; ?>

<section class="ftr-top-wrp text-center" id="">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img src="<?php echo THEME_URI; ?>/assets/images/ftr-top-bg-2.png" alt="" />
      </div>
    </div>
  </div>
</section>
<?php get_footer(); ?>
<?php 
/*
	Template Name: Our Company
*/
get_header(); 
get_template_part( 'templates/page', 'banner' );

$thisID = get_the_ID()
?>
<section class="companyPage-aboutUs-sec" id="intro">

  <div class="home-bnr-sidebar" id="companySidebar">
    <div class="home-bnr-sidebar-inner clearfix">

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
              <a title="Key Figures" href="#counterId">
                <span></span>
                <strong>02</strong> 
              </a>
            </li>
            <li data-section="products">
              <a title="Our Value" href="#ourValueId">
                <span></span>
                <strong>03</strong> 
              </a>
            </li>
            <li data-section="figures">
              <a title="Our Portfolio" href="#portfolioId">
                <span></span>
                <strong>04</strong> 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="obutus-inc-logo">
    <img src="<?php echo THEME_URI; ?>/assets/images/aboutus-logo-inc-img.png" alt="">
  </div>
  <?php 
	$show_hide = get_field('show_hide', $thisID);
	if($show_hide):
  	$introsec = get_field('introsec', $thisID);
  ?>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="companyPage-about-innr">
          <?php if( !empty( $introsec['content'] ) ) echo wpautop($introsec['content']); ?>
        </div>
      </div>
    </div>
  </div> 
  <?php endif; ?>
</section>
<?php
$show_hidekeyfea = get_field('show_hidekeyfea', HOMEID);
if($show_hidekeyfea):
  $keyfigures = get_field('keyfigures', HOMEID);
  $counters = $keyfigures['key_figuresrep'];
  $counterposter = THEME_URI.'/assets/images/counter-bg.jpg';
  if(!empty($keyfigures['bg_image'])){
    $counterposter = cbv_get_image_src($keyfigures['bg_image'], 'hmcontr');
  } 
?>
<section class="company-counter-sec" id="counterId" style="background:url(<?php echo $counterposter; ?>);">
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
<?php 
endif;
	$show_hidevalue = get_field('show_hidevalue', $thisID);
	if($show_hidevalue):
  	$valuessec = get_field('our_valuessec', $thisID);
  	$uessecreps = $valuessec['our_values'];
?>
<section class="ourValue-sec" id="ourValueId">
  
  <div class="company-inc-logo">
    <img src="<?php echo THEME_URI; ?>/assets/images/company-logo-inc-img.png" alt="" />
  </div>  
  <div class="company-inc-logo-2">
    <img src="<?php echo THEME_URI; ?>/assets/images/company-logo-inc-img-2.png" alt="" />
  </div> 

  <div class="ourValue-sec-innr">
    <div class="ourValue-hdr text-center">
	<?php if( !empty( $valuessec['content'] ) ) echo wpautop($valuessec['content']); ?>        
    </div>
    <?php if($uessecreps): ?>
    <div class="ourValue-grd-wrp ">
      <ul class="ulc">
      	<?php foreach($uessecreps as $uessecrep): 
      		$link = !empty($uessecrep['link'])? $uessecrep['link']: '#';
      		$valposter = '';
      		$valpostertag = '';
            if(!empty($uessecrep['image'])){
              $valposter = cbv_get_image_src($uessecrep['image']);
              $valpostertag = cbv_get_image_tag($uessecrep['image']);
            } 
      	?>
      	<li class="clearfix">
          <div class="ourValue-img"> 
            <div class="ourValue-img-inner" style="background: url(<?php echo $valposter; ?>);">
              <?php echo $valpostertag; ?>
            </div>
            <a href="<?php echo $link; ?>" class="overlay-link"></a>
          </div>
          <div class="ourValue-des clearfix">
            <div class="ourValue-des-innr">
            <?php if( !empty( $uessecrep['content'] ) ) echo wpautop($uessecrep['content']); ?>
            </div>
          </div>
        </li>
    	<?php endforeach; ?>
      </ul>
    </div>
	<?php endif; ?>
  </div>

</section>
<?php endif; 

$show_hideportfolio = get_field('show_hideportfolio', $thisID);
if($show_hideportfolio):
$portfoliosec= get_field('ourportfoliosec', $thisID);
$portfolios = $portfoliosec['portfolios'];
?>
<section class="company-portfolio-sec" id="portfolioId">
  <div class="container-lg">
    <div class="row">
      <div class="col-sm-12">
        <div class="company-portfolio-innr">
          <div class="company-portfolio-head text-center">
            <?php if( !empty( $portfoliosec['content'] ) ) echo wpautop($portfoliosec['content']); ?>    
          </div>

		<?php if($portfolios): ?>
          <div class="companyPortfolioSlider clearfix">
			<?php foreach($portfolios as $portfolio): 
	      		$link1 = !empty($portfolio['link'])? $portfolio['link']: '#';
	      		$portpostertag = '';
	            if(!empty($portfolio['icon'])){
	              $portpostertag = cbv_get_image_tag($portfolio['icon']);
	            } 
	      	?>
            <div class="companyPortfolioSlider-item text-center ">
              <div class="matchHeightCol">
                <?php echo $portpostertag; ?>
                <?php 
                if( !empty( $portfolio['titel'] ) ) printf( '<h5><span>%s</span><br>%s</h5>', $portfolio['titel'], $portfolio['titel']);
                if( !empty( $portfolio['content'] ) ) echo wpautop($portfolio['content']);
                ?>
              </div>
              <a href="<?php echo $link1; ?>" class="overlay-link"></a>
            </div>
			<?php endforeach; ?>
          </div>
          <div class="portfolio-arrows">            
            <span class="leftArrow">
              <i>
                 <svg class="left-arrow-svg" width="31" height="23" viewBox="0 0 31 23" fill="#cbcbcb">
                    <use xlink:href="#left-arrow-svg"></use>
                  </svg>
              </i>
            </span>
            <span class="rightArrow" >
              <i>
                 <svg class="right-arrow-svg" width="31" height="23" viewBox="0 0 31 23" fill="#cbcbcb">
                    <use xlink:href="#right-arrow-svg"></use>
                  </svg>
              </i>
            </span>
          </div>
      	<?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</section>
<?php endif; ?>

<section class="ftr-top-wrp text-center company-ftr-top-logo">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img src="<?php echo THEME_URI; ?>/assets/images/ftr-top-bg-2.png" alt="" />
      </div>
    </div>
  </div>
</section>
<?php get_footer(); ?>
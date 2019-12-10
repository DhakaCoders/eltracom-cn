<?php 
  $logoObj = get_field('logo_burger', 'options');
  $productlink = get_field('productlink', 'options');
  if( is_array($logoObj) ){
    $logo_tag = '<img src="'.$logoObj['url'].'" alt="'.$logoObj['alt'].'" title="'.$logoObj['title'].'">';
  }else{
    $logo_tag = '';
  }
?>

<div class="burger-menu-wrap">
  <div class="burger-menu-inner clearfix">
    <div class="bm-lft-btm-lgo">
      <img src="<?php echo THEME_URI; ?>/assets/images/bm-lft-btm-lgo.png">
    </div>
    <div class="bm-close-btn">
      <img src="<?php echo THEME_URI; ?>/assets/images/bm-close-btn-img.png">
    </div>

    <div class="burger-menu-parent-lft-grd">
      <div class="bm-content-center-logo">
        <img src="<?php echo THEME_URI; ?>/assets/images/bm-content-center-logo.png">
      </div>
      <div class="burger-menu-parent-lft-grd-inner clearfix matchHeightCol">
        <div class="burger-menu-site-logo">
          <a href="<?php echo esc_url(home_url('/')); ?>">
            <?php echo $logo_tag; ?>
          </a>
        </div>
        <div class="clearfix">
          <div class="bmp-inner2 clearfix">
            <nav class="bm-main-nav">
              <?php 
                $menuOptions = array( 
                    'theme_location' => 'cbv_main_menu', 
                    'menu_class' => 'clearfix ulc',
                    'container' => 'mnav',
                    'container_class' => 'mainnav'
                  );
                wp_nav_menu( $menuOptions ); 
              ?>
            </nav>
            <div class="bm-social-xs-controller">
              <div class="bm-social">
                <ul class="clearfix ulc">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="language show-xs">
                <a class="active" href="#">En</a>
                <a href="#">Sl</a>
              </div>
            </div>
            <div class="bm-btm-menu">
              <?php 
                $cmenuOptions = array( 
                    'theme_location' => 'cbv_ftb_menu', 
                    'menu_class' => 'clearfix ulc',
                    'container' => 'cmnav',
                    'container_class' => 'cmainnav'
                  );
                wp_nav_menu( $cmenuOptions ); 
              ?>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="burger-menu-parent-rgt-grd">
      <div class="burger-menu-parent-rgt-grd-inner matchHeightCol">
        <div class="language">
          <a class="active" href="#">En</a>
          <a href="#">Sl</a>
        </div>
        <div class="burger-menu-protfolio-con">
          <?php 
            if( !empty( $productlink['title'] ) ) printf( '<h2>%s</h2>', $productlink['title']); 
          ?>
        </div>
        <?php $productreps = $productlink['portfolio_products']; if($productreps): ?>
        <div class="burger-menu-protfolio-grds">
          <ul class="clearfix ulc">
            <?php 
              $i = 1;
              foreach($productreps as $productrep): 
                $link = !empty($productrep['link'])? $productrep['link']: '#';
                $seapostertag = '';
                if(!empty($productrep['icon'])){
                  $seapostertag = cbv_get_image_tag($productrep['icon']);
                } 
            ?>
            <li>
              <div class="bmp-grd-item">
                <a class="overlay-link" href="<?php echo $link; ?>"></a>
                <i>
                  <span>
                    <?php echo $seapostertag; ?>
                    <img src="<?php echo $productrep['hover_icon']; ?>" alt="hover icon<?php echo $i; ?>">
                  </span>
                </i>
                <div>
                  <?php 
                    if( !empty( $productrep['title'] ) ) printf( '<strong>%s</strong>', $productrep['title']); 
                  ?>
                </div>
              </div>
            </li>
          <?php $i++; endforeach; ?>
          </ul>
        </div>
        <?php endif; ?>
        <div class="bmp-rgt-grd-btm-lgo">
          <img src="<?php echo THEME_URI; ?>/assets/images/bmp-rgt-grd-btm-lgo.png">
        </div>
      </div>
    </div>
  </div>
</div>
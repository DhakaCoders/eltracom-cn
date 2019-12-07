<?php 
  $logoObj = get_field('logo_burger', 'options');
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
              <ul class="clearfix ulc">
                <li><a href="#">Home</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Portfolio</a></li>
                <li class="menu-item-has-children">
                  <a href="#">Services</a>
                  <ul class="ulc sub-menu">
                    <li><a href="#">Exclusive Agencies</a></li>
                    <li><a href="#">Business Brokerage</a></li>
                  </ul>
                </li>
                <li><a href="#">CSR</a></li>
                <li><a href="#">Certificates</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
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
              <ul class="clearfix ulc">
                <li><a href="#">PRIVACY POLICY</a></li>
                <li><a href="#">TERMS OF USE</a></li>
                <li><a href="#">COOKIES POLICY</a></li>
              </ul>
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
          <h2>Portfolio <br>
            of <strong>Products</strong></h2>
        </div>
        <div class="burger-menu-protfolio-grds">
          <ul class="clearfix ulc">
            <li>
              <div class="bmp-grd-item">
                <a class="overlay-link" href="#"></a>
                <i>
                  <span>
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-01.png">
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-01-hover.png">
                  </span>
                </i>
                <div>
                  <strong>Corrugated <br>
                  <span>Case MATERIALS</span> 
                  </strong>
                </div>
              </div>
            </li>
            <li>
              <div class="bmp-grd-item">
                <a class="overlay-link" href="#"></a>
                <i>
                  <span>
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-02.png">
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-02-hover.png">
                  </span>
                </i>
                <div> 
                  <strong>Food <br>
                  <span>Packaging</span> 
                  </strong>
                </div>
              </div>
            </li>
            <li>
              <div class="bmp-grd-item">
                <a class="overlay-link" href="#"></a>
                <i>
                  <span>
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-03.png">
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-03-hover.png">
                  </span>
                </i>
                <div>
                  <strong>Folding Carton  <br>
                  <span>Packaging Materials</span> 
                  </strong>
                </div>
              </div>
            </li>
            <li>
              <div class="bmp-grd-item">
                <a class="overlay-link" href="#"></a>
                <i>
                  <span>
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-04.png">
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-04-hover.png">
                  </span>
                </i>
                <div>
                  <strong>Cupstock <br>
                  <span>lorem ipsum</span> 
                  </strong>
                </div>
              </div>
            </li>
            <li>
              <div class="bmp-grd-item">
                <a class="overlay-link" href="#"></a>
                <i>
                  <span>
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-05.png">
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-05-hover.png">
                  </span>
                </i>
                <div> 
                  <strong>Specialty <br>
                  <span>Papers</span> 
                  </strong>
                </div>
              </div>
            </li>
            <li>
              <div class="bmp-grd-item">
                <a class="overlay-link" href="#"></a>
                <i>
                  <span>
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-06.png">
                    <img src="<?php echo THEME_URI; ?>/assets/images/pop-up-portfolio-img-06-hover.png">
                  </span>
                </i>
                <div> 
                  <strong>Tissue <br>
                  <span>PaperS</span> 
                  </strong>
                </div>
              </div>
            </li>

          </ul>
        </div>
        <div class="bmp-rgt-grd-btm-lgo">
          <img src="<?php echo THEME_URI; ?>/assets/images/bmp-rgt-grd-btm-lgo.png">
        </div>
      </div>
    </div>
  </div>
</div>
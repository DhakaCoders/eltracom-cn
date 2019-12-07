<?php 

  $spacialArry = array(".", "/", "+", " ");$replaceArray = '';
  $adres = get_field('address', 'options');
  $gmapsurl = get_field('google_maps', 'options');
  $e_mailadres = get_field('emailaddress', 'options');
  $show_telefoon = get_field('telephone', 'options');
  $telefoon = trim(str_replace($spacialArry, $replaceArray, $show_telefoon));
  $copyright_text = get_field('copyright_text', 'options');
  $gmaplink = !empty($gmapsurl)?$gmapsurl: 'javascript:void()';

  $fburl = get_field('facebook_url', 'options');
  $link_url = get_field('linkedin_url', 'options');
?>
<footer class="footer-wrap">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="footer-innr">
          <div class="ftr-main-con clearfix">
            <div class="ftr-main-lft">
              <h6>Get in Touch</h6>
              <div class="ftr-addr">
                <ul class="ulc">
                  <?php 
                  if( !empty( $adres ) ) printf('<li><a href="%s" target="_blank">%s</a></li>', $gmaplink, $adres); 
                  if( !empty( $show_telefoon ) ) printf('<li><a href="tel:%s">T. %s</a></li>', $telefoon, $show_telefoon); 
                  if( !empty( $e_mailadres ) ) printf('<li><a href="mailto:%s">E. %s</a></li>', $e_mailadres, $e_mailadres); 
                  ?>             
                </ul>              
              </div>
              <div class="ftr-social">
                <?php if(!empty($fburl)): ?>
                <a href="<?php echo esc_url($fburl); ?>" target="_blank">
                  <i class="fa fa-facebook"></i>
                </a>
                <?php endif; if(!empty($link_url)): ?>
                <a href="<?php echo esc_url($link_url); ?>" target="_blank">
                  <i class="fa fa-linkedin"></i>
                </a>
              <?php endif; ?>
              </div>
            </div>
            <div class="ftr-main-rgt">
              <h6>Subscribe to our Newsletter</h6>
              <p>By subscribing here, you will receive our newsletters. You can unsubscribe at any time by following the link at the bottom of each newsletter.</p>
              <div class="ftr-nl-from-wrp">
                <form action="">
                  <input type="email" placeholder="Type your email here" >
                  <button><span></span></button>
                </form> 
              </div>
              <div class="ftr-rgt-links">
                <ul class="ulc clearfix">
                  <li>
                    <a href="#">PRIVACY POLICY</a>
                  </li>
                  <li>
                    <a href="#">TERMS OF USE</a>
                  </li>
                  <li>
                    <a href="#">COOKIES POLICY</a>
                  </li>
                </ul>
              </div>
            </div>                
          </div>
          <div class="ftr-btm-con clearfix">
            <div class="ftr-btm-lft">
              <?php if( !empty( $copyright_text ) ) printf( '<span>%s</span>', $copyright_text); ?>
            </div>
            <div class="ftr-btm-rgt text-right">
              <a href="#">
                <span class="creation-with-txt">Creation with <i class="fa fa-heart"></i> by </span>
                <img src="<?php echo THEME_URI; ?>/assets/images/ftr-btm-logo.png" alt="" />                 
              </a>
            </div>
          </div>
        </div>         
      </div>
    </div>
  </div>     
</footer>
<?php wp_footer(); ?>
</body>
</html>
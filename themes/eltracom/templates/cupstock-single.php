<?php
/*
 * Template Name: Cupstock
 * Template Post Type: product
 */
 
get_header(); 
get_template_part( 'templates/product', 'banner' );
$thisID = get_the_ID();
 ?>

<section class="cupstock-main-sec">
  <div class="cupstock-block-wrp clearfix">
    <div class="cupstock-img pro-page-top-con">
      <div class="cupstock-img-inner-wrp">
        <div class="cupstock-img-inner" style="background: url(<?php echo THEME_URI; ?>/assets/images/cupstock-rgt-bg-img.jpg);">
          <img src="<?php echo THEME_URI; ?>/assets/images/cupstock-rgt-bg-img.jpg" alt="" />
        </div>          
      </div>      
      <div class="pro-cupstock-img">
        <img src="<?php echo THEME_URI; ?>/assets/images/cupstock-cup-img.png" alt="" />
      </div>     
      <div class="pro-page-logo-img">
        <img src="<?php echo THEME_URI; ?>/assets/images/pro-page-logo-1.png" alt="" />
      </div>
    </div>
    <div class="cupstock-des pro-page-top-con clearfix">
      <div class="cupstock-des-innr">
        <h1>Brief</h1>
        <p>Our cup stock board offers supreme cup stiffness. It is food-safe and suitable for both hot and cold beverages. Its high printability makes it ideal for customization so as to offer unique personalization for every customer of yours.</p>
        <p><strong>Benefits:</strong> High stiffness, Smooth surface, Superior flatness</p>
        <h6>Grade:</h6>
        <ul class="ulc">
          <li>Solid Bleached Board Coated & Uncoated (GZ & UZ)</li>
        </ul>
        <p><strong>Polyethelene Options:</strong><br/>1 and/or 2 sides PE Coated</p>        
        <p><strong>Applications: </strong>Paper Cups</p>  
        <div class="cupstock-des-imh-inc-wrp">
          <a href="#">
            <img src="<?php echo THEME_URI; ?>/assets/images/pro-mini-inc-001.png" alt="" />  
          </a>
          <a href="#">
            <img src="<?php echo THEME_URI; ?>/assets/images/pro-mini-inc-002.png" alt="" /> 
          </a> 
        </div>
      </div>
    </div>
  </div>
  <div class="productPage-slc-wrp text-center productPage-slc-wrp-2 clearfix">
    <div class=" pro-select-main">
      <select class="selectpicker">
        <option selected="selected">ALL PRODUCTS</option>
        <option>Corrugated Case MATERIALS </option>
        <option>Cartonboard</option>
        <option>Specialty Papers</option>
        <option>Cupstock</option>
        <option>Tissue PaperS</option>
      </select>
    </div>
    <a href="#">BACK TO OUR PORTFOLIO</a>
  </div>
</section>


<section class="ftr-top-wrp text-center" id="ftr-top-cupstock">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img src="<?php echo THEME_URI; ?>/assets/images/ftr-top-bg-2.png" alt="" />
      </div>
    </div>
  </div>
</section>

 <?php get_footer();  ?>
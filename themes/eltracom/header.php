<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head> 
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <svg style="display: none;">

    <symbol id="right-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30.693" height="22.459" viewBox="0 0 30.693 22.459">
      <path id="Path_142" d="M56.161 37.924l-10.48-10.48a.749.749 0 0 0-1.059 1.056l9.2 9.2H26.436a.749.749 0 0 0 0 1.5h27.388l-9.2 9.2a.749.749 0 1 0 1.059 1.059l10.48-10.481a.749.749 0 0 0-.002-1.054z" data-name="Path 142" transform="translate(-25.687 -27.225)"/>
    </symbol>

    <symbol id="left-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30.693" height="22.459" viewBox="0 0 30.693 22.459">
      <path id="Path_143" d="M30.474 10.7L19.994.219a.748.748 0 1 0-1.059 1.059l9.2 9.2H.749a.749.749 0 0 0 0 1.5h27.388l-9.2 9.2a.749.749 0 1 0 1.059 1.059l10.48-10.481a.749.749 0 0 0-.002-1.056z" data-name="Path 143" transform="rotate(180 15.347 11.23)"/>
    </symbol>

  </svg>
  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->  

<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php 
  $logoObj = get_field('logo_header', 'options');
  if( is_array($logoObj) ){
    $logo_tag = '<img src="'.$logoObj['url'].'" alt="'.$logoObj['alt'].'" title="'.$logoObj['title'].'">';
  }else{
    $logo_tag = '';
  }
?>
<header class="header">
    <div class="header-inr clearfix">
      <div class="hdr-lft">
        <div class="logo">
          <a href="<?php echo esc_url(home_url('/')); ?>">
            <?php echo $logo_tag; ?>
          </a>
        </div>
      </div>
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
    </div>
</header>
<?php get_template_part('templates/burger', 'menu'); ?>
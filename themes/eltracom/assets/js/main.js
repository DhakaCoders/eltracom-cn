(function($) {
var windowWidth = $(window).width();
var windoheight = $(window).height();
if( windoheight > 650 ){
  $('.home-page-bnr').css('min-height', windoheight);
}else{
  $('.home-page-bnr').addClass('applyCommonHeight');
}
if (windowWidth > 768) {
  if($('.matchHeightCol').length){
    $('.matchHeightCol').matchHeight();
  };
}

/*if($('.matchHeightCol').length){
    $('.matchHeightCol').matchHeight();
};*/

$('.scroll-btn').on('click', function(e){
  e.preventDefault();
  var togo = $(this).data('to');
  goToByScroll(togo, 0);
});

function goToByScroll(id, offset){
  if(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate(
        {scrollTop: $(id).offset().top - offset},
      500);
  }
}
/*Milon*/

/*career page file upload*/
/*input type file picker */
$('#myfile').change(function(){
  var file_path = $(this).val();
  var parts = file_path.split('\\');
  var file_name = "Selected "+parts[parts.length - 1]; // Or parts.pop();
  $(".file-picker").attr("placeholder", file_name).addClass('active');
});






//google-map

var styles = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
]

if( $('#contactMap').length ){
  var latitude = $('#contactMap').data('latitude');
  var longitude = $('#contactMap').data('longitude');

  var myCenter= new google.maps.LatLng(latitude,  longitude);
  var iconBase = $('#googlemap').data('homeurl');
  function initialize(){
      var mapProp = {
        center:myCenter,

        mapTypeControl:false,
        scrollwheel: false,

        zoomControl: false,
        disableDefaultUI: true,
        zoom:17,
        streetViewControl: false,
        rotateControl: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        styles : styles
        };

      var map= new google.maps.Map(document.getElementById('contactMap'),mapProp);

      var marker= new google.maps.Marker({
        position:myCenter,
        icon:iconBase + '/assets/images/map-marker.png'
        });
      marker.setMap(map);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}






/*Prashanto*/

//counter-master
if( $('.counter').length ){

  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
}

//match Height
if (windowWidth > 768) {
  if($('.matchHeightCol').length){
    $('.matchHeightCol').matchHeight();
  };
}

if($('.companyPortfolioSlider-item').length){
  $('.companyPortfolioSlider-item').matchHeight();
};

if($('.food-Packag-part').length){
    $('.food-Packag-part').matchHeight();
};

if($('.pro-page-top-con').length){
    $('.pro-page-top-con').matchHeight();
};


/**
Slick slider
*/
if( $('.companyPortfolioSlider').length ){
  $('.companyPortfolioSlider').slick({
      pauseOnHover: false,
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      arrows:true,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.portfolio-arrows .leftArrow'),
      nextArrow: $('.portfolio-arrows .rightArrow'),
      responsive: [
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
}




/*Rannojit*/

if (windowWidth > 767) {
  if( $('#sidebar').length ){
    $('#sidebar').stickySidebar({
        topSpacing: 100,
        bottomSpacing: 60
    });
  }
  $('.sidebar-controller ul').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 500,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
  });
}

/**
Banner right one page nav
*/
function onePageNavSidebar(){
  $('.bnr-sidebar-links-inner ul').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 500,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    scrollChange: function($currentListItem) {
        var acnum = $('.bnr-sidebar-links-inner ul').find('li.current').find('a').text();
        var actext = $('.bnr-sidebar-links-inner ul').find('li.current').find('a').attr('title');
        var value = $('.bnr-sidebar-links-inner ul').find('li.current').data('section');
        $('#astitle').text(actext);
        //$('.sticky-scroll-numbers ul li').removeClass('current');
        //$('.sticky-scroll-numbers ul li[data-section="'+value+'"]').addClass('current');
    },
    end: function() {
        var acnum = $('.bnr-sidebar-links-inner ul').find('li.current').find('a').text();
        var actext = $('.bnr-sidebar-links-inner ul').find('li.current').find('a').attr('title');
        var value = $('.bnr-sidebar-links-inner ul').find('li.current').data('section');
        $('#astitle').text(actext);
        //$('.sticky-scroll-numbers ul li').removeClass('current');
        //$('.sticky-scroll-numbers ul li[data-section="'+value+'"]').addClass('current');
        onePageNavTop();
    },
  });
}
$(".bnr-sidebar-links ul li a").mouseenter(function() {
    var title = $(this).attr('title');
    $('#astitle').text(title);
}).mouseleave(function() {
    var title = $('.bnr-sidebar-links ul').find('li.current').find('a').attr('title');
    $('#astitle').text(title);
});

/**
Sticky one page nav
*/
function onePageNavTop(){
  $('.sticky-scroll-numbers ul').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 500,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    scrollChange: function($currentListItem) {
        var acnum = $('.sticky-scroll-numbers ul').find('li.current').find('a').text();
        var actext = $('.sticky-scroll-numbers ul').find('li.current').find('a').attr('title');
        $('#sticky-astitle').text(actext);
    },
    end: function() {
        var acnum = $('.sticky-scroll-numbers ul').find('li.current').find('a').text();
        var actext = $('.sticky-scroll-numbers ul').find('li.current').find('a').attr('title');
        $('#sticky-astitle').text(actext);
        onePageNavSidebar();
    },
  });
}
$(".sticky-scroll-numbers ul li a").mouseenter(function() {
    var title = $(this).attr('title');
    $('#sticky-astitle').text(title);
}).mouseleave(function() {
    var title = $('.bnr-sidebar-links ul').find('li.current').find('a').attr('title');
    $('#sticky-astitle').text(title);
});

onePageNavSidebar();
onePageNavTop();

$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});

/**
sticky-header
*/
window.onscroll=function(){
  scrollFunction()
};
function scrollFunction(){
  if(document.body.scrollTop>1080||document.documentElement.scrollTop>1080){
    $("#branding").css({'top':'0','z-index':'99'});
  }else{
    $("#branding").css('top', '-100px');
  }
}




/**
Responsive on 767px
*/
var windowWidth = $(window).width();
// if (windowWidth <= 767) {

  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }


// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


//$("[data-fancybox]").fancybox({});


/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}
if($('.selectpicker.select_location').length){
  $('.selectpicker.select_location').on('change', function(){
     window.location = $(this).val();
  });
}


    new WOW().init();

})(jQuery);










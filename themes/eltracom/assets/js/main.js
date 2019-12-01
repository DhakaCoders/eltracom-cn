(function($) {
var windowWidth = $(window).width();
if($('.matchHeightCol').length){
    $('.matchHeightCol').matchHeight();
};

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
        icon: 'map-marker.png'
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
   scrollSpeed: 500
  });
}

$('.bnr-sidebar-links-inner ul').onePageNav({
   currentClass: 'current',
   changeHash: false,
   scrollSpeed: 500
  });


$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});
	
$('.hdr-humberger-btn').on('click', function(){
  $('.burger-menu-wrap').fadeIn(300);
  $('body').addClass('body-scroll');
});
$('.bm-close-btn').on('click', function(){
  $('.burger-menu-wrap').fadeOut(300);
  $('body').removeClass('body-scroll');
});


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

    new WOW().init();

})(jQuery);










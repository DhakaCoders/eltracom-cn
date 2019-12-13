(function($) {	
var EltraC = {
	tEl: {
		menuOpener: $('.hdr-humberger-btn'),
		menuCloser: $('.bm-close-btn'),
		menuWrap: $('.burger-menu-wrap')
	},
	vars: {
		windowWidth: $(window).width(),
		windowHeight: $(window).height()
	}
}

/*$('.hdr-humberger-btn').on('click', function(){
  $('.burger-menu-wrap').fadeIn(300);
  $('body').addClass('body-scroll');
});
$('.bm-close-btn').on('click', function(){
  $('.burger-menu-wrap').fadeOut(300);
  $('body').removeClass('body-scroll');
});*/

var tl = gsap.timeline({paused: true, reversed: true});
tl.to("body", {overflow: 'hidden'});
//tl.from(".bm-close-btn", {duration: 1, scaleY: 0});
tl.to(".burger-menu-wrap", {zIndex: 99, visibility: 'visible', opacity: 1});
tl.to( ".leftBg1", { duration: 0.5, width: '100%', ease: "power1.easeInOut" } );
tl.fromTo(".burger-menu-site-logo a", {opacity: 0, x: -250}, {opacity: 1, x: 0, duration: 1, ease: "power4.out"});
tl.from(".bm-main-nav > ul > li", { duration: 0.5, opacity: 0, y: 15, stagger: 0.10, ease: "power4.out" } );
tl.from(".bm-social-xs-controller, .bm-btm-menu", {duration: 0.5, opacity: 0, ease: "power4.out"});
tl.from(".rightBg", {duration: 1.5, scaleY: 0, ease: "power4.out"});
tl.from(".burger-menu-parent-rgt-grd", {duration: 1, opacity: 0, ease: "power4.out", onStart: function(){ $("body").addClass('menuOpened') }}, "-=1");

EltraC.tEl.menuOpener.on('click', function(){
  tl.play();
});

EltraC.tEl.menuCloser.on('click', function(){
	tl.reverse();
});

})(jQuery);
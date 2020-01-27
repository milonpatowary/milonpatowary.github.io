jQuery(document).ready(function( mlpt ) {
     
	mlpt("#photos").owlCarousel({
		itemlpt : 5,
		lazyLoad : true,
		navigation : false,
		autoPlay : true,
		pagination : true,
	});
	mlpt.backstretch([
      "images/serviceimg2.jpg",
      "images/serviceimg4.jpg",
      "images/serviceimg3.jpg"
      ], {
        fade: 800,
        duration: 4000
    });
	
	mlpt(".to-top").click(function(){
    	mlpt("html,body").animate({scrollTop:1},3000,'easeInOutExpo')
    	return false
    });
	mlpt(window).scroll(function(){
		if(mlpt(window).scrollTop() > 200){
			mlpt('.to-top').fadeIn(700);
		}else{
			mlpt('.to-top').fadeOut(700);
		}
	});
	mlpt('body').scrollspy({ target: '.navbar-collapse',offset: 80 })
	
	mlpt('.navbar-nav li a').bind('click', function(event) {
        var mlptanchor = mlpt(this);
        var headerH = '60';
        mlpt('html, body').stop().animate({
            scrollTop : mlpt(mlptanchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });
	
	mlpt("html").niceScroll({
		scrollspeed: 100,
		autohidemode : true,
		cursorwidth : 10,
		cursorborderradius: 0,
		cursorborder : "0",
		background : "#ededed",
		cursorcolor : '#BBCF93',
		zindex : 9999999
	});
	mlpt("#photos a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false});
	
	wow = new WOW(
	    {
		  mobile: false,
		  offset: 58
		}
	);
	wow.init();
});
jQuery(window).load(function() {
        jQuery(".pre-loader-icon,#pre-loader h2").fadeOut();
       
        jQuery("#pre-loader").delay(1000).fadeOut("slow");
});
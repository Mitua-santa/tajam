
$(document).ready(function () {
    
     $.scrollUp(); //bootom to top
    
    $('.venobox').venobox({
        border: '10px',
    });
    
   //    preloder js start
     $(window).on('load', function () {
         $('.preloder').delay(1000).fadeOut(500);
     })
     //    preloder js end              

    
    //header-part-slider
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        aotoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        fade: true,

    });
    //team parts slide
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,


    });
    //testemonial part
    $('.text-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide-img'
    });
    $('.slide-img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.text-slide',
        prevArrow: 'team-chevron-left',
        nextArrow: 'team-chevron-right',
         autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        arrows: true
       
    });
    	//sticky- top -menu js
	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();
		var sticky = $('.sticky-top');

		if (scrolling >= 100) {
			sticky.addClass('nav-bg');
		} else {
			sticky.removeClass('nav-bg');
		}
	});
	//Smooths scrolling
	$('body').scrollspy({
		target: ".navbar",
		offset: 50
	});
    //wow js
	new WOW().init();
    
    //ytbackground vedio
    
    jQuery("#bgndVideo").YTPlayer();
    
});
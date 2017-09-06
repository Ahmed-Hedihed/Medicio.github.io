/* global $, document, containerEl, mixitup */



// Jquery Code


$(document).ready(function() {
	
	'use strict';
	
	$(".doc-filter ul li").click(function() {
		
		$(".doc-filter ul li.active").removeClass("active");
		$(this).addClass("active");
		
	});
	

	
	
	// Trigger bxSlider
	
	  $('.slider4').bxSlider({
		  
		slideWidth: 300,
		minSlides: 1,
		maxSlides: 4,
		moveSlides: 1,
		slideMargin: 10,
		controls: false
		  
	  });
	
	
	
	// Smoth Scroll
	
	$('.navbar li a').click(function() {

		$('html, body').animate({

			scrollTop: ($('#' + $(this).data('value')).offset().top - 30)

		}, 1000);

	});
	
	
	
	// Add Class Active
	
		
	$(".navbar ul li").click(function() {
			
		$(this).addClass("active1").siblings().removeClass("active1");		
			
	});
	
	
	
	
	
});























// Java Script Code

// Trigger Mixitup Plugin

var mixer = mixitup('.capatcha');

var mixer = mixitup(containerEl);

var mixer = mixitup(containerEl, {
	
    	selectors: {
        target: '.blog-item'
    },
	
    animation: {
        duration: 300
		
    }
	
});


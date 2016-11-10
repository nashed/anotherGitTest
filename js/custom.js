/**	
	* SinglePro HTML 1.0	
	* Template Scripts
	* Created by WpFreeware Team

	Custom JS
	
	1. Superslides Slider
	2. Fixed Top Menubar
	3. Featured Slider
	4. Skill Circle
	5. Wow animation
	6. Project Counter
	7. TEAM SLIDER
	8. BLOG SLIDER
	9. TESTIMONIAL SLIDER
	10. CLIENTS SLIDER
	11. Google Map
	12. SCROLL TOP BUTTON
	13. PRELOADER 
	14. MENU SCROLL 
	15. MOBILE MENU CLOSE 	
	
**/

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. Superslides Slider
	/* ----------------------------------------------------------- */
    var windowHeight = $(window).height();
var headerHeight = $("nav").outerHeight();
var calculatedHeight = windowHeight - 115;
var heightFill = $('.home-slider');
$(heightFill).height(calculatedHeight);
	jQuery('#slides').superslides({
        hashchange: true,
          inherit_height_from: '.home-slider',
      animation: 'fade',
      play: '5000',
        pagination: true
    });
    $('#slides').on('animated.slides', function () {
	var slideNo = $('#slides').superslides('current');
    if(slideNo === 0){$('body').removeClass(); $('body').addClass("slideNo00"); }
    if(slideNo === 1){$('body').removeClass(); $('body').addClass("slideNo01"); }
    if(slideNo === 2){$('body').removeClass(); $('body').addClass("slideNo02"); }
    if(slideNo === 3){$('body').removeClass(); $('body').addClass("slideNo03"); }
    if(slideNo === 4){$('body').removeClass(); $('body').addClass("slideNo04"); }
    if(slideNo === 5){$('body').removeClass(); $('body').addClass("slideNo05"); }
    if(slideNo === 6){$('body').removeClass(); $('body').addClass("slideNo06"); }
    if(slideNo === 7){$('body').removeClass(); $('body').addClass("slideNo07"); }
    });
    
    jQuery(document).on('click', '.mega-dropdown', function(e) {
  e.stopPropagation();
});
    
    $('.nav-tabs > li ').hover(function() {
  if ($(this).hasClass('hoverblock'))
    return;
  else
    $(this).find('a').tab('show');
});

$('.nav-tabs > li').find('a').click(function() {
  $(this).parent()
    .siblings().addClass('hoverblock');
});

$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // ADD SLIDEUP ANIMATION TO DROPDOWN //
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
  
   $('.slides-pagination').append("<a href='javascript:;' class='fa fa-pause playAndPause'> </a>");
    var tog=0;
    $('.playAndPause').on('click', function() {
        if(tog===0){
        $('#slides').superslides('stop'); 
        $('.playAndPause').addClass("fa-play"); 
       
            tog=1;
             console.log("stop"+tog);
            }
        else{
            
            
                        
var slideNo = $('#slides').superslides('current');
    
    if(slideNo === 7){ $('#slides').superslides('animate' , 0); 
    console.log("last slide");
    }
            else{ $('#slides').superslides('start');}
            $('.playAndPause').removeClass('fa-play');
           
            
             tog=0;
             console.log("start"+ slideNo);
        }
        
    });
    
    $( ".register" ).click(function() {
        
        $('.interest-area').toggleClass("interest-area-show");
        $('.interest-area .now_text').toggleClass("now_text");
  $( ".register_form" ).toggle(500);
        
});
 

    
    //$('.playAndPause.fa-pause').on('click', function() { $('#slides').superslides('stop'); $('.playAndPause').addClass("fa-play"); console.log("stop"); $('.playAndPause').removeClass('fa-pause');});
    
    //$('.playAndPause.fa-play').on('click', function() { $('#slides').superslides('start'); $('.playAndPause').removeClass("fa-play"); console.log("start"); $('.playAndPause').addClass('fa-pause')});
	
	/* ----------------------------------------------------------- */
	/*  2. Fixed Top Menubar
	/* ----------------------------------------------------------- */

	// For fixed top bar
       $(window).scroll(function(){
        if($(window).scrollTop() >100 /*or $(window).height()*/){
            $(".navbar-fixed-top").addClass('past-main');   
        }
    else{    	
      $(".navbar-fixed-top").removeClass('past-main');
      }
    });


	/* ----------------------------------------------------------- */
	/*  3. Featured Slider
	/* ----------------------------------------------------------- */
	

    $('.featured_slider').slick({
      dots: true,
      infinite: true,      
      speed: 800,
      arrows:false,      
      slidesToShow: 1,
      slide: 'div',
      autoplay: true,
      fade: true,
      autoplaySpeed: 5000,
      cssEase: 'linear'
    });


	/* ----------------------------------------------------------- */
	/*  4. Skill Circle
	/* ----------------------------------------------------------- */

	$('#myStathalf').circliful();
	$('#myStat').circliful();
	$('#myStathalf2').circliful();
	$('#myStat2').circliful();
	$('#myStat3').circliful();
	$('#myStat4').circliful();
	$('#myStathalf3').circliful();


	/* ----------------------------------------------------------- */
	/*  5. Wow smooth animation
	/* ----------------------------------------------------------- */

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();


	/* ----------------------------------------------------------- */
	/*  6. Project Counter
	/* ----------------------------------------------------------- */

	(function ($) {
		$.fn.countTo = function (options) {
			options = options || {};
			
			return $(this).each(function () {
				// set options for current element
				var settings = $.extend({}, $.fn.countTo.defaults, {
					from:            $(this).data('from'),
					to:              $(this).data('to'),
					speed:           $(this).data('speed'),
					refreshInterval: $(this).data('refresh-interval'),
					decimals:        $(this).data('decimals')
				}, options);
				
				// how many times to update the value, and how much to increment the value on each update
				var loops = Math.ceil(settings.speed / settings.refreshInterval),
					increment = (settings.to - settings.from) / loops;
				
				// references & variables that will change with each update
				var self = this,
					$self = $(this),
					loopCount = 0,
					value = settings.from,
					data = $self.data('countTo') || {};
				
				$self.data('countTo', data);
				
				// if an existing interval can be found, clear it first
				if (data.interval) {
					clearInterval(data.interval);
				}
				data.interval = setInterval(updateTimer, settings.refreshInterval);
				
				// initialize the element with the starting value
				render(value);
				
				function updateTimer() {
					value += increment;
					loopCount++;
					
					render(value);
					
					if (typeof(settings.onUpdate) == 'function') {
						settings.onUpdate.call(self, value);
					}
					
					if (loopCount >= loops) {
						// remove the interval
						$self.removeData('countTo');
						clearInterval(data.interval);
						value = settings.to;
						
						if (typeof(settings.onComplete) == 'function') {
							settings.onComplete.call(self, value);
						}
					}
				}
				
				function render(value) {
					var formattedValue = settings.formatter.call(self, value, settings);
					$self.html(formattedValue);
				}
			});
		};
		
		$.fn.countTo.defaults = {
			from: 0,               // the number the element should start at
			to: 0,                 // the number the element should end at
			speed: 1000,           // how long it should take to count between the target numbers
			refreshInterval: 100,  // how often the element should be updated
			decimals: 0,           // the number of decimal places to show
			formatter: formatter,  // handler for formatting the value before rendering
			onUpdate: null,        // callback method for every time the element is updated
			onComplete: null       // callback method for when the element finishes updating
		};
		
		function formatter(value, settings) {
			return value.toFixed(settings.decimals);
		}
	}(jQuery));

	

	

	/* ----------------------------------------------------------- */
	/*  7. TEAM SLIDER
	/* ----------------------------------------------------------- */

		$('.team_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 3,
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
		  ]
		});


	/* ----------------------------------------------------------- */
	/*  8. BLOG SLIDER
	/* ----------------------------------------------------------- */


    $('.blog_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 3,
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
		]
	});


	


    /* ----------------------------------------------------------- */
	/*  10. CLIENTS SLIDER
	/* ----------------------------------------------------------- */

    $('.clients_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1199,
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
		]
	});


   


	/* ----------------------------------------------------------- */
	/*  12. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	  $(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	  });
	   
	  //Click event to scroll to top

	  $('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });


	/* ----------------------------------------------------------- */
	/*  13. PRELOADER 
	/* ----------------------------------------------------------- */ 

	  jQuery(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })


	

	/* ----------------------------------------------------------- */
	/*  15. MOBILE MENU ACTIVE CLOSE 
	/* ----------------------------------------------------------- */ 

	$('.navbar-nav').on('click', 'li a', function() {
	  //$('.navbar-collapse').collapse('hide');
	});

	
});
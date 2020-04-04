// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
	interval: false
  });
  
  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $('.multi-item-carousel .item').each(function(){
	var next = $(this).next();
	if (!next.length) {
	  next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
	
	if (next.next().length>0) {
	  next.next().children(':first-child').clone().appendTo($(this));
	} else {
	  $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	}
  });
  



//   Navigation

$(document).ready(function() {

    /* For the sticky navigation */
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        
    }, {
      offset: '5px;'
    });
    
    
    /* Scroll on buttons */
    
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);

    });
    
     $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top},1000);
    });
    
    /* Navigation scroll* */
    
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            console.log('test');
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
              console.log('test2');
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 100);
              console.log('test3');
            return false;
          }
        }
      });
    });
    
    /* Animations on scroll */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
      $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
      $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
      $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
   
});



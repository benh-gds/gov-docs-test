// $(document).ready(function() {
// var stickyNavTop = $('.tocify-wrapper').offset().top;
 
// var stickyNav = function(){
//	var scrollTop = $(window).scrollTop();
//	var $el = $('#global-header');  //record the elem so you don't crawl the DOM everytime  
//	var bottom = $el.position().top + $el.outerHeight(true) - scrollTop;
  	      
//	if (scrollTop > stickyNavTop) { 
//	    $('.tocify-wrapper').addClass('sticky');
//	} else {
//		if (bottom > 0){
//			$('.tocify-wrapper').css("top", bottom + "px");
//			$('.dark-box').css("top", (bottom - 53) + "px");
//		}
  		
//	    $('.tocify-wrapper').removeClass('sticky'); 
//	    $('.dark-box').removeClass('sticky'); 
//	}
// };
 
// stickyNav();
 
// $(window).scroll(function() {
//   stickyNav();
// });
// });
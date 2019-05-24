new WOW().init();

  function openMenu(){
	  $('.menu').css('display','block');
	  $('.page-container').addClass('show-menu');
	  setTimeout(function(){
      $('.menu').css('z-index','0');
    },400);
  }
	
	//CLOSE 
	function closeMenu(){
	  $('.menu').css('z-index','-1');
	  $('.page-container').removeClass('show-menu');
    setTimeout(function(){
      $('.menu').css('display','none');
    },400);
  }

$(function(){
  $('.navicon').on('click',function(){
    if( $('.page-container').hasClass('show-menu') ){
      closeMenu();
    }else{
      openMenu();
    }
  });
  $(window).on('scroll',function(){
    if($(window).scrollTop()>210){
      $('.navicon').addClass('blue');
    }else{
      $('.navicon').removeClass('blue')
    }
  });   
});
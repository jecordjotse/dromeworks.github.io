 jQuery(document).ready(function($) {  
 	
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if($('.banner').is('#home')){

    if (y > 3) {
        $('#nav').fadeIn();
    } else $('#nav').fadeOut();
    }
   
    var target = $('#signform').offset().top(); 
    var offset =  $('#MainInfo').scrolltop();

    if(100 == target){
    $('#signin').hide();

    }
});


 $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

$('.ct').hover(function () {
  if($('div').is('#signReq')){
    
  }else{
  $('.cart-icon').slideToggle();
}
});

  if($('div').is('#signReq')){
    $('.ct').mouseenter(function () {
    $('.form').show();
    $('#signin').hide();
      $('#login').animate({top:"8%" , height:"170px"} , { queue:false , duration:1000});
    });

    $('.ct').mouseleave(function () {
      $('#login').animate({bottom:"1%" , top:"75%"} , { queue:false , duration:1000});
    });
    
  }

  if($('div').is('#signed')){
    
    $('.form-container').css({ "position":"absolute",
                      "z-index":"9" ,
                       "right":"15%" ,
                        "width":"70%",
                         "bottom":"15%" ,
                          "top":"15%" ,
                           "left":"15%",
                            "height":"60%",
                             "overflow-y":"scroll"
                           });// , "bottom":"1%" ,"z-index": "9999"});

       $('.form').css({ "position":"absolute",
                        "z-index":"9" ,
                       "right":"0%" ,
                         "bottom":"15%" ,
                          "top":"15%" ,
                           "left":"0%"
                           });

  }

 $('.cr').click(function(){
    $('#login').slideToggle();
    $('#signin').slideToggle();
 });

 $('.remove').click(function(){
    $('.form').hide();
 });


  if($('.banner').is('#home')){
  }else{
   $('.banner').animate({height:"100px"} , { queue:false , duration:1000});
        $('#nav').fadeIn();
  }

});
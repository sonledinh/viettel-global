
$('.slide-banner').slick({
    autoplay: true,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
}); 

$('.slide-dev').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
}); 

$('.slide-respon').slick({
    autoplay: false,
    arrow: true,
    dots: false, 
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '<button class="prev"><i class="fa fa-long-arrow-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-long-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 1023, 
            settings: {
                slidesToShow: 2,
            } 
        },
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 2,
            } 
        },
        {  
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}); 

$('.slide-member').slick({
    autoplay: false,
    arrow: true,
    dots: false, 
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '<button class="prev"><i class="fa fa-long-arrow-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-long-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 2,
            } 
        },
        { 
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}); 

$('.slide-history').slick({
    autoplay: false,
    arrow: true,
    dots: false, 
    infinite: false,
    slidesToShow: 3.5,
    slidesToScroll: 1, 
    prevArrow: '<button class="prev"><i class="fa fa-long-arrow-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-long-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 1023, 
            settings: {
                slidesToShow: 2,
            } 
        },
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 2,
            } 
        },
        { 
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}); 

$('.answer').slideUp();
$('.title-ask').click(function(event) {
    $(this).toggleClass('active');
    $(this).next().slideToggle(500);
});

$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
})

if($(window).innerWidth() >= 1024){
    new WOW().init();
}


var dropdowns = $(".dropdown");
dropdowns.find("dt").click(function(){
  dropdowns.find("dd ul").hide();
  $(this).next().children().toggle();
});
dropdowns.find("dd ul li a").click(function(){
  var leSpan = $(this).parents(".dropdown").find("dt a span"); 
  $(this).parents(".dropdown").find('dd a').each(function(){
    $(this).removeClass('selected');
  });
  
  leSpan.html($(this).html());
  if($(this).hasClass('default')){
    leSpan.removeClass('selected')
  }
  else{
    leSpan.addClass('selected');
    $(this).addClass('selected');
  }
  $(this).parents("ul").hide();
});
$(document).bind('click', function(e){
  if (! $(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});
 
jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});


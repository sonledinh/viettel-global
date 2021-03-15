
$('.slide-banner').slick({
    autoplay: true,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
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

$('.slide-respon').slick({
    autoplay: false,
    arrow: false,
    dots: false, 
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
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

$('.slide-member').slick({
    autoplay: false,
    arrow: false,
    dots: false, 
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
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

 
// jQuery(document).ready(function( $ ) {
//   $("#menu").mmenu({
//      "extensions": [
//         "fx-menu-zoom"
//      ],
//      "counters": true
//   });
// });


$(document).ready(function(){
    var $slider = $('.slider');
  
    $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var currentSlideIndex = (currentSlide ? currentSlide : 0) + 1;
      var totalSlides = slick.slideCount;
      
      $('.current-page').text(currentSlideIndex);
      $('.total-pages').text(totalSlides);
    });
  
    $slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false
          }
        }
      ]
    });
  });
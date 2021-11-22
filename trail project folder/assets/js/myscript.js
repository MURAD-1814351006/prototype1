$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:5,
      autoplay:true,
      responsive: {
          
          1024:{
              items:5
          },
          767:{
              items:2
          },
          0:{
              items:1
          },
      }
  });
}); 
$(document).ready(function(){
  $('.fa-xmark').click(function(){
    $('.enters').hide();
  })
 $('.fa-magnifying-glass').click(function(){
    $('.header-icon').slideToggle();
  })


  $(".owl-carousel").owlCarousel({
  	nav:true,
  	loop:true,
  	margin:20,
  	items:5,
  	autoplay:true,
  	navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
  	responsiveClass:true,
  responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
  });

    // nav-bar-button
    let menuToggle = document.querySelector(".toggle");
      menuToggle.onclick = function() {
       menuToggle.classList.toggle("active")
      }

     $('.nav-btn').click(function(){
       $('.main-menu').slideToggle();
     })



});
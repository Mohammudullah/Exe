$(function(){
    $('#language-picker').click(function(){
        $('.arrow-lang').toggleClass('arrow-rotate');
    });

    //portfolio filter button color change
    $('.filter-active').click(function(){

      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    });

    //Search action calling
    $('.search-action').click(function(){
      $('#search').css({'display':'block'});
    });
    $('.close').click(function(){
      $('#search').css({'display':'none'});
    });

    //counter up
    $('.counter').counterUp({
      time: 1500
  });

  //progress svg animation
  var counteronevar = setInterval(myTimerone, 500);

function myTimerone() {
  let x = document.getElementById('counter1');
  if(x.innerHTML != 6587) {
    $('.progress-1').addClass('progress-animation1');
    clearInterval(counteronevar);
  }
}
  var countertwovar = setInterval(myTimertwo, 500);

function myTimertwo() {
  let y = document.getElementById('counter2');
  if(y.innerHTML != 896) {
    $('.progress-2').addClass('progress-animation2');
    clearInterval(countertwovar);
  }
}
  var counterthreevar = setInterval(myTimerthree, 500);

function myTimerthree() {
  let z = document.getElementById('counter3');
  if(z.innerHTML != 1674) {
    $('.progress-3').addClass('progress-animation3');
    clearInterval(counterthreevar);
  }
}
  var counterfourvar = setInterval(myTimerfour, 500);

function myTimerfour() {
  let a = document.getElementById('counter4');
  if(a.innerHTML != 769) {
    $('.progress-4').addClass('progress-animation4');
    clearInterval(counterfourvar);
  }
}

    


  //Collapse Rotate
  $('.collapse-button').click(function(){
    $(this).children('.collaps-icon').toggleClass('rotation');
    $(this).toggleClass('click-button');
    $(this).parent().toggleClass('change-parent-background');
  });

  //navbar toggler animation 
  $('.navbar-toggler').click(function(){

    $('.divone').toggleClass('divoneanim');
    $('.divthree').toggleClass('divthreeanim');
    $('.divtwo').toggleClass('divtwoanim');
  });

  //feedback slider
  $('.feedback-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    vertical: true,
    dots: true,
    arrows: false,
    verticalSwiping: true,
    dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //blog slider
  $('.blog-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      }
    ]
  });

  //Brands logo slider
  $('.brands-slider-main').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }
    ]
  });

  //News Latter slider
  $('.news-slider-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  });

  //Venobox Initialization
  $('.venobox').venobox({

    framewidth : '800px',
  });


  //Venobox Initialization
  $('.feedback-person').venobox({

    spinColor  : '#E5493A',
    framewidth : '400px',
    border     : '4px',
    bgcolor    : '#E5493A',
    share      : ['facebook', 'twitter', 'download']

  });

  //back To Top button
  $('.bttop .arrow').click(function(){

    $('html,body').animate({scrollTop:0},1000);
  });

  // back to Top button & Nav bar scroll animation
  $(window).scroll(function(){

    var scrollammount = $(this).scrollTop();
    if(scrollammount > 200) {
      $('.bttop').addClass('bttop2');
      $('.navbar').addClass('navbar-collaps');
    }
    else {
      $('.bttop').removeClass('bttop2');
      $('.navbar').removeClass('navbar-collaps');
    }
  });

  //smooth scroll
  var scrollLink = $('.nav-link');
  $(scrollLink).click(function(event){

    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top-75});
  });
  $(scrollLink).click(function(){

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  });

});

// Scroll Indicator
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementsByClassName('bar')[0].style.width = scrolled + "%";
  document.getElementsByClassName('bar')[1].style.width = scrolled + "%";
}

//filter Seclection 
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio-item");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

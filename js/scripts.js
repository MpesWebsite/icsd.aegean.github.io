/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    $(document).ready(function() {
        $(".menu-btn").on("click", function() {
          $(".menu-overlay").addClass("active");
          $(".menu-categories").addClass("active");
          $(".close-btn").addClass("active");
          $("body").addClass("menu-open");
        });
      
        $(".close-btn").on("click", function() {
          $(".menu-overlay").removeClass("active");
          $(".menu-categories").removeClass("active");
          $(".close-btn").removeClass("active");
          $("body").removeClass("menu-open");
        });
      });
      // Get the overlay and close button elements
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-menu');

// login button 
document.querySelector('.login-btn').addEventListener('click', function() {
  window.location.href = 'login1.html'; // Replace 'login.html' with the URL of your login page
});

// Add an event listener to the menu button
menuButton.addEventListener('click', () => {
  // Show the overlay and close button
  overlay.style.display = 'block';
  closeButton.style.display = 'block';
});
// Add an event listener to the close button
closeButton.addEventListener('click', () => {
    // Hide the overlay and close button
    overlay.style.display = 'none';
    closeButton.style.display = 'none';
  });
  $('.close').click(function() {
    $('.overlay').fadeOut();
    $('.menu').animate({left: '-100%'});
  });
  $('.close-btn').click(function(){
    $('.menu-list').fadeOut();
    $('body').removeClass('stop-scrolling');
  });
  var closebtn = document.getElementsByClassName("closebtn")[0];
  $(document).ready(function () {
    // Add event listener to menu button
    $('.menu-btn').on('click', function () {
      $('body').toggleClass('menu-open');
    });
  
    // Add event listener to close button
    $('.close-btn').on('click', function () {
      $('body').removeClass('menu-open');
    });
  });
        

     

      

      

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

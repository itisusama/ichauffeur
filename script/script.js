document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.mobile-menu');
  
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      document.getElementById('navbar').classList.toggle('nav-toggle-color');
    });
  });
  
// mobile menu
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  navToggle.addEventListener('click', function() {
    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
    }
  });
  
  document.querySelector('.by-the-hour').style.display = 'none';
  function showOneWay() {
    document.querySelector('.one-way').style.display = 'block';
    document.querySelector('.by-the-hour').style.display = 'none';
}

function showByTheHour() {
    document.querySelector('.by-the-hour').style.display = 'block';
    document.querySelector('.one-way').style.display = 'none';
}

// Slider
let slideIndex = 0;

function moveSlider(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        indicators[i].classList.remove("slide-active");
    }

    slides[slideIndex].style.display = "block";
    indicators[slideIndex].classList.add("slide-active");
}

showSlide(slideIndex);
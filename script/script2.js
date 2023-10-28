// nav
    // mobile menu
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.style.display = 'none'
    navToggle.addEventListener('click', function() {
        
        document.getElementById('navbar').classList.toggle('nav-toggle-color');
        if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        } else {
        mobileMenu.style.display = 'block';
        }});
    
    // form
     document.querySelector('.by-the-hour').style.display = 'none';
    function showOneWay() {
        document.querySelector('.one-way').style.display = 'block';
        document.querySelector('.by-the-hour').style.display = 'none';
    }

    function showByTheHour() {
        document.querySelector('.by-the-hour').style.display = 'block';
        document.querySelector('.one-way').style.display = 'none';
    }

    // slide
    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
    
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
    
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
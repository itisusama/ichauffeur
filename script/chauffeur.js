let ourcarsSlideIndex = 0;

    function ourcarsmoveSlider(n) {
        ourcarsshowSlide(ourcarsSlideIndex += n);
    }

    function ourcarsshowSlide(n) {
        const slides = document.querySelectorAll(".ourcars-slide");
        const indicators = document.querySelectorAll(".ourcars-indicator");

        if (n >= slides.length) {
            ourcarsSlideIndex = 0;
        }
        if (n < 0) {
            ourcarsSlideIndex = slides.length - 1;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            indicators[i].classList.remove("ourcars-slide-active");
        }

        slides[ourcarsSlideIndex].style.display = "block";
        indicators[ourcarsSlideIndex].classList.add("ourcars-slide-active");
    }

    ourcarsshowSlide(ourcarsSlideIndex);
 
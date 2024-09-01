
let slideIndexT = 0;
let slideIndexB = 0;
let slideIntervalT;
let slideIntervalB;


function showSlidesT() {
    const slidesT = document.querySelector('.menu-category2:nth-child(1) .slides');
    const slideCountT = slidesT.children.length;
    slideIndexT++;
    if (slideIndexT > slideCountT) { slideIndexT = 1; }
    slidesT.style.transform = `translateX(-${(slideIndexT - 1) * 100}%)`;
}


function showSlidesB() {
    const slidesB = document.querySelector('.menu-category2:nth-child(2) .slides');
    const slideCountB = slidesB.children.length;
    slideIndexB++;
    if (slideIndexB > slideCountB) { slideIndexB = 1; }
    slidesB.style.transform = `translateX(-${(slideIndexB - 1) * 100}%)`;
}


function prevSlideT() {
    slideIndexT -= 2;
    if (slideIndexT < 1) { slideIndexT = document.querySelector('.menu-category2:nth-child(1) .slides').children.length; }
    showSlidesT();
}

function nextSlideT() {
    showSlidesT();
}

function prevSlideB() {
    slideIndexB -= 2;
    if (slideIndexB < 1) { slideIndexB = document.querySelector('.menu-category2:nth-child(2) .slides').children.length; }
    showSlidesB();
}

function nextSlideB() {
    showSlidesB();
}

function startAutoSlide() {
    slideIntervalT = setInterval(showSlidesT, 3000);
    slideIntervalB = setInterval(showSlidesB, 3000); 
}

function stopAutoSlide() {
    clearInterval(slideIntervalT);
    clearInterval(slideIntervalB);
}

document.querySelector('.menu-category2:nth-child(1) .slider').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.menu-category2:nth-child(1) .slider').addEventListener('mouseout', startAutoSlide);
document.querySelector('.menu-category2:nth-child(2) .slider').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.menu-category2:nth-child(2) .slider').addEventListener('mouseout', startAutoSlide);

document.addEventListener('DOMContentLoaded', function() {
    showSlidesT();
    showSlidesB();
    startAutoSlide();
});

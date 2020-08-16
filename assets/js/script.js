var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    console.log('slides: ' + slides);
    console.log(slides);
    console.log(slides.length);
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1] != undefined) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}
var mySlide = 0;
showSlidess();

function showSlidess() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    mySlide++;
    if (mySlide > slides.length) {
        mySlide = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[mySlide - 1] != undefined && dots[mySlide - 1] != undefined) {
        slides[mySlide - 1].style.display = "block";
        dots[mySlide - 1].className += " active";
    }
    setTimeout(showSlidess, 6000); // Change image every 2 seconds
}
///Scroll
$(function() {

});
///Scroll
$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
});
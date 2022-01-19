let slideIndex = 1;
showSlides(slideIndex);

// slide control 
function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('slide');
    if ( n > slides.length ) { slideIndex = 1 }
    if ( n < 1 ) { slideIndex = slideIndex.length }
    
    for (i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none"
    }

    slides[slideIndex-1].style.display = "block";
}


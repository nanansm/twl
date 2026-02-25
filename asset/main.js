// LOGIKA SLIDESHOW
let slideIndex = 1;
let slideTimer;

// Inisialisasi slide pertama
showSlides(slideIndex);

// Memulai auto-play (Ganti gambar tiap 3 detik)
startSlideTimer();

// Fungsi tombol Next/Prev
function plusSlides(n) {
    showSlides(slideIndex += n);
    resetSlideTimer(); // Reset timer kalau user klik manual
}

// Fungsi titik indikator
function currentSlide(n) {
    showSlides(slideIndex = n);
    resetSlideTimer();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function startSlideTimer() {
    slideTimer = setInterval(function() {
        plusSlides(1);
    }, 3000); // 3000 = 3 detik
}

function resetSlideTimer() {
    clearInterval(slideTimer);
    startSlideTimer();
}
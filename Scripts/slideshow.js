var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
let showNextSlide = () =>{
  slides[currentSlide].classList.add("hidden");
  slides[currentSlide].classList.add("hide");
  slides[currentSlide].classList.remove("show");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.remove("hidden");
  slides[currentSlide].classList.remove("hide");
  slides[currentSlide].classList.add("show");
}

let slideShow = setInterval(showNextSlide, 2000);


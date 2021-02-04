// jshint esversion:6
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const testimonials = document.querySelectorAll(".testimonial");

let i = 0;

display(i);

function display(i) {
  testimonials.forEach((testimonial) => {
    testimonial.style.display = "none";
  });
  testimonials[i].style.display = "flex";
}

function nextSlide() {
  i++;
  if (i > testimonials.length - 1) {
    i = 0;
  }
  display(i);
}

function prevSlide() {
  i--;
  if (i < 0) {
    i = testimonials.length - 1;
  }
  display(i);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

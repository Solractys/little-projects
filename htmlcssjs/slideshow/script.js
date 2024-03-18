let slideIndex = 1;
showSlide(slideIndex);


function slidePlus(n) {
  showSlide(slideIndex += n);
};

function currentSlide(n) {
  showSlide(slideIndex = n);
}
function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) { slideIndex = 1 };
  if (n < slides.length) { slideIndex = slides.length };
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

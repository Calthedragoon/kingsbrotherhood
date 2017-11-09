
/*Slideshow Vanilla Script*/
var slideindex = 0;
showslides();

function showslides() {
  var i;
  var slide = document.getElementsByClassName("slides fade");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideindex++;
  if (slideindex > slide.length) {slideindex = 1}
    slide[slideindex-1].style.display = "block";
    setTimeout(showslides, 4000);
}

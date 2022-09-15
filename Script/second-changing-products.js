var slidesIndex = 1;
showDiv(slidesIndex);

function nextSlide(n) {
  showDiv(slidesIndex += n);
}

function showDiv(n) {
  var i;
  var x = document.getElementsByClassName("slideMac");
  if (n > x.length) {slidesIndex = 1}
  if (n < 1) {slidesIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slidesIndex-1].style.display = "block";  
}
/* ********************************Slideshow************************************** */
let s = 0;
slideShow(rev);

function previousSlide() {
    s = s - 1;
    slideShow(s);
}

function nextSlide() {
    s = s + 1;
    slideShow(s);
}

function slideShow(slide) {
    let slides = document
        .getElementsByClassName("slide");

    if (slide >= slides.length) {
        slide = 0;
        s = 0;
    }
    if (slide < 0) {
        slide = slides.length - 1;
        s = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide].style.display = "block";
}
/* *********************************Search bar****************************** */
function searchFunction() {
  var input, filter, ul, li, a, i, txt;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("UL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txt = a.textContent || a.innerText;
    if (txt === "") {
      li[i].style.display = "none";
    } else if (txt.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "inline-block";
    } else {
      li[i].style.display = "none";
    }
  }
}

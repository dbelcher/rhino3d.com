// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navigation").style.padding = "5px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navigation").style.padding = "30px";
    document.getElementById("logo").style.fontSize = "25px";
  }
}

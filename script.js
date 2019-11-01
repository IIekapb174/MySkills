$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();

var target = this.hash,
 $target = $(target);

$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 500, 'swing', function () {
 window.location.hash = target;
 });
 });


 var c = 0;
 function pop() {
   if(c == 0) {
     document.getElementById("box").style.display = "block";
     c = 1;
   } else {
     document.getElementById("box").style.display ="none";
     c = 0;
   }
 }

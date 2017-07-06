AOS.init();
var x=1;
setInterval(
()=>{
if(x===0){
  $('.screen')[0].src="src/images/croped1.png";
  x=1;
}
else if(x===1){
 $('.screen')[0].src="src/images/croped2.png";
  x=2;
}
else if(x===2){
 $('.screen')[0].src="src/images/croped3.png";
  x=3;
}
else if(x===3){
 $('.screen')[0].src="src/images/croped4.png";
  x=0;
}
}
 ,4000 );
$('.button').hover(function(){
  $('.button').removeClass('touched');
  $(this).addClass('touched');
});

$('.b1').hover(()=>{
$('.aboveimg')[0].src="src/images/1.svg";
});
$('.b2').hover(()=>{
$('.aboveimg')[0].src="src/images/2.svg";
});
$('.b3').hover(()=>{
$('.aboveimg')[0].src="src/images/3.svg";
});
$('.b4').hover(()=>{
$('.aboveimg')[0].src="src/images/4.svg";
});
var y=0;

$(window).on('scroll',debounce(check));
 function debounce(func, wait =20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

function check(){
if(window.scrollY>960){
  if(y===0){
    y=1;
$('header').css({"position":"fixed"});
$('header').css({"background-color":"#fff"});
}
}
else{
  if(y===1){
    y=0;
  $('header').css({"position":"static"});
$('header').css({"background-color":"transparent"});
}
}
};
var x=0;
$('#logo div img').on('click',function(){
  $("#nav div:nth-child(1),#nav div:nth-child(2)").toggleClass("show")
  $(this).css({'transform':`rotate(${x+90}deg)`});
  x=x+90;
});
$('#interacttext button').on('click',function(){
  window.scroll(0,1975);
});

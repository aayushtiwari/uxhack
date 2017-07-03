
var x=0;
setInterval(
()=>{
if(x===0){
  $('.screen')[0].src="src/images/screen1.png";
  x=1;
}
else{
 $('.screen')[0].src="src/images/screen2.png";
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

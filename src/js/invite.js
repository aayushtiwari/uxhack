var x=0;
setInterval(
()=>{
if(x===0){
  $('.screen')[0].src="src/images/screen1.png";
  x=1;
}
else{
 $('.screen')[0].src="file:///home/shush/testing%20zone/uxhack/src/images/screen2.png";
  x=0;
}
}
 ,4000 );


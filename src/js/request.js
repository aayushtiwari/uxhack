var x=0;

$('#options div:nth-child(1)').on('click',function(){
  x=1;
$('#block').css('display','none');
$('#bemail').css('display','flex');
$('#blockbot h3').empty().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit in, illo sequi accusantium.')
});
$('#options div:nth-child(2)').on('click',function(){
  x=2;
$('#block').css('display','none');
$('#bpage').css('display','flex');
$('#blockbot h3').empty().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptas quidem, quisquam eos expedita earum ipsum')
});
$('#options div:nth-child(3)').on('click',function(){
  x=3
$('#block').css('display','none');
$('#bweb').css('display','flex');
$('#blockbot h3').empty().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptas quidem, quisquam eos expedita earum ipsum')
});
$('#options div:nth-child(4)').on('click',function(){
  x=4;
$('#block').css('display','none');
$('#bmobile').css('display','flex');
$('#blockbot h3').empty().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptas quidem, quisquam eos expedita earum ipsum')
});
$('#options div:nth-child(5)').on('click',function(){
  x=5;
$('#block').css('display','none');
$('#bads').css('display','flex');
$('#blockbot h3').empty().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptas quidem, quisquam eos expedita earum ipsum')
});



$('.second .back .backbut').on('click',function(){

  if(x==1){
$('#bemail').css('display','none');
}  
else if(x==2){
$('#bpage').css('display','none');
}  
else if(x==3){
$('#bweb').css('display','none');
}  
else if(x==4){
$('#bmobile').css('display','none');
}
else if(x==5){
$('#bads').css('display','none');
}


$('#block').css('display','flex');
$('#blockbot h3').empty().text('Do you know so far the acceptance rate of solutions posted by our contributors has been over 70%?');
});

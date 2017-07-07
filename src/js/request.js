$('#options div:nth-child(1)').on('click',function(){
$('#block').css('display','none');
$('#bemail').css('display','flex');
$('#blockbot h3').empty().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit in, illo sequi accusantium.')
});
$('.second .back .backbut').on('click',function(){
$('#bemail').css('display','none');
$('#block').css('display','flex');
$('#blockbot h3').empty().text('Do you know so far the acceptance rate of solutions posted by our contributors has been over 70%?');
});

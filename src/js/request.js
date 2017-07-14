var x = 0;

//options


$('#options div:nth-child(1)').on('click', function() {
    x = 1;
    $('#block').css('display', 'none');
    $('#bemail').css('display', 'flex');
    $('#blockbot h3').empty().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit in, illo sequi accusantium.')
});
$('#options div:nth-child(2)').on('click', function() {
    x = 2;
    $('#block').css('display', 'none');
    $('#bpage').css('display', 'flex');
    $('#blockbot h3').empty().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptas quidem, quisquam eos expedita earum ipsum')
});
$('#options div:nth-child(3)').on('click', function() {
    x = 3
    $('#block').css('display', 'none');
    $('#bweb').css('display', 'flex');
    $('#blockbot h3').empty().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptas quidem, quisquam eos expedita earum ipsum')
});
$('#options div:nth-child(4)').on('click', function() {
    x = 4;
    $('#block').css('display', 'none');
    $('#bmobile').css('display', 'flex');
    $('#blockbot h3').empty().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptas quidem, quisquam eos expedita earum ipsum')
});
$('#options div:nth-child(5)').on('click', function() {
    x = 5;
    $('#block').css('display', 'none');
    $('#bads').css('display', 'flex');
    $('#blockbot h3').empty().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptas quidem, quisquam eos expedita earum ipsum')
});




//second


$('.second button').on('click', function() {
     if(this.classList[0]=='other'){
      $('.second').css('display','none');
      $('#other').css('display', 'flex');
     }
     else{
    $('.second').css('display', 'none');
    $('#url').css('display', 'flex');
  }
});
$('#url .back .backbut').on('click', function() {
    $('#url').css('display', 'none');

    if (x == 1) {
        $('#bemail').css('display', 'flex');
    } else if (x == 2) {
        $('#bpage').css('display', 'flex');
    } else if (x == 3) {
        $('#bweb').css('display', 'flex');
    } else if (x == 4) {
        $('#bmobile').css('display', 'flex');
    } else if (x == 5) {
        $('#bads').css('display', 'flex');
    }

});

$('.second .back .backbut').on('click', function() {
    if (x == 1) {
        $('#bemail').css('display', 'none');
    } else if (x == 2) {
        $('#bpage').css('display', 'none');
    } else if (x == 3) {
        $('#bweb').css('display', 'none');
    } else if (x == 4) {
        $('#bmobile').css('display', 'none');
    } else if (x == 5) {
        $('#bads').css('display', 'none');
    }


    $('#block').css('display', 'flex');
    $('#blockbot h3').empty().text('Do you know so far the acceptance rate of solutions posted by our contributors has been over 70%?');
});



// email


$('#urlbot #input button').on('click', function() {
  $('#url').css('display', 'none');
  $('#email').css('display', 'flex');
});

$('#email .back .backbut').on('click', function() {
  $('#email').css('display', 'none');
  $('#url').css('display', 'flex');
});

//option
$('#other .back .backbut').on('click', function() {
  $('#other').css('display', 'none');
    if (x == 1) {
        $('#bemail').css('display', 'flex');
    } else if (x == 2) {
        $('#bpage').css('display', 'flex');
    } else if (x == 3) {
        $('#bweb').css('display', 'flex');
    } else if (x == 4) {
        $('#bmobile').css('display', 'flex');
    } else if (x == 5) {
        $('#bads').css('display', 'flex');
    }
});
$('#otherbot button').on('click', function() {
  $('#other').css('display', 'none');
  $('#url').css('display', 'flex');
});
var y=0;
$('#logo div img').on('click',function(){
  $("#nav div:nth-child(1),#nav div:nth-child(2)").toggleClass("show")
  $(this).css({'transform':`rotate(${y+90}deg)`});
  y=y+90;
});

var g = 0;
var i = 0;
var si;
var yes = false;

$(document).ready(function() {

  //$('#greeting').hide();
  $('#invite').hide();
  //$('#response').hide();

  refresh();
  typeWriter("GREETINGS PROFESSOR FALKEN.","#greeting",70);

  $("#player1").get(0).play();
  $("#player1").on("ended", function(){

    refresh();
    $('#invite').show();
    typeWriter("SHALL WE PLAY A GAME? (YES/NO)","#invite",80);

    $("#player2").get(0).play();
    $('span').get(0).focus();
      console.log("focus!");
  });
});

$('html').on('click',function(){
  $('span').get(0).focus();
  console.log("click!");
});


$(document).keypress(function(e){

  if(e.which==13)// || e.which==83)
  {
  var v = $('span').text();
  var l = $('li:last-of-type');
  var t = $('span');

  v = v.replace(/\s/g, '');

  switch(v.toLowerCase()){
    case"nope":
    case"no":
    {
      l.after('<li></li>');
      refresh();
      typeWriter('TOO BAD. WE\'RE PLAYING TRIVIA.<br>OKAY?', $('li:last-of-type'), 70);//typeWriter('LAME.\nLET\'S PLAY TRIVIA. OKAY?', '#no', 70);


      t.empty();
      break;
    }
    case"yeah":
    case"yea":
    case"sure":
    case"okay":
    case"ok":
    case"fine":
    case"yep":
    case"yes":
    {
      yes = true;
      t.empty();

    //  l.after('<li></li>');
      refresh();
      typeWriter('IT\'S TRIVIA TIME!', $('li:last-of-type'), 70);
      //setTimeout(gameTime(), 2000);
      //gameTime();
      //
      // l = $('li:last-of-type');
      // l.after('<li id="countdown"></li>');
      // refresh();
      // typeWriter('3...2...1...', '#countdown', 70);
      // setTimeout(function(){
      //   //window.location.replace("main.html");
      // },4000);//7000);
      break;
    }
    default:
    if(g==0 && v.length>5)
    {
      l.after('<li></li>');
      refresh();
      typeWriter('QUIT FOOLING AROUND, <br> ANSWER YES / NO', $('li:last-of-type'), 70);
      // l.after('<li>QUIT FOOLING AROUND,<br> ANSWER YES / NO');
      t.text('');
    }
    break;
  }
}
});

setInterval(function() {
		$('.blink').toggleClass("blinker");
     var i = 0;
     i++;
   if(i==6)
       clearInterval(b);
	}, 400);


function typeWriter(text, id, speed) {
  var str = "";
    if(i < text.length)
    {
      si = setInterval(function(){
        var c = text.charAt(i);
        if(c == '<')
        {
          str += c;
          do
          {
            i++;
            c = text.charAt(i);
            str += c;
          }while(c != '>');
          $(id).append(str);
          i++;
        }
        $(id).append(text.charAt(i));
        i++;
      },speed);
    }
  }

// function gameTime() {
//   $('li:last-of-type').after('<li id="game"></li>')
//   refresh();
//   typeWriter('IT\'S TRIVIA TIME!', '#game', 70);
// }

function refresh()
{
  clearInterval(si);
  i = 0;
}

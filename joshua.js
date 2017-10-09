var g = 0;
var i = 0;
var si;
var yes = false;

$(document).ready(function() {

  $('#invite').hide();

  $("#player1").get(0).play();
  refresh();

  typeWriter("GREETINGS PROFESSOR FALKEN.","#greeting",70);

 function invite(){
   refresh();
   $('#invite').show();
   typeWriter("SHALL WE PLAY A GAME? (YES/NO)","#invite",80);

   $("#player2").get(0).play();
   $('span').get(0).focus();
     console.log("focus!");
 };

 setTimeout(invite,2300);
});


$('html').on('click',function(){
  $('span').get(0).focus();
  console.log("click!");
});


$(document).keypress(function(e){

  if(e.which==13)
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
      typeWriter('TOO BAD. WE\'RE PLAYING TRIVIA.<br>OKAY?', $('li:last-of-type'), 70);


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

      l.after('<li></li>');
      l = $('li:last-of-type');
      refresh();
      typeWriter('IT\'S TRIVIA TIME!', l, 70);

      setTimeout(function(){
        window.location.replace("main.html");
      },2000);
      break;
    }
    default:
    if(g==0 && v.length>5)
    {
      l.after('<li></li>');
      refresh();
      typeWriter('QUIT FOOLING AROUND, <br> ANSWER YES / NO', $('li:last-of-type'), 70);
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


function refresh()
{
  clearInterval(si);
  i = 0;
}

$(document).ready(function() {
  typeGreeting();

  $("#player1").get(0).play();
  $("#player1").on("ended", function(){
    typeInvite();
    $("#player2").get(0).play();
    $('span').get(0).focus();
      console.log("focus!");
  });
});

$('html').on('click',function(){
  $('span').get(0).focus();
  console.log("click!");
});

var g = 0;
var i = 0;
var j = 0;
var n = 0;
var y = 0;
$(document).keypress(function(e){

  if(e.which==13)// || e.which==83)
  {
  var v = $('span').text();
  var l = $('li:last-of-type');
  var t = $('span');

  console.log("v: ", v);
  console.log("l: ", l);
  console.log("t: ", t);

  //v = v.replace(/\s/g, '');

  switch(v.toLowerCase()){
    case"nope":
    case"no":
    {
      l.after('<li>CAN WE JUST PLAY TRIVIA?</li>');
      l.after('<li>WHY YOU GOTTA BE LIKE THAT?</li>');
      t.empty();
      break;
    }
    case"yeah":
    case"sure":
    case"okay":
    case"fine":
    case"yep":
    case"yes":
    {
      //typeYes();
      l.after('<li>LET\'S PLAY TRIVIA!');
      //g=1;
      t.empty();
      //t.text('');
      //t.text('The only winning move is not to play.\n');
      setTimeout(function(){
        t.text("3");
      },500); //4000);
      setTimeout(function(){
        t.append("...");
      },1000);
      setTimeout(function(){
        t.append("2")
      },2000);//5000);
      setTimeout(function(){
        t.append("...");
      },2500);
      setTimeout(function(){
        t.append("1")
      },3000); //6000);
      setTimeout(function(){
        t.append("...");
      },3500);
      setTimeout(function(){
        window.location.replace("main.html");
      },4000);//7000);
      break;
    }
    default:
    if(g==0 && v.length>9)
    {
      l.after('<li>QUIT FOOLING AROUND,<br> ANSWER YES / NO');
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



function typeGreeting() {
  var speed = 70;
  var text = "GREETINGS PROFESSOR FALKEN.";
  var id = "#greeting";
  if (i < text.length) {
    $(id).append(text.charAt(i));
    i++;
    setTimeout(typeGreeting, speed);
  }
};

function typeInvite() {
  var speed = 80;
  var text = "SHALL WE PLAY A GAME? (YES/NO)";
  var id = "#invite";
  if (j < text.length) {
    $(id).append(text.charAt(j));
    j++;
    setTimeout(typeInvite, speed);
  }
};

// function typeYes() {
//   var speed = 70;
//   var text = "LET\'S PLAY TRIVIA!";
//   var id = "#yes";
//   //$("#yes").show(); //$("#yes").style.display = "block";
//   //set #yes to visible?
//   if (y < text.length) {
//     $(id).append(text.charAt(i));
//     y++;
//     setTimeout(typeYes, speed);
//   }
// };

$(document).ready(function(){

	$("#numberQuestions").keypress(function(e){


		// e.preventDefault();
		if(e.which==13){

		if(isNaN($("#numberQuestions").val()) | $("#numberQuestions").val() > 20 | $("#numberQuestions").val() === "0") {

		}
		else{

		var myurl= "https://opentdb.com/api.php?amount="+$("#numberQuestions").val()+"&difficulty=easy&type=boolean";
		console.log(myurl);
		$.ajax({
		    url : myurl,
		    dataType : "json",
		    success : function(parsed_json) {

			    console.log(parsed_json);

			    var triviaQuestions = [];
			    var triviaAnswers = [];
			    
		    	for(var i = 0; i < parsed_json.results.length; i++)
		    	{

		    		triviaQuestions.push(parsed_json.results[i].question);
		    		triviaAnswers.push(parsed_json.results[i].correct_answer.toLowerCase());
		    		console.log(triviaAnswers[0]);		    		
		    	}


		     	var currentQCounter = 0;
		     	var userTotalScore = 0;

		      	function validateResponse(userInput)
			    {
			    	var tmpUserInput = userInput.toLowerCase();

		      		if(triviaAnswers[currentQCounter] === tmpUserInput)
		      		{
		      			userTotalScore++;
		      			return "Correct!";
		      		}
		      		else
		      		{
		      			return "Wrong Answer..."
			    	}
			    }


		      	setTimeout(function(){

		      		if(e.which==13){
			      		runGame();
			      		
			      		function runGame(){
			      		
							var txtQuestionInput;
							txtQuestionInput = "<div>"
							txtQuestionInput += "<H1> Question: "+triviaQuestions[currentQCounter]+" True or False? </H1>";
							txtQuestionInput += "<br>"
							txtQuestionInput += '<input id="input-answer-field'+currentQCounter+'" type="text" value="">'
							txtQuestionInput += "<br>"
				      		$("#game-container").append(txtQuestionInput);


				      		$("#input-answer-field"+currentQCounter).keypress(function(e){

				      			if (e.which==13)
				      			{
					      			var userResponse = validateResponse($("#input-answer-field"+currentQCounter).val());

					      			var txtQuestionOutput;
					      			txtQuestionOutput = "<div>";
									txtQuestionOutput += "<H1>"+userResponse+"</H1>";
									$("#game-container").append(txtQuestionOutput);

									setTimeout(function(){
										currentQCounter++;

										var tmp = currentQCounter + 1;
										if(tmp > triviaQuestions.length)
										{

											console.log("GAME OVER");

											var txtQuestionEnd;
					      					txtQuestionEnd = "<div>";
											txtQuestionEnd += "<H1>Game over... Total points "+userTotalScore+"</H1>";
											$("#game-container").append(txtQuestionEnd);

											return;
										
										}else{

											console.log("Repeat");

											runGame();

										}
									},1200);

								}

				      		});	

			      		}

		      		}	

		      	},1200);	
		    }
		});
		}
		}
	});

});
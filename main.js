$(document).ready(function(){

	$("#numberQuestions").get(0).focus();

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
							txtQuestionInput += "<p> Question: "+triviaQuestions[currentQCounter]+" (True/False) </p>";
							txtQuestionInput += '<input id="input-answer-field'+currentQCounter+'" type="text" value="">'
							txtQuestionInput += "<br>"
				      		$("#game-container").append(txtQuestionInput);

				      		$("#input-answer-field"+currentQCounter).get(0).focus();

				      		$("#input-answer-field"+currentQCounter).keypress(function(e){

				      			if (e.which==13)
				      			{
					      			var userResponse = validateResponse($("#input-answer-field"+currentQCounter).val());

					      			var txtQuestionOutput;
					      			txtQuestionOutput = "<div>";
									txtQuestionOutput += "<p>"+userResponse+"</p>";
									txtQuestionOutput += "<br>"
									$("#game-container").append(txtQuestionOutput);


									setTimeout(function(){
									currentQCounter++;

									var tmp = currentQCounter + 1;
										if(tmp > triviaQuestions.length)
										{

											var txtQuestionEnd;
					      					txtQuestionEnd = "<div>";
											txtQuestionEnd += "<p>Game over... Total points "+userTotalScore+"</p>";
											$("#game-container").append(txtQuestionEnd);



				      							setTimeout(function(){
													var txtQuestionRestart;
													txtQuestionRestart = "<div>"
													txtQuestionRestart += "<br>"
													txtQuestionRestart += "<p> Restart game? Press Enter</p>";
													txtQuestionRestart += '<input id="input-restart-field" type="text" value="">'
										      		$("#game-container").append(txtQuestionRestart);

										      		$("#input-restart-field").get(0).focus();
															$('html').on('click',function(){
															  $('#input-restart-field').get(0).focus();
															  console.log("click!");
															});
										      		$("#input-restart-field").keypress(function(e){
											      		if (e.which==13)
				      									{

															location.reload();

															return;
														}
													});
												},1500);


										}else{

											console.log("Repeat");

											runGame();

										}
									},800);

								}

				      		});

			      		}

		      		}

		      	},800);
		    }
		});
		}
		}
	});

});

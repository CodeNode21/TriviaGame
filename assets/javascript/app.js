$(document).ready(function(){

	$("#start-button").on("click", trivia.startGame);
	$("#tryAgain").on("click", trivia.startGame);
	$(document).on("click", ".choice-buttons", trivia.guessChecker);
})

var trivia = {
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	currentSet: 0,
	timer: 20,
	timerOn: false,
	timerId: '',
	resultId: '',

questions: {
	q1: "Which US state is named on the label of a Jack Daniels bottle?",
	q2: "Which state is known as the Peach state?",
	q3: "Which is the smallest U.S. state?",
	q4: "What is the tallest mountain in the United States?",
	q5: "Which of the following states does NOT border the Great Lakes?"
},
choices: {
	q1: ["New York", "Alabama", "Tennesse", "Arkansas"],
	q2: ["Florida", "Georgia", "California", "Mississippi"],
	q3: ["Connecticut", "Delaware", "Vermont", "Rhode Island"],
	q4: ["Mount McKinley", "Mount Hood", "Mount Ranier", "Mount Rushmore"],
	q5: ["Ohio", "Michigan", "Iowa", "Illinois"]
},
answers: {
	q1: "Tennesse",
	q2: "Georgia",
	q3: "Rhode Island",
	q4: "Mount McKinley",
	q5: "Illinois"
},
	
startGame: function(){
	trivia.correct = 0;
	trivia.incorrect = 0;
	trivia.unanswered = 0;
	trivia.currentSet = 0;
	clearInterval(trivia.timerId);
	$("#start-button").hide();
	$("p").fadeIn("slow");
	trivia.nextQuestion();
},

nextQuestion: function(){
	trivia.timer = 5;
	$("#timer").text(trivia.timer);
	if(!trivia.timerOn){
		trivia.timerId = setInterval(trivia.timeRunning, 1000);
	};

	var questionContent = Object.values(trivia.questions)[trivia.currentSet];
	$("#questions").html(questionContent);
	var questionOptions = Object.values(trivia.choices)[trivia.currentSet];
	var questionAnswer = Object.values(trivia.answers)[trivia.currentSet]
	$.each(questionOptions, function(index, key){
		$("#choices").append($("<button class='choice-buttons'>"+key+"</button>"));
	});
	trivia.timeRunning();
},
timeRunning: function(){
		if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
		$("#timer").text(trivia.timer);
		trivia.timer--;
	}else if(trivia.timer === -1){
		trivia.unanswered++;
		trivia.result = false;
		clearInterval(trivia.timerId);
		resultId = setTimeout(trivia.triviaResult, 1000);
		console.log(trivia.currentSet);
	}else if(trivia.currentSet === Object.keys(trivia.questions).length){
		trivia.timer = !trivia.timerOn;
		$("#results").html("<h3>Correct: "+trivia.correct + "</h3>" + "<h3>Incorrect: "+trivia.incorrect +"</h3>"+ "<h3>Unanswered: "+ trivia.unanswered + "<button id='tryAgain'> Try Again</button>");
		console.log(trivia.timer);
		console.log(trivia.timerOn);
	}
},
guessChecker: function(){
	var resultId;
	var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
	if($(this).text() === currentAnswer){
		trivia.correct++;
		clearInterval(trivia.timerId);
		resultId = setTimeout(trivia.triviaResult, 1000);
		console.log("Correct!");
	}else {
		trivia.incorrect++;
		clearInterval(trivia.timerId);
		resultId = setTimeout(trivia.triviaResult, 1000);
		console.log("Incorrect!");
	};
	$("#choices").empty();
	console.log(currentAnswer);
},
triviaResult: function(){
	trivia.currentSet++;
	$("#choices").empty();
	$("#results h3").empty();
	trivia.nextQuestion();
},

};

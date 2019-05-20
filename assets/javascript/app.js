//press start to start the trivia
//user answers questions before timer runs down
//user can only choose one answer
//at end of game correct and incorrect answers are displayed
//start over option available
//questions have 4 choices, 1 correct answer

var correct = 0;
var incorrect = 0;

var trivia = {
questions: {
	q1: "Which US state is named on the label of a Jack Daniels bottle?",
	q2: "Which state is known as the Peach state?"
	q3: "What is the smallest U.S. state?"
	q4: "What is the tallest mountain in the United States?"
	q5: "Which of the following states does NOT border the Great Lakes?"
},
choices: {
	q1: ["New York", "Alabama", "Tennesse", "Arkansas"],
	q2: ["Florida", "Georgia", "California", "Mississippi"],
	q3: ["Connecticut", "Delaware", "Vermont", "Rhode Island"],
	q4: ["Mount McKinley", "Mount Hood", "Mount Ranier", "Mount Rushmore"],
	q5: ["Ohio", "Michigan", "Iowa", "Illinois"],
},
answers: {
	q1: "Tennesse",
	q2: "Georgia",
	q3: "Rhode Island",
	q4: "Mount McKinley",
	q5: "Illinois"
}
},

function startGame(){
	

function timer()

function resetGame()


// press start (
// timer starts running
// question 1 and choices diplayed
// listen for correct choice or timer running out
// register result, move on to next question
// question 2 and choices displayed
// listen for correct choice or timer running out
// register result, move on to next question
var readlineSync = require("readline-sync");

var score  = 0;

function welcomeUser () {
	var userName = readlineSync.question("What is your name? ");
	console.log("\nWelcome " + userName + " to HOW WELL DO YOU KNOW The Office? \n");
}

var highScores = [
	{
		name: "Tanay",
		score: 4
	}, 
	{
		name: "Ayush",
		score: 6
	}
]

var questions = [
	{
		question: "Where does Michael Scott move to start his new life with Holly? ",
		answer: "Boulder, Colorado"
	},
	{
		question: "Who was Pam engaged to before Jim? ",
		answer: "Roy"
	},
	{
		question: "What was the name of Jan Levinson's assistant at corporate? ",
		answer: "Hunter"
	},
	{
		question: "How many minutes did Michael Scott work at the office? ",
		answer: "9986000"
	},
	{
		question: "Who won \"Hottest in the Office\" at Michael\'s last Dundies? ",
		answer: "Danny Cordray"
	},
	{
		question: "What was the name of Stanley Hudson's mistress? ",
		answer: "Cynthia"
	},
	{
		question: "Schrute boys must learn how many rules before the age of 5? ",
		answer: "40"
	},
	{
		question: "What is the title of Michael\'s movie? ",
		answer: "Threat Level Midnight"
	},
	{
		question: "What is the name of Kevin Malone\’s band? ",
		answer: "Scrantonicity"
	}
]

function funQuiz (question, answer) {
	var userAnswer = readlineSync.question(question);
	
	if (userAnswer.toLowerCase() === answer.toLowerCase()) {
		console.log("Correct Answer!");
		score++;
	} else {
		console.log("Wrong Answer!");
		console.log("Correct Answer is: " + answer);
	}

	console.log("Current Score is: " + score);
	console.log();
	console.log("-----------------------------------");
	console.log();
}

function askQuestions () {
	for (var i = 0; i < questions.length; i++) {
		funQuiz (questions[i].question, questions[i].answer);
	}
}

function displayScore() {
	if (score < 1) {
		console.log("Your final score is " + score + ". You need to watch The Office again it seems XD.");
	} else {
		console.log("Hurrah!! You have scored : " + score + ". You know The Office pretty well!!");
	}

	console.log();
	
	console.log("Check out the high scores, if you should be there ping me and I'll update it!");
	
	console.log();
	
  	highScores.map(score => console.log(score.name, " : ", score.score));
}

welcomeUser();
askQuestions();
displayScore();
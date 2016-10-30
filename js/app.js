$(document).ready(function(){

	// On page load, hide quiz section and result section
	$('.quiz-section').hide();
	$('.result-section').hide();

	// Quiz Questions
	var questions = [
	
		// Question 1
			{
				question: 'What are directives responsible for doing in Angularjs views',
				options: ['Data Binding', 'DOM Manipulation', 'Handling Events',' Manipulating CSS','All of the Above','None of the Above' ],
				answer: 4
			},

		// Question 2
			{
				question: 'What AngularJS property can be used to avoid script minification issues with parameters that are injected into a controller?',
				options: ['$minify', '$inject', '$watch', '$scope'],
				answer: 1
			},

		// Question 3
			{
				question: "which object is used to configure routes in an AngularJS application?",
				options: ['$scopeRouter', '$router', '$routeProvider', '$routeDefinition'],
				answer: 2
			},

		// Question 4
			{
				question: "Why would you create a factory or service in an AngularJS application",
				options: ['To perform data binding', 'To promote re-use across the application', 'To define controllers', 'To create directives'],
				answer: 1
			},

		// Question 5
			{
				question: 'What is the difference between a factory and a service in AngualrJS?',
				options: ['A factory uses the "this" key word while a service returns a custom object', 'A factory handles data binding while a service handles Ajax calls', 'A factory returns a cusstom object while a service uses the "this" keyword', 'All of the above','None of the above'],
				answer: 2
			},

		// Question 6
			{
				question: 'Animation functionality is built-into the core angular.js script?',
				options: ['True', 'False'],
				answer: 1
			},

		// Question 7
			{
				question: "Which AngularJS object can be used to call a RESTful service?",
				options: ['$xhr', '$.gerJSON', '$ajax', '$http'],
				answer: 3
			},

		// Question 8
			{
				question: "How do you associate an animation with a directive in AngularJS application?",
				options: ['Use the ng- animate directive', 'Add an animation value into the application settings', 'Define a new element', 'Add a CSS class'],
				answer: 3
			},	

		// Question 9
			{
				question: 'which AngularJS module must be referenced by your module when you want to add animation functionality?',
				options: ['ngRoute', 'ngAnimation', 'ngAnimate', 'ngkeyFrame'],
				answer: 2
			},

		// Question 10
			{
				question: 'Which components can ve injected as dependency in angularJS?',
				options: ['value', 'factory', 'service', 'All the above'],
				answer: 3
			},
	];

	// Variables
	var questionNum = 0;
	var questionTotal = questions.length;
	var correctAnswerTotal = 0;

	$('#startQuiz').on('click', function(){
		$('.intro-section').hide();
		$('.result-section').hide();
		$('.quiz-section').show();
		displayQuestion();
	});

	$('#submit-answer').on('click', function() {
		var userAnswer = $('input[id="choices"]:checked').val();
		console.log(userAnswer);
		var correctAnswer = questions[questionNum].answer;
		// Function to calculate total number of correct answers(score)
		if (typeof userAnswer != 'undefined') {
			if (userAnswer == correctAnswer) {
				correctAnswerTotal++;	
			}
			// Function to check if last question is being attempted
			if ((questionNum+1) == questionTotal) {
				$('.result-section').show();
				$('#show-score').text('Your score is ' + correctAnswerTotal + ' out of ' + questionTotal + '.');
				$('#startQuiz').show();
				$('.quiz-section').hide();
				$('.intro-section').hide();
			} else {
				questionNum++;
				displayQuestion();
			}
		} else {
			alert("Please choose an option!");
			return false;
		}
	});

	// Function to display quiz questions
	function displayQuestion() {
		$('#question-num').text('Question ' + (questionNum+1) + ' of ' + questionTotal);
		$('#question').text(questions[questionNum].question);
		$('.quiz-options').empty();
		var optionsTotal = questions[questionNum].options.length;
		for (var i = 0; i < optionsTotal; i++) {
			$('.quiz-options').append('<input type="radio" id="choices" class="choices" name="choices" value=' + i + '>' + questions[questionNum].options[i] + '<br>');
		}
	}

	// Function to navigate back from the result screen to intro screen
	$('.result-section').on('click', '#startQuiz', function(){
		$('.intro-section').show();
		$('.quiz-section').hide();
		$('.result-section').hide();
		questionNum = 0;
		correctAnswerTotal = 0;
	});
});


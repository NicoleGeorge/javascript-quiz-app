var score = 0; // set score to 0
var total = 5; //Total number of questions
var point = 2; //Points per correct answer
var highest = total * point;

//initialiser function

function init() {
    //setting correct answers - using session storage API 
    // syncing up the answers to each question
    sessionStorage.setItem('a1', 'd');
    sessionStorage.setItem('a2', 'c'); 
    sessionStorage.setItem('a3', 'b');
    sessionStorage.setItem('a4', 'c');
    sessionStorage.setItem('a5', 'c');
}

$(document).ready(function() {
    // Hiding all questions//
    $('.questionForm').hide();

    // Intro Section first 
    $('.intro').show();
    $('#play').click(function(){
    
    // show first Qu. when button is clicked
        $('#q1').show();
    // hide intro section when button is clicked
        $('.intro').hide();
    });


    // optimising the code - creating a universal click handler to process each question/answer

    $('.questionForm #submit').click(function() {
       // Get data attributes
        var current = $(this).parents('form:first').data('question');
        var next = $(this).parents('form:first').data('question') + 1;
       //  hide all questions
        $('.questionForm').hide();
       // show next question
       $('#q' + next + '').show();
        process('' + current + '');
        return false;
    }); 

});

// Processing the answers: compare the submitted answers against the correct answers

function process(n) {
    // get input value
    var submitted = $('input[name = q' + n +']:checked').val();
    if (submitted == sessionStorage.getItem('a' + n + '')) {
        score = score + point;
    }

    if (n == total) {
        $('#results').html('<h3>Your Final Score is ' + score + 
      ' out of ' + highest + '</h3><a href = "index.html">Take Quiz Again</a>')
        if (score == highest) {
            $('#results').append('<p>You are a Javascript Master!</p>');
        }
        else if (score = highest - point || score == highest - point - point){
            $('#results').append('<p>Good Job!</p>');
        }
        else if (score <= 2) {
            $('#results').append('<p>get practicing!</p>');
        }
    }

    return false;
}

//  TIMER FUNCTION



// Add an event listener 

window.addEventListener('load', init, false);
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

    // starting timer when Let's Play button clicked
    $('#play').click(function(){
        countdown();
    })

    //stop timer when Results are shown
    $('#results').show(function(){
        $('#timer').stop();
    })





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

    //  TIMER FUNCTION

        var timer = 10;
        var url = 'index.html';

        function countdown () {
            setTimeout(countdown, 1000);
            $('#timer').html('You have ' + timer + ' seconds left.');
            timer --;

            if (timer < 0) {
                clearTimeout(countdown);
                window.location = url;
                timer = 0;
            }
                
        } 

    // countdown();

          //countdown(); //working - but need to stop it from going into the -ves.
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
        else if (score == highest - point || score == highest - point - point) {
            $('#results').append('<p>Good Job!</p>');
        } 
        else if (score != highest) {
            $('#results').append('<p>Keep practicing</p>');
        } 
           
    }

    return false;
}





// Add an event listener 

window.addEventListener('load', init, false);
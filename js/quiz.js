var score = 0; // set score to 0
var total = 5; //Total number of questions
var point = 1; //Points per correct answer
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

    // Show first question
    $('#q1').show();


    // optimising the code - creating a universal click handler to process each question/answer

    $('.questionForm #submit').click(function() {
       // Get data attributes
        var current = $(this).parents('form:first').data('question');
        var next = $(this).parents('form:first').data('question') + 1;
       //  hide all questions
        $('.questionForm').hide();
       // show next question
       $('#q' + next + ' ').show();
        process(' ' + current + ' ');
        return false;
    });

//     $('#q1 #submit').click(function(){
//         $('.questionForm').hide();
//         process('q1');
//         $('#q2').show();
//         return false;
//     })

//     $('#q2 #submit').click(function(){
//         $('.questionForm').hide();
//         process('q2');
//         $('#q3').show();
//         return false;
//     })

//     $('#q3 #submit').click(function(){
//         $('.questionForm').hide();
//         process('q3');
//         $('#q4').show();
//         return false;
//     })

//     $('#q4 #submit').click(function(){
//         $('.questionForm').hide();
//         process('q4');
//         $('#q5').show();
//         return false;
//     })

//     $('#q5 #submit').click(function(){
//         $('.questionForm').hide();
//         process('q5');
//         $('#results').show();
//         return false;
//     })

// });

// Processing the answers: compare the submitted answers against the correct answers

function process(q) {
    if(q == 'q1') {
        var submitted = $('input[name = q1]:checked').val();
        if (submitted == sessionStorage.a1) {
            score++; // incrementing the score if the correct answer is submitted
        }
    }
    // repeating the process for all quetions
    if(q == 'q2') {
        var submitted = $('input[name = q2]:checked').val();
        if (submitted == sessionStorage.a2) {
            score++ ;
        }
    }
    if(q == 'q3') {
        var submitted = $('input[name = q3]:checked').val();
        if (submitted == sessionStorage.a3) {
            score++; 
        }
    }
    if(q == 'q4') {
        var submitted = $('input[name = q4]:checked').val();
        if (submitted == sessionStorage.a4) {
            score++;
        }
    }
    if(q == 'q5') {
        var submitted = $('input[name = q5]:checked').val();
        if (submitted == sessionStorage.a5) {
            score++; 
        }
        $('#results').html('<h3>Your Final Score is ' + score + 
        ' out of 5.</h3><a href = "index.html">Take Quiz Again</a>')
    }
    return false;
}

// Add an event listener 

window.addEventListener('load', init, false);})
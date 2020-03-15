var score = 0; // set score to 0
var total = 5; //Total number of questions
var point = 1; //Points per correct answer
var highest = total * point;

//initialiser function

function init() {
    //setting correct answers - using session storage API 
    // syncing up the answers to each question
    sessionStorage.setItem('a2', 'c');
    sessionStorage.setItem('a1', 'd'); 
    sessionStorage.setItem('a3', 'd');
    sessionStorage.setItem('a4', 'c');
    sessionStorage.setItem('a5', 'c');
}

$(document).ready(function() {
    // Hiding all questions//
    $('.questionForm').hide();

    // Show first question
    $('#q1').show();

    $('#q1 #submit').click(function(){
        $('.questionForm').hide();
        $('#q2').show();
        return false;
    })

    $('#q2 #submit').click(function(){
        $('.questionForm').hide();
        $('#q3').show();
        return false;
    })

    $('#q3 #submit').click(function(){
        $('.questionForm').hide();
        $('#q4').show();
        return false;
    })

    $('#q4 #submit').click(function(){
        $('.questionForm').hide();
        $('#q5').show();
        return false;
    })

    $('#q5 #submit').click(function(){
        $('.questionForm').hide();
        $('#results').show();
        return false;
    })

});

// Add an event listener to compare the submitted answers against the correct answers

window.addEventListener('load', init, false);

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


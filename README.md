wk4 Homework Project- Javascript Quiz App

Brief:

> Create a timed quiz about JavaScript fundamentals.
> Users must have the ability to store their high scores.
> The app must run in the browser, featuring dynamically updated HTML and CSS powered by JavaScript.
> It must have a clean and polished UI, be responsive, ensuring it adapts to multiple screen sizes.

Process:

> created the HTML skeleton first - using Bootstrap
> selected the questions and corresponding answers
> added the styles.css stylesheet
> tweaked the look of the UI first
> mobile responsiveness was then added to fulfil the brief requirement
> JQuery was implemented to reveal one question at a time first
> then correct answers where initialized using sessionStorage
> the process function was created to validate the answers when submit button was clicked
> comments were then added depending on the user's current score based off the process function
> The code was optimised by creating a universal click handler to process each question/answer
> user's score was displayed on the final qus/ans portion of the quiz
> I then gave the user the opportunity to retake the quiz
> the timer was implemented - starting once the user opted in by clicking the 'Let's play' button
> once the timer reaches 0, irrespective of whether the user has completed the quiz or not, it redirects to the final input page.
> this was created using JQuery - much the same as the code for showing each question at a time.
> saving the user's details & score in local storage was the final stage of the Javascript code process - done by creating the currentScore js object 
>  

Timer Rationale:

> the timer was designed to keep counting down until it reached 0, even if the user completed the quiz before it stopped
> this was to give the user the chance to review their score, decide if they were happy with their attempt, if not, they are given the opportunity to retake the quiz
> this is only possible, so long as the timer is still counting down

Final Page Redirect:
> I designed the final page with the user in mind - wanting to enhance the UX of the quiz by making it more user friendly & valuable by enabling the user to store their details in local storage.
> to enhance the UI, I added text explaining why they should enter their details, a little bit of encouragement, and also displayed the user's again to make it easier when saving.
> a time stamp was added to the currentScore js object so the user can track their progress accurately. 


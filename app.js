const submitBtn = document.querySelector('.submit-btn');
const restartBtn = document.querySelector('.restart-btn');
const gameOver = document.querySelector('.game-over');
const gameOn = document.querySelector('.game-on');
const resultCommentDisplay =  document.querySelector('.compliment');

let remainingGuesses = 8;

let remainingGuessesDisplay = document.querySelector('.remaining-guesses');
let previousGuessesDisplay = document.querySelector('.previous-guesses');
let guessComment = document.querySelector('.guess-comment');
let Input = document.querySelector('#input-number');

let secretNumber = Math.floor(Math.random()*20)+1;

remainingGuessesDisplay.textContent = ` ${remainingGuesses}`;

//Displaying the guess comment & setting the color
let displayGuessComment = function(message, color){
    guessComment.textContent = message;
    guessComment.style.color = color;
}

//Displaying the remaining guesses

let displayRemainingGuesses = function(){
    remainingGuessesDisplay.textContent = ` ${remainingGuesses}`;
}

//Display previous guesses


submitBtn.addEventListener('click', () =>{
    let userInput = Number(Input.value);
    let userGuesses = [];

    let displayPreviousGuess = function(){
        previousGuessesDisplay.textContent += `${userInput} `;
    }

    if(!userInput){
       displayGuessComment("Enter a number!", "red")
       displayRemainingGuesses();
    }else if(userInput <= 0){
        displayGuessComment("Guess invalid! Number out of range", "red")
        displayRemainingGuesses();
    }else if(userInput > 20){
        displayGuessComment("Guess invalid! Number out of range", "red");
        displayRemainingGuesses();
    }else if(userInput === secretNumber ){
        displayGuessComment("You got it right!", "blue")
        displayPreviousGuess();
        displayRemainingGuesses();
        gameOver.classList.add('active');
        gameOn.classList.add('off');

    }else if(userInput > secretNumber){
        displayGuessComment("Too High!", "red")
        displayPreviousGuess();
        remainingGuesses--;
        displayRemainingGuesses();
        if(remainingGuesses < 1){
            gameOver.classList.add('active');
            gameOn.classList.add('off');
        }
    }else if(userInput < secretNumber){
       displayGuessComment("Too Low!", "red");
       displayPreviousGuess();
        remainingGuesses--;
        displayRemainingGuesses();

        if(remainingGuesses < 1){
            gameOver.classList.add('active');
            gameOn.classList.add('off');

          resultCommentDisplay.innerHTML = 'Oops! Try again';
          document.querySelector('.result').innerHTML = `The Secret number was  ${secretNumber}`

        }
        
    }
    
    Input.value = " ";
})


//restart game

restartBtn.addEventListener('click', () =>{
    window.location.reload();
})

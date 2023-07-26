'use strict';

let randomNumber = Math.trunc(Math.random() * 21)

let changesLeft = 20;


// User playing game click button
document.querySelector('.check').addEventListener('click', () => {
    let userInputValue = document.querySelector('.guess').value;
    console.log(changesLeft)
    if(changesLeft < 1) {
        document.querySelector('.message').textContent = "You lost😥";
        document.body.style.backgroundColor = "red"
    }
    else if(userInputValue == randomNumber) {
        console.log("You won");
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.message').textContent = "You won🥇";
        document.body.style.backgroundColor = "green"
        document.querySelector('.highscore').textContent = changesLeft;
    }else if(userInputValue < randomNumber){
        console.log("Too low")
        --changesLeft
        document.querySelector('.score').textContent = changesLeft;
        document.querySelector('.message').textContent = "Too low";

    }else{
        console.log("Too high");
        // changesLeft--;
        --changesLeft
        document.querySelector('.score').textContent = changesLeft;
        document.querySelector('.message').textContent = "Too high";
    }
})


// Restart game code

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('.score').textContent = 20
    document.body.style.backgroundColor = "#222";
    changesLeft = 20;
    randomNumber = Math.trunc(Math.random() * 21)
    document.querySelector('.check').value = ''
    document.querySelector('.number').textContent = '?'

})
window.addEventListener('load', init);
//Global 
let time = 5;
let score = 0;
let isPlaying;


//DOM selection
const seconds = document.getElementById('seconds');
const currentWord = document.getElementById('current-word');
const wordInput= document.getElementById('word-input');
const message = document.getElementById('message');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');
const highScore = document.getElementById('highscore');


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

//Initial Game
function init(){
    //Load Word from array
    showWord(words);
    //Call coundtwon every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
}

//Pick & show words
function showWord(words){
    //Display the score
    scoreDisplay.innerHTML = score;
    //Start matching on word input
    wordInput.addEventListener('input', startMatch)
    //Generate random index
    const randomIndex = Math.floor(Math.random() * words.length);
    //display random word
    currentWord.innerHTML = words[randomIndex];
}

//Start match
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = 6;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //if score is -1
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else{
        scoreDisplay.innerHTML = score;
    }

}

//Match Currentword to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct !!';
        return true;
    } else{
        message.innerHTML = '';
        return false;
    }
 }

//Countdown Timer
function countdown(){
    //Make sure time is out
    if(time > 0){
        time--;
    }else if( time === 0){
        //Game is over
        isPlaying = false;
    }

    //Show Dispaly Time
    timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over !!!';
        score = -1;
    }
}
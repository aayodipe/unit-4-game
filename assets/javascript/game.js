// html variables
const randomNumbers = document.querySelector("#randomNumber");
const totalScores = document.querySelector("#total-score");
const wins = document.querySelector("#win");
const losses = document.querySelector("#loss");

                //global variables
//holds the randomNum
let randomNum= 0;
//holdds the totalscore
let totalScore=0
//holds the win
let win=0;
//holds the loss
let loss=0;

//check if the game as started
let startGame = false
//updating the hmtl
totalScores.textContent = totalScore;
wins.textContent = win;
losses.textContent = loss;

//generate 4 other random number
let myArray = []
for (var i = 0; i < 4 ; i++){
   let numbers =Math.floor(Math.random()*15)+1;   
   myArray.push(numbers);
      console.log(myArray)
}
  
// store the number in different variables
let star1 = Number(myArray[0]);
let star2 = Number(myArray[1]);
let star3 = Number(myArray[2]);
let star4 = Number(myArray[3]);

//attached each of the image to each of the variable
$("#star1").on("click",function(){
     if(startGame===false){
          totalScore +=star1
          totalScores.textContent = totalScore;
          console.log(star1)
          console.log(totalScore)
     }
})

$("#star2").on("click",function(){
     if(startGame===false){
          totalScore +=star2
          totalScores.textContent = totalScore;
          console.log(star2)
          console.log(totalScore)
     }
})
$("#star3").on("click",function(){
     if(startGame===false){
          totalScore +=star3
          totalScores.textContent = totalScore;
          console.log(star3)
          console.log(totalScore)
     }
})
$("#star4").on("click",function(){
     if(startGame===false){
          totalScore +=star4
          totalScores.textContent = totalScore;
          console.log(star4)
          console.log(totalScore)
     }
})
//click an image to append the score in the variable attached to it to the total score
//if the total score is equal to the random number, the increment the win by 1 
//if the total number is more than the random number decrement the loss
function random(){
     // generate a general random number between 50-100
     randomNum = Math.floor((Math.random()*20)+80)
     randomNumbers.textContent = randomNum;
     console.log(randomNum)
     }

function reset (){
     randomNum= 0;
     
     totalScore=0
     
     win=0;
     
     loss=0;
     randomNumbers.textContent = "";
     totalScores.textContent = 0;
     wins.textContent = 0;
     losses.textContent = 0;
     }
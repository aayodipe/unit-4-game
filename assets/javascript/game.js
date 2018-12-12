// html variables
const randomNumbers = document.querySelector("#randomNumber");
const totalScores = document.querySelector("#total-score");
const wins = document.querySelector("#win");
const losses = document.querySelector("#loss");

//global variables
let randomNum, totalScore, win, loss, myArray,isStartplaying,star1, star2,star3,star4
// set variable total, win and loss to zero
win = 0;
loss = 0
totalScore= 0;

myArray = []////Array to hold four different random number generated

function random(){
     // generate a general random number between 50-100
     randomNum = Math.floor((Math.random()*30)+70)
     $(randomNumbers).text(randomNum);
     console.log(randomNum)
    
} random()
//This part generates the random numbers for the crystal
//loop over the random number four time
for (var i = 0; i < 4 ; i++){
     // generate random number
    let numbers =(Number(Math.floor(Math.random()*12)+1));  
   // push random number to array  
    myArray.push(numbers);
   // test
       console.log(myArray)
 }
 
 // store the number in different variables
 
//attached each of the image to each of the variable
 star1 = Number(myArray[0]);
 star2 = Number(myArray[1]);
 star3 = Number(myArray[2]);
 star4 = Number(myArray[3]);
 

//the image adds the random number to the total score
function playGame(){
  
$("#star1").on("click",function(){    
          totalScore +=star1
          $(totalScores).text(totalScore);
          console.log(star1)
          compareScore()
          
  })

$("#star2").on("click",function(){     
          totalScore +=star2
          $(totalScores).text(totalScore);
          console.log(star2)
          compareScore()
         
  })
$("#star3").on("click",function(){   
          totalScore +=star3
          $(totalScores).text(totalScore);
          console.log(star3)
          compareScore()
         
  })
$("#star4").on("click",function(){   
          totalScore +=star4
          $(totalScores).text(totalScore);
          console.log(star4)
          compareScore()
        
  })
  compareScore()
 }playGame()


//if the total score is equal to the random number, the increment the win by 1 
function compareScore(){
    

    
    // compare random number and totalsccore
     if(randomNum === totalScore){
            win++// increment win
       $(wins).text(win);// output winning score
          console.log(win)
          totalScore = 0
          
     }
     else if (randomNum < totalScore){
          loss++//increment loss
          $(losses).text(loss);// output lossing score
          console.log(loss) 
          totalScore = 0
          
     }
}


//if the total number is more than the random number decrement the loss

     


 
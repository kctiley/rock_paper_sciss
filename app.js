var playGame = function (){
    var aiScore = 0;
    var userScore = 0;
    var throwAI = '';
    var throwUser = '';
    var score = function(){
        console.log("Score ....AI: " + aiScore + "      User" + userScore)
    }
   
    var playAI = function(){
        var handAI = ["rock", "paper", "scissors"];
        throwAI =  handAI[Math.floor(Math.random()*3)];       
        console.log("AI threw:  " + throwAI + "   ");       
    }

    var playUser = function(){
        throwUser = prompt("Choose one: rock, paper, or scissors");
        console.log("User played:  " + throwUser + "   ");
    }
    
    //play one round
    var playRound = function(aiScore2, userScore2){
        aiScore = aiScore2 || aiScore;
        userScore = userScore2 || userScore;

        var checkForTie = function(){    
            if (throwAI == throwUser){
                console.log("tie!");        
            }
            else {
                console.log("not... a tie.");
                console.log("AI played " + throwAI + " " + ".................User played " + throwUser);
            }    
        }

        var scoreRound = function(){        
            if (throwAI == throwUser){
                console.log("No score change.");        
            }
            else {
                if (throwAI == "rock" && throwUser !== "paper"){
                    console.log("AI wins round!");
                    aiScore += 1;
                }
                else if (throwAI == "scissors" && throwUser !== "rock"){
                    console.log("AI wins round!");
                    aiScore += 1;
                }
                else if (throwAI == "paper" && throwUser !== "scissors"){
                    console.log("AI wins round!");
                    aiScore += 1;
                }
                else {console.log("User wins round!");
                    userScore += 1; 
                }
            } 
        }

        playAI();
        playUser();
        checkForTie();
        scoreRound();
        score();

//             //determine if play another round 
//         if (userScore >= 3 || aiScore >= 3){
//             var winner = aiScore > userScore ? "AI" : "User";
//             console.log("Game Over ....." + winner)
//         }
//         else
//             return playRound(aiScore, userScore);

     }
     playRound()
 }


playGame();
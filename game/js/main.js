
let playGame = confirm("Shall we play rock papper scisscors?");

if (playGame){
    //play
    let playerChoice = prompt("Rock, paper or scisscors?");

    if (playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();

        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors'){

            computerChoice = Math.floor(Math.random() * 3) + 1;
            let computer = null
            
            if (computerChoice === 1){
                computer = 'rock'
            }
            else if (computerChoice == 2){
                computer = 'paper'
            }
            else{
                computer = 'scissors'
            }

            let result = 
                playerOne === computer
                ? "Tie game!"
                : playerOne === "rock" && computer === "paper"
                ? `Player One: ${playerOne} \nComputer: ${computer} \nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `Player One: ${playerOne} \nComputer: ${computer} \nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `Player One: ${playerOne} \nComputer: ${computer} \nComputer wins!`
                : `Player One: ${playerOne} \nComputer: ${computer} \nPlayer One wins!`;
            
            alert(result);
            let playAgain = confirm('Play Again')

            if(playAgain){
                location.reload() 
            }
            else{
                alert('bye')
            }

        }
        else{
            alert("not a vaild choice");
        }

    }else{
        alert("ig your mind maybe next time");
    }

}
else{
    alert("okay, maybe next time")
}
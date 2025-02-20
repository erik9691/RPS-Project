function getComputerChoice()
{
    const choice = Math.random();
    let res;

    if (choice < 1/3)
    {
        res = "rock";
    }
    else if (choice > 1/3 && choice < 2/3)
    {
        res = "paper";
    }
    else
    {
        res = "scissors"
    }

    return res;
}

function getHumanChoice() 
{
    let choice = prompt("rock, paper or scissors?: ").toLowerCase();
    console.log(choice);   

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") 
    {
        choice = prompt("ERROR input has to be rock, paper or scissors: ").toLowerCase();
        console.log(choice);
    }

    return choice;
}

function playRound(humanChoice)
{
    const computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors")
    {
        winMessage.innerText = ("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        winMessage.innerText = ("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        winMessage.innerText = ("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }

    else if (humanChoice === "rock" && computerChoice === "rock")
    {
        winMessage.innerText = ("Tie! " + humanChoice + " is the same as " + computerChoice);
    }
    else if (humanChoice === "paper" && computerChoice === "paper")
    {
        winMessage.innerText = ("Tie! " + humanChoice + " is the same as " + computerChoice);
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors")
    {
        winMessage.innerText = ("Tie! " + humanChoice + " is the same as " + computerChoice);
    }

    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        winMessage.innerText = ("You lose! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        winMessage.innerText = ("You lose! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        winMessage.innerText = ("You lose! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
    }

    if (humanScore >= 5)
    {
        winMessage.innerText = "Congrats! you won the game!";
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore >= 5)
    {
        winMessage.innerText = "Aww.. you lost the game :(";
        humanScore = 0;
        computerScore = 0;
    }
    humanScoreHTML.innerText = humanScore;
    computerScoreHTML.innerText = computerScore;
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const humanScoreHTML = document.querySelector(".humanScore");
const computerScoreHTML = document.querySelector(".computerScore");
const winMessage = document.querySelector(".winMessage");

buttons.forEach((button) =>
{
    button.addEventListener("click", function (e)
    {
        playRound(e.target.className);
    });
});
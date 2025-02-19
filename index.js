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

    console.log(res);

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

function playRound()
{
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors")
    {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }

    else if (humanChoice === "rock" && computerChoice === "rock")
    {
        console.log("Tie! " + humanChoice + " is the same as " + computerChoice);
    }
    else if (humanChoice === "paper" && computerChoice === "paper")
    {
        console.log("Tie! " + humanChoice + " is the same as " + computerChoice);
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors")
    {
        console.log("Tie! " + humanChoice + " is the same as " + computerChoice);
    }

    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        console.log("You lose! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        console.log("You lose! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        console.log("You lose! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
    }
}

let humanScore = 0;
let computerScore = 0;

playRound();
console.log(humanScore);
console.log(computerScore);
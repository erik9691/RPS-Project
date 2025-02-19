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
    }

    return choice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
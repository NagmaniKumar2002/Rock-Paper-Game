
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");
let usercnt=0;
let compcnt=0;
const msg=document.querySelector(".msg");

const drawGame = () => {
    console.log("game was draw");
};

const showWiner = (userWin) => {
    if (userWin) {
        usercnt++;
        console.log("you win");
        msg.innerText = "you win";
       userscore.innerText=usercnt;
    } else {
        compcnt++;
        console.log("you lose");
        msg.innerText = "computer win";
        compscore.innerText=compcnt;
    }
};

const choices = document.querySelectorAll(".choice");

const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    const computerChoice = compchoice();
    console.log("computer choice is=", computerChoice);
    if (userChoice == computerChoice) {
        drawGame();
        msg.innerText = "Oops Draw";
    } else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = computerChoice === "papper" ? false : true;
        } else if (userChoice == "papper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWiner(userWin);
    }
};

const compchoice = () => {
    const option = ["rock", "papper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return option[index];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

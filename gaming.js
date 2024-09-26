let userScore = 0;
let compScore = 0;


let btn_choice = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");



 const generatecompChoice = () => {
    let option = ["rock","paper","scissor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
 }
const showWinner = (userWin ,userChoice,compChoice) => {
    if(userWin){
        
       msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
       msg.style.color = "white";
    }else{
        msg.innerText = `you loss! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const playGame = (userChoice) => {
   
    const compChoice = generatecompChoice();
  
   
    if(userChoice === compChoice){
       msg.innerText = "game was draw !play again";
       msg.style.backgroundColor = "gray";
       msg.style.color = "white";

    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor";
        }
        else {
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

btn_choice.forEach((choice) => {
    choice.addEventListener("click",( ) => {
        const userChoice = choice.getAttribute("id");
 
 
 playGame(userChoice);
    });
});
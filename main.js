// MATH GAMES

const input = require("prompt-sync")();

// function to create random questions
function createRandomQuestions() {
   
   let a = Math.floor(Math.random() * 9999);
   let b = Math.floor(Math.random() * 9999);
   let operators = ["*", "/", "+", "-"];
   
   let selectedOperator = operators[Math.floor(Math.random() * operators.length)];
   
   switch (selectedOperator) {
      case "*":
         return {
            question: `${a} * ${b} = ?`,
            answer: a * b
         }
      break;
      case "/":
         return {
            question: `${a} / ${b} = ?`,
            answer: a / b
         }
      break;
      case "+":
         return {
            question: `${a} + ${b} = ?`,
            answer: a + b
         }
      break;
      case "-":
         return {
            question: `${a} - ${b} = ?`,
            answer: a - b
         }
      break;
   }
   
}

while (true) {
   
   // clean the terminal every game
   console.clear();
   
   // take questions and answers
   let answersAndQuestions = createRandomQuestions();
   
   console.log("WELCOME TO MATH GAMES");
   console.log("");
   
   console.log("ANSWER THE FOLLOWING QUESTIONS");
   console.log(answersAndQuestions.question);
   console.log("");
   
   let myAnswer = Number(input("ANSWER: "));
   console.log("");
   
   if (myAnswer === answersAndQuestions.answer) {
      console.log("YOU WIN");
   } else {
      console.log(`YOU LOSE. THE CORRECT ANSWER IS ${answersAndQuestions.answer}`);
   }
   
   console.log("");
   
   let playAgain = input("WANT TO PLAY AGAIN? Y/N: ");
   
   if (playAgain.toUpperCase() !== "Y") {
      break;
   }
   
}
import "./style.scss";
import { quizQuestions } from "./data";

let currentQuestionNumber = 0;
// This will change over time^^ hence let variable

// Query Selectors
let currentQuestion = document.querySelector(".quiz__question") as HTMLElement;
let currentAnswers =
  document.querySelectorAll<HTMLButtonElement>(".answers__buttons");
const nextBtn = document.querySelector(".next") as HTMLButtonElement;

console.log(currentAnswers);

// Functions
const updateQuizText = () => {
  currentQuestion.textContent = quizQuestions[currentQuestionNumber].question;
  for (let index = 0; index < currentAnswers.length; index++) {
    currentAnswers[index].textContent =
      quizQuestions[currentQuestionNumber].options[index];
  }
};
updateQuizText();

const handleUpdateQuestion = () => {
  currentQuestionNumber++;
  updateQuizText();
};

//  Event Listeners

nextBtn.addEventListener("click", handleUpdateQuestion);

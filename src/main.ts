import "./style.scss";
import { quizQuestions } from "./data";

let currentQuestionNumber = 0;
// This will change over time^^ hence let variable

// Query Selectors
let currentQuestion = document.querySelector(".quiz__question") as HTMLElement;
let currentAnswers =
  document.querySelectorAll<HTMLButtonElement>(".answers__buttons");
const nextBtn = document.querySelector(".next") as HTMLButtonElement;

// Functions
const updateQuizText = () => {
  currentQuestion.textContent = quizQuestions[currentQuestionNumber].question;
  for (let index = 0; index < currentAnswers.length; index++) {
    currentAnswers[index].textContent =
      quizQuestions[currentQuestionNumber].options[index];
  }
};

const handleUpdateQuestion = () => {
  currentQuestionNumber++;
  updateQuizText();
  currentAnswers.forEach((answer) => {
    answer.style.backgroundColor = "";
  });
};

const handleAnswer = (event: Event) => {
  const userAnswer = event.currentTarget.textContent;
  if (userAnswer === quizQuestions[currentQuestionNumber].answer) {
    event.currentTarget.style.backgroundColor = "green";
    console.log(event);
  } else {
    event.currentTarget.style.backgroundColor = "red";
  }
};

// Event Listener
nextBtn.addEventListener("click", handleUpdateQuestion);
currentAnswers.forEach((answer) => {
  answer.addEventListener("click", handleAnswer);
});

// Next Button clears the red color and green color ---  DONE
// Initial page needs to be a question
// Stop watch
// Maybe feature removing two answers

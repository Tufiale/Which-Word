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
updateQuizText();

const handleUpdateQuestion = () => {
  currentQuestionNumber++;
  updateQuizText();
};

const handleAnswer = (event: Event) => {
  const userAnswer = event.currentTarget.textContent;
  if (userAnswer === quizQuestions[currentQuestionNumber].answer) {
    event.currentTarget.style.backgroundColor = "green";
  } else {
    event.currentTarget.style.backgroundColor = "red";
  }
};
// if the user answer matches the correct answers stored in object the button turns green if not, then red

//  Event Listeners

nextBtn.addEventListener("click", handleUpdateQuestion);
currentAnswers.forEach((answer) => {
  answer.addEventListener("click", handleAnswer);
});

//50/50 button where wrong answers disappear

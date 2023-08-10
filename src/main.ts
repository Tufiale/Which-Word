import "./style.scss";
import { quizQuestions } from "./data";

// Query Selectors
let currentQuestion = document.querySelector(".quiz__question") as HTMLElement;
let currentAnswers =
  document.querySelectorAll<HTMLButtonElement>(".answers__buttons");
const nextBtn = document.querySelector(".next") as HTMLButtonElement;
const score = document.querySelector(".footer__score") as HTMLHeadingElement;

let currentQuestionNumber = 0;
let correctScore: any = 0;

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

const handleAnswer = (event: any) => {
  const userAnswer = event.currentTarget.textContent;
  if (userAnswer === quizQuestions[currentQuestionNumber].answer) {
    event.currentTarget.style.backgroundColor = "green";
    console.log(event);
    correctScore++;
    score.innerText = correctScore;
  } else {
    event.currentTarget.style.backgroundColor = "red";
  }
};

// Event Listeners
nextBtn.addEventListener("click", handleUpdateQuestion);
currentAnswers.forEach((answer) => {
  answer.addEventListener("click", handleAnswer);
});

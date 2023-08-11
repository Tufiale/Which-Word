import "./style.scss";
import { quizQuestions } from "./data";

// Query Selectors
let currentQuestion = document.querySelector(".quiz__question") as HTMLElement;
let currentAnswers =
  document.querySelectorAll<HTMLButtonElement>(".answers__buttons");
const nextBtn = document.querySelector(".footer__next") as HTMLButtonElement;
const score = document.querySelector(".footer__score") as HTMLHeadingElement;
const messageHolder = document.querySelector(
  ".footer__answer"
) as HTMLHeadingElement;

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
    messageHolder.innerText = "";
  });
};

const handleAnswer = (event: any) => {
  const userAnswer = event.currentTarget.textContent;
  if (userAnswer === quizQuestions[currentQuestionNumber].answer) {
    event.currentTarget.style.backgroundColor = "green";
    correctScore++;
    score.innerText = correctScore;
    messageHolder.innerText = "You're actually quite clever!";
  } else {
    event.currentTarget.style.backgroundColor = "red";
    messageHolder.innerText = "Close! Maybe next time!";
  }
};

// Event Listeners
nextBtn.addEventListener("click", handleUpdateQuestion);
currentAnswers.forEach((answer) => {
  answer.addEventListener("click", handleAnswer);
});

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the scientific name for the 'fear of long words'?",
    options: [
      "Hippopotomonstrosesquippedaliophobia",
      "Arachnophobia",
      "Acrophobia",
      "Claustrophobia",
    ],
    answer: "Hippopotomonstrosesquippedaliophobia",
  },
  {
    question: "Which element has the chemical symbol 'Pb'?",
    options: ["Platinum", "Phosphorus", "Palladium", "Lead"],
    answer: "Lead",
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: [
      "Marie Curie",
      "Rosa Parks",
      "Florence Nightingale",
      "Amelia Earhart",
    ],
    answer: "Marie Curie",
  },
  {
    question: "What is the rarest M&M color?",
    options: ["Red", "Blue", "Brown", "Orange"],
    answer: "Brown",
  },
  {
    question: "What is the tallest mountain in Africa?",
    options: ["Mount Everest", "Kilimanjaro", "Mount McKinley", "Mount Fuji"],
    answer: "Kilimanjaro",
  },
  {
    question: "Which planet in our solar system has the most moons?",
    options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    answer: "Jupiter",
  },
  {
    question: "What is the main ingredient in traditional Japanese miso soup?",
    options: ["Seaweed", "Tofu", "Mushrooms", "Fish"],
    answer: "Tofu",
  },
  {
    question: "In Greek mythology, who was the goddess of victory?",
    options: ["Athena", "Hera", "Nike", "Artemis"],
    answer: "Nike",
  },
];

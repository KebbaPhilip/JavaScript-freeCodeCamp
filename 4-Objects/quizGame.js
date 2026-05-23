const questions = [
  {
    category: "Universe",
    question: "Which planet is the closest to the sun?",
    choices: ["Mercury", "Earth", "Jupiter"],
    answer: "Mercury",
  },
  {
    category: "Math",
    question: "2 + 2 = 54",
    choices: ["True", "False", "Maybe"],
    answer: "False",
  },
  {
    category: "Math",
    question: "The square root of 9 is ? ",
    choices: ["81", "3", "18"],
    answer: "3",
  },
  {
    category: "English",
    question: "Noun is the name of a person, place, thing, or and idea?",
    choices: ["Right", "Uncertain", "Wrong"],
    answer: "Right",
  },
  {
    category: "Sports",
    question: "Who is the GOAT of Football?",
    choices: ["Messi", "Ronaldo", "Neymar"],
    answer: "Ronaldo",
  },
];

function getRandomQuestion(question) {
  const randomNum = Math.floor(Math.random() * question.length);
  return question[randomNum];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(question, computerChoice) {
  if (question.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

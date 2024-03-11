const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "what is your name?",
  "Where do you live?",
  "What makes you happy?",
];

function collectAnswers(quesitons, done) {
  const answers = [];

  const questionAnswered = (answer) => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      return done(answers);
    }
  };
  rl.question(questions[0], questionAnswered);
}
collectAnswers(questions, (answers) => {
  console.log("thanks for the answers!");
  console.log(answers);
  process.exit();
});

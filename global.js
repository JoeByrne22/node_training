const questions = [
  "what is your name?",
  "what would you prefer to be doing?",
  "what is your preferred language to program in?",
];

const answers = [];

function ask(i = 0) {
  process.stdout.write(`\n\n${questions[i]}`);
}

process.stdin.on("data", function (data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", function () {
  process.stdout.write(
    `Hey ${answers[0]}, go ${answers[1]} you can write ${answers[2]} later`
  );
});

ask();

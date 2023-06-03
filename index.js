var questionsArr = [
  {
    question: "The sun rises in the west.",
    answer: false
  },
  {
    question: "The Earth is round.",
    answer: true
  },
  {
    question: "Mount Everest is the tallest mountain in the world.",
    answer: true
  },
  {
    question: "Pinguins can fly.",
    answer: false
  },
  {
    question: "Trees produce oxygen.",
    answer: true
  },
];

function runQuiz() {
  var correctAnswers = 0

  for (var i = 0; i < questionsArr.length; i++) {
    var question = questionsArr[i].question
    var answer = questionsArr[i].answer

    var userAnswer = confirm(question)

    if (userAnswer === answer) {
      correctAnswers++;
    }
  }

  var percentageCorrect = (correctAnswers / questionsArr.length) * 100
  alert("You scored " + percentageCorrect + "% in the quiz.")
}

function query(selector) {
  return document.querySelector(selector);
}

let calc = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// const buttonBlock = query('.button')
const questionBlock = query(".question");
const answerBlock = query(".answer");
const feedbackBlock = query(".feedback")

// buttonBlock.addEventListener('click', function (event) {
//   createQuestion(n, m)
// })

function createAdditionQuestion() {
  answerBlock.value = null;
  feedbackBlock.innerHTML = "";
  questionBlock.innerHTML = "";
  const n = getRandomInt(0, 11);
  const m = getRandomInt(0, 11);
  calc = n + m;
  questionBlock.innerHTML = `${n} + ${m} = `;
  // answerBlock.addEventListener('change', function (event) {
  //   compareAnswer(event.target.value, calc)
  // })
  // answerBlock.value = null
}

function createSubtractionQuestion() {
  answerBlock.value = null;
  feedbackBlock.innerHTML = "";
  questionBlock.innerHTML = "";
  const n = getRandomInt(0, 11);
  const m = getRandomInt(0, 11);
  calc = n - m;
  questionBlock.innerHTML = `${n} - ${m} = `;
  // answerBlock.addEventListener('change', function (event) {
  //   compareAnswer(event.target.value, calc)
  // })
  // answerBlock.value = null
}

answerBlock.addEventListener("change", async function (e) {
  const ans = e.target.value;
  if (ans == calc) {
    console.log("got it");
    feedbackBlock.innerHTML = '<div>You got it right!</div>'
    await sleep(2000);
    createAdditionQuestion();
  } else {
    console.log("nope");
    feedbackBlock.innerHTML = '<div>Incorrect, please try again</div>'
  }
});

// function compareAnswer(user, sum) {
//   console.log("user: " + user);
//   console.log("sum: " + sum);
//   if (user == sum) {
//     console.log("yay");
//   } else {
//     console.log("nay");
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  createAdditionQuestion();
});

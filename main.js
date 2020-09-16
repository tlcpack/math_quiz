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
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// const buttonBlock = query('.button')
const questionBlock = query(".question");
const answerBlock = query(".answer");
const feedbackBlock = query(".feedback");
const additionButton = query(".additionButton");
const subtractionButton = query(".subtractionButton");

additionButton.addEventListener("click", function (event) {
  createAdditionQuestion();
});

subtractionButton.addEventListener("click", function (event) {
  createSubtractionQuestion();
});

function createAdditionQuestion() {
  answerBlock.value = null;
  feedbackBlock.innerHTML = "";
  questionBlock.innerHTML = "";
  const n = getRandomInt(0, 11);
  const m = getRandomInt(0, 11);
  calc = n + m;
  questionBlock.innerHTML = `${n} + ${m} = `;
}

function createSubtractionQuestion() {
  answerBlock.value = null;
  feedbackBlock.innerHTML = "";
  questionBlock.innerHTML = "";
  const n = getRandomInt(0, 11);
  const m = getRandomInt(0, 11);
  calc = n - m;
  questionBlock.innerHTML = `${n} - ${m} = `;
}

answerBlock.addEventListener("change", async function (e) {
  const ans = e.target.value;
  if (questionBlock.textContent.includes("+")) {
    if (ans == calc) {
      console.log("got it - add");
      feedbackBlock.innerHTML = "<div>You got it right!</div>";
      additionButton.disabled = true
      subtractionButton.disabled = true
      await sleep(2000);
      additionButton.disabled = false
      subtractionButton.disabled = false
      createAdditionQuestion();
      return;
    } else {
      console.log("nope - add");
      feedbackBlock.innerHTML = "<div>Incorrect, please try again</div>";
      await sleep(2000);
      feedbackBlock.innerHTML = ""
    }
  }
  if (questionBlock.textContent.includes("-")) {
    if (ans == calc) {
      console.log("got it - sub");
      feedbackBlock.innerHTML = "<div>You got it right!</div>";
      additionButton.disabled = true
      subtractionButton.disabled = true
      await sleep(2000);
      additionButton.disabled = false
      subtractionButton.disabled = false
      createSubtractionQuestion();
    } else {
      console.log("nope - sub");
      feedbackBlock.innerHTML = "<div>Incorrect, please try again</div>";
      await sleep(2000);
      feedbackBlock.innerHTML = ""
    }
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

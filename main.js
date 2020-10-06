function query(selector) {
  return document.querySelector(selector);
}

const questionBlock = query(".question");
const answerBlock = query(".answer");
const feedbackBlock = query(".feedback");
const additionButton = query(".additionButton");
const subtractionButton = query(".subtractionButton");
const nameBlock = query(".name");
const helloBlock = query(".hello");
const askNameBlock = query(".askname");
const mathContainerBlock = document.getElementById("mathContainer")

let calc = 0;
let name = "";

function getInputValue() {
  const inputVal = document.getElementById("myInput").value;
  sayHi(inputVal);
}

askNameBlock.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    name = e.target.value;
    sayHi(name);
  }
});

function sayHi(name) {
  mathContainerBlock.classList.remove("hidden");
  askNameBlock.classList.add("hidden");
  nameBlock.innerHTML = `<div>Welcome, ${name}</div>`;
  askNameBlock.innerHTML = "";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
  const n = getRandomInt(2, 15);
  const m = getRandomInt(0, n);
  calc = n - m;
  questionBlock.innerHTML = `${n} - ${m} = `;
}

answerBlock.addEventListener("keypress", async function (e) {
  if (e.key === "Enter") {
    const ans = e.target.value;
    if (questionBlock.textContent.includes("+")) {
      if (ans == calc) {
        console.log("got it - add");
        feedbackBlock.innerHTML =
          "<div><img src='https://img.icons8.com/cotton/2x/checkmark.png'></div>";
        additionButton.disabled = true;
        subtractionButton.disabled = true;
        await sleep(2000);
        additionButton.disabled = false;
        subtractionButton.disabled = false;
        createAdditionQuestion();
        return;
      } else {
        console.log("nope - add");
        feedbackBlock.innerHTML =
          "<div><img src='https://cdn.iconscout.com/icon/free/png-256/sad-emoji-17-894764.png'></div>";
        await sleep(2000);
        feedbackBlock.innerHTML = "";
        answerBlock.value = null;
      }
    }
    if (questionBlock.textContent.includes("-")) {
      if (ans == calc) {
        console.log("got it - sub");
        feedbackBlock.innerHTML =
          "<div><img src='https://img.icons8.com/cotton/2x/checkmark.png'></div>";
        additionButton.disabled = true;
        subtractionButton.disabled = true;
        await sleep(2000);
        additionButton.disabled = false;
        subtractionButton.disabled = false;
        createSubtractionQuestion();
      } else {
        console.log("nope - sub");
        feedbackBlock.innerHTML =
          "<div><img src='https://cdn.iconscout.com/icon/free/png-256/sad-emoji-17-894764.png'></div>";
        await sleep(2000);
        feedbackBlock.innerHTML = "";
        answerBlock.value = null;
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  createAdditionQuestion();
});

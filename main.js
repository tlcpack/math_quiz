function query(selector) {
  return document.querySelector(selector);
}

const questionBlock = query(".question");
const answerBlock = query(".answer");
const feedbackBlock = query(".feedback");
const additionButton = query(".additionButton");
const subtractionButton = query(".subtractionButton");
const multiplicationButton = query(".multiplicationButton");
const divisionButton = query(".divisionButton");
const nameBlock = query(".name");
const helloBlock = query(".hello");
const askNameBlock = query(".askname");
const consecutive = query(".consecutive");
const mathContainerBlock = document.getElementById("mathContainer")
const questionTypeBlock = query(".questionType");


const heart = "<img src='https://cdn.iconscout.com/icon/free/png-256/heart-56-76703.png' style='width:35px;height:35px;'>";
const check = "<img src='https://res.cloudinary.com/teepublic/image/private/s--DmUgCWHr--/c_crop,x_10,y_10/c_fit,w_1609/c_crop,g_north_west,h_1038,w_1038,x_285,y_18/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-111,y_-111/b_rgb:2a2554/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1610057757/production/designs/18296382_0.jpg'>";
const sad = "<img src='https://cdn.iconscout.com/icon/free/png-256/sad-emoji-17-894764.png'>"

let calc = 0;
let name = "";
let correct = 0;

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
  consecutive.classList.remove("hidden");
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
multiplicationButton.addEventListener("click", function (event) {
  createMultiplicationQuestion();
});
divisionButton.addEventListener("click", function (event) {
  createDivisionQuestion();
});

function disableButtons() {
  additionButton.disabled = true;
  subtractionButton.disabled = true;
}

function enableButtons() {
  additionButton.disabled = false;
  subtractionButton.disabled = false;
}

function blankify() {
  answerBlock.value = null;
  feedbackBlock.innerHTML = "";
  questionBlock.innerHTML = "";
}

function createAdditionQuestion() {
  blankify();
  const n = getRandomInt(0, 20);
  const m = getRandomInt(0, 25);
  calc = n + m;
  questionBlock.innerHTML = `${n} + ${m} = `;
}

function createSubtractionQuestion() {
  blankify();
  const n = getRandomInt(2, 15);
  const m = getRandomInt(0, n);
  calc = n - m;
  questionBlock.innerHTML = `${n} - ${m} = `;
}

function createMultiplicationQuestion() {
  blankify();
  const n = getRandomInt(2, 13);
  const m = getRandomInt(2, n);
  calc = n * m;
  questionBlock.innerHTML = `${n} x ${m} = `;
}

function createDivisionQuestion() {
  blankify();
  const n = getRandomInt(2, 12);
  const m = getRandomInt(2, 12);
  
  const dividend = n * m; 
  
  calc = m; 
  
  questionBlock.innerHTML = `${dividend} / ${n} = `;
}

answerBlock.addEventListener("keypress", async function (e) {
  if (e.key === "Enter") {
    const ans = e.target.value;
    nameBlock.classList.add('hidden');
      if (ans == calc) {
        correct += 1;
        questionTypeBlock.classList.add('hidden');
        feedbackBlock.innerHTML = check;
        correct > 0 ? consecutive.innerHTML = `Correct answers = ${correct}: </br></br>` + heart.repeat(correct) : ""
        disableButtons();
        await sleep(2000);
        enableButtons();
        questionTypeBlock.classList.remove('hidden');
        questionBlock.textContent.includes("x") ? createMultiplicationQuestion() 
          : questionBlock.textContent.includes("+") ? createAdditionQuestion() : createSubtractionQuestion()
      } else {
        feedbackBlock.innerHTML = sad;
        await sleep(2000);
        feedbackBlock.innerHTML = "";
        answerBlock.value = null;
      }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  createAdditionQuestion();
});

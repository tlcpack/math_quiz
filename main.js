function query (selector) {
  return document.querySelector(selector)
}

const buttonBlock = query('.button')
let questionBlock = query('.question')
let answerBlock = query('.answer')

const n = 2
const m = 3
const sum = n + m

function createQuestion (n, m) {
  questionBlock.innerHTML = `${n} + ${m} = `
}

function compareAnswer (user) {
  if (user == sum) {
    console.log('yay')
  } else {
    console.log('nay')
  }
}

document.addEventListener('DOMContentLoaded', function () {
  buttonBlock.addEventListener('click', function (event) {
    createQuestion(n, m)
  })
  answerBlock.addEventListener('change', function (event) {
    compareAnswer(event.target.value)
  })
})

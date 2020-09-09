function query (selector) {
  return document.querySelector(selector)
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

const buttonBlock = query('.button')
let questionBlock = query('.question')
let answerBlock = query('.answer')

// buttonBlock.addEventListener('click', function (event) {
//   createQuestion(n, m)
// })

answerBlock.addEventListener('change', function (event) {
  compareAnswer(event.target.value)
})

function createQuestion () {
  questionBlock.innerHTML = ''
  const n = getRandomInt(0, 11)
  const m = getRandomInt(0, 11)
  const sum = n + m
  questionBlock.innerHTML = `${n} + ${m} = `
}

function compareAnswer (user) {
  if (user == sum) {
    console.log('yay')
  } else {
    console.log('nay')
  }
}

function query (selector) {
  return document.querySelector(selector)
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

// const buttonBlock = query('.button')
const questionBlock = query('.question')
const answerBlock = query('.answer')

// buttonBlock.addEventListener('click', function (event) {
//   createQuestion(n, m)
// })

function createQuestion () {
  questionBlock.innerHTML = ''
  const n = getRandomInt(0, 11)
  const m = getRandomInt(0, 11)
  const calc = n + m
  questionBlock.innerHTML = `${n} + ${m} = `
  answerBlock.addEventListener('change', function (event) {
    compareAnswer(event.target.value, calc)
  })
  answerBlock.value = null
}

function compareAnswer (user, sum) {
  console.log('user: ' + user)
  console.log('sum: ' + sum)
  if (user == sum) {
    console.log('yay')
  } else {
    console.log('nay')
  }
}

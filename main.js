function query (selector) {
    return document.querySelector(selector)
}

const buttonBlock = query('.button')
let questionBlock = query('.question')
// let answerBlock = query('.answer')

function createQuestion () {
    const n = 2
    const m = 3
    questionBlock.innerHTML = `${n} + ${m} = `
}

document.addEventListener('DOMContentLoaded', function () {
    buttonBlock.addEventListener('click', function (event) {
    createQuestion()
    })
})

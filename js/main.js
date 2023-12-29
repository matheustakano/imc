import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC, notNumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
    } else {
        const result = IMC(weight, height)
        displayResultMessage(result)
    }
}

function displayResultMessage(result) {
    const message = Modal.message
    message.innerText = `Seu IMC é de ${result}`
    Modal.open()
}

inputHeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
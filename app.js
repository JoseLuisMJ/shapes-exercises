const roundElement = document.getElementById('round');
const squareElement = document.getElementById('square');
const triangleElement = document.getElementById('triangle');

const btnReset = document.querySelector('#btnReset');

const figures = [roundElement, squareElement, triangleElement]

figures.forEach( figura => {
    
    figura.addEventListener('click', (event) => {
        event.target.hidden = true
    })
})

btnReset.addEventListener('click', () => {
    figures.forEach( figura => figura.hidden = false)
})
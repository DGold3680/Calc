const numberBtns = document.querySelectorAll('.number .display-btn')
const opsBtns = document.querySelectorAll('.operators .display-btn')
const display = document.querySelector('.calculator-display')
const answer = document.querySelector('#answer')
const back = document.querySelector('#back')
const clear = document.querySelector('#clear')
display.value = ''
function firstInputCheck(...inValid) {
    inValid.forEach((val) => {
        if (display.value[0] === val) {
            display.value = ''
        }
    })
}
function checkrepeatedInput(...notValid) {
    notValid.forEach((val) => {
        if (display.value[display.value.length - 1] === val) {
            display.value = display.value.slice(0, -1)
        }
    })
}
const displayNums = () => {
    numberBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            display.value += btn.innerText
        })
    })
}
displayNums()
const displayOps = () => {
    opsBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {checkrepeatedInput('/', '+', 'x', '-', '.')
           display.value += btn.innerText
           firstInputCheck('/', '+', 'x')

        })
    })
}
displayOps()
const evaluateCalc = () => {
    answer.addEventListener('click',
        () => {
            if (display.value.includes('x')) {
                display.value = display.value.replaceAll('x', '*')
            } else { }
            if (display.value.length) {
                const result = new Function(`return ${display.value}`)
                if (result() === Infinity || result() === -Infinity||`${result()}`==='NaN') {
                    alert('Math Error')
                    display.value = ''
                } else {
                    display.value = result()
                }
            }
        })
}
evaluateCalc()
const clearCalc = () => {
    clear.addEventListener('click',
        () => {
            display.value = ''
        })
}
clearCalc()
const backCalc = () => {
    back.addEventListener('click',
        () => {
            display.value = display.value.slice(0, -1)
        })
}
backCalc()
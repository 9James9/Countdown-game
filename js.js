let container = document.querySelector("#container")

let timer = document.createElement('h2')
container.appendChild(timer)
timer.innerHTML = "x"
let num = 100

function countDown() {
    num -= 1
    timer.innerHTML = num
    if (num < 0) {
        timer.classList.add('monkas') //turn timer red when negative
    } else if (num > 0) {
        timer.classList.remove('monkas')
    }
}

let btn = document.createElement('button')
container.appendChild(btn)
btn.textContent = "Count down"
btn.addEventListener('click', countDown)

setInterval(countDown, 1000)

let btnUp = document.createElement('button')
container.appendChild(btnUp)
btnUp.textContent = "Count up"

let down10 = document.createElement('button')
down10.textContent = "Count down 10"
container.appendChild(down10)
down10.addEventListener('click', () => {
    num -= 10
    timer.innerHTML = num
})

btnUp.addEventListener('click', () => {
    num += 1
    timer.innerHTML = num
})

let guess = document.createElement('h4')
container.appendChild(guess)
guess.textContent = "Type in the number:"
let inputForm = document.createElement('input')
guess.appendChild(inputForm)

let submit = document.createElement('button')
submit.textContent = "Submit"
guess.appendChild(submit)
submit.addEventListener('click', () => {
    let value = document.querySelector('input').value
    if (value > num) {
        alert('The value is greater than the counter')
        document.querySelector('input').value = ''
    } else if (value == num) {
        alert('You win! The value is equal to the counter')
        document.querySelector('input').value = ''
    } else if (value < num) {
        alert('The value is less than the counter')
        document.querySelector('input').value = ''
    } else {
        console.log(value)
        document.querySelector('input').value = ''
    }
})

let levelTwo = document.createElement('button')
levelTwo.textContent = "Level 2"
levelTwo.classList.add('leveltwo')
container.appendChild(levelTwo)
levelTwo.addEventListener('click', () => {
    setInterval(countDown, 750)
})

let levelThree = document.createElement('button')
levelThree.textContent = "Level 3"
container.appendChild(levelThree)
levelThree.addEventListener('click', () => {
    setInterval(countDown, 250)
})

let reset = document.createElement('button')
reset.classList.add('resetbtn')
reset.textContent = "Reset"
container.appendChild(reset)
reset.addEventListener('click', () => {
    window.location.reload()
})

//add or subtract random number between 1 and 100
let random100 = document.createElement('button')
random100.textContent = "Random 100"
container.appendChild(random100)

let random100Info = document.createElement('p')
random100Info.textContent = ""
container.appendChild(random100Info)


function random(number) {
    value = Math.floor(Math.random() * number)
    return value
}
//random100 will add or remove even/odd numbers. Adding/removing is based off of coin flip
random100.addEventListener('click', () => {
    random(2)
    if (value == 1) {
        random(100)
        num += value
        random100Info.textContent = `The random number ADDED was: ${value}`
    } else if (value == 0) {
        random(100)
        num -= value
        random100Info.textContent = `The random number REMOVED was: ${value}`
    }
})
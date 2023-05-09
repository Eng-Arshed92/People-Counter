
// let myAge = 30

// console.log(myAge)
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console
// let myAge = 30
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// _______________________________________________________ //
// _______________________________________________________ //

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bounesPoints = 50 
// console.log(bounesPoints)

// bounesPoints = bounesPoints + 50
// console.log(bounesPoints)

// bounesPoints = bounesPoints - 75
// console.log(bounesPoints)

// bounesPoints = bounesPoints + 45
// console.log(bounesPoints)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("click button")
// }

// _______________________________________________________ //
// _______________________________________________________ //
// Setting up the the race 🏎 🏎 🏎
// function countdown() {
    
    // console.log(6)
    // console.log(5)
    // console.log(4)
    // console.log(3)
    // console.log(2)
    // console.log(1)
// }

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾
//countdown()


// Get ready for a new race 🏎 🏎 🏎
//countdown()

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
// function myLogger() {
    // console.log(42)
// }
// //myLogger()

// _______________________________________________________ //
// _______________________________________________________ //

// Create a function that logs out the sum of all the lap times
//let lap1 = 34
//let lap2 = 33
//let lap3 = 36

//function logLapTime() {
    //let totalTime = lap1 + lap2 + lap3 // <== الطريقة الاولى للحل 
    //console.log(totalTime) 
//    console.log(lap1 + lap2 + lap3) // <== الطريقة الثانية للحل 

//}

//logLapTime()
//logLapTime()
//console.log(totalTime)

// _______________________________________________________ //
// _______________________________________________________ //

// Create a function that increments the lapsCompleted variable with one
// Run it three times
//let lapsCompleted = 0
//function increment() {
//    lapsCompleted = lapsCompleted + 1 // <== الطريقة الاولى للحل 
//    console.log(lapsCompleted)
//    
//}
//increment()    //    // <== الطريقة الثانية للحل 
//increment()
//increment()
//console.log(lap//sCompleted)

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// _______________________________________________________ //
// _______________________________________________________ //

// grab the count-el element, store it in a countEl variable
// change the count-el in the HTML to reflect the new count
// set countEl's innerText to the count

//let countEl = document.getElementById("count-el")
//console.log(countEl)//

//let count = 0
//function increment() {
//    count = count + 1
//    countEl.innerText = count
//}

// _______________________________________________________ //
// _______________________________________________________ //

// 1. Create a function, save(), which logs out the count when it's called

//let save = document.getElementById("save")
//function save() {
//    console.log(count)
//}

// _______________________________________________________ //
// _______________________________________________________ //

// Create a variable, message, that stores the string: "You have tree new notifications"
//let username = "OH ARSHED"
//let message = "You have three new noyifications"
//
//let messageToUser = username + "!" + ", " + message
//console.log(messageToUser)

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

//let greeting = "Hi, my name is: "
//let name = "Arshed"

//let myGreeting = greeting + " " + name 
//console.log(myGreeting)

// _______________________________________________________ //
// _______________________________________________________ //

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
//let welcomeEl = document.getElementById("welcome-el")
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
//let name ="Arshed"
//let greeting = "Welcome Back "


// Render the welcome message using welcomeEl.innerText
//welcomeEl.innerText = greeting + name
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


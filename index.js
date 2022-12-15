

let count = 0
let countEl = document.getElementById("count-el")
let saveItem = document.getElementById("save-item")
let resetButton = document.getElementById("reset-btn")
function increment(){
    count += 1
    countEl.textContent =  count 
}

function save(){
    let totalCount = count + " - "
    saveItem.textContent += totalCount
    countEl.textContent = 0
    count = 0
}

function reset(){
    saveItem.textContent = "Car total numbers: "
}



// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let countEl = document.getElementById("count-el")
// let count = 0
// let saveEl = document.getElementById("save-el")
// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // let saveItem = count + " - "
    // saveEl.innerHTML += saveItem
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }

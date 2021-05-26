// document.getElementById("count-el").textContent = 5
let countEl = document.getElementById("count-el")
let enteriesDisplayEl = document.getElementById("enteries-display-el")

let count = 0

function handleIncrement(){
    count += 1
    countEl.textContent = count 
}
function handleReset(){
    count = 0
    countEl.textContent = count
    enteriesDisplayEl.textContent = "Previous Enteries : " 
   
    
}
function handleSave(){
    let countStr = count + " - " 
    enteriesDisplayEl.textContent += countStr
    count = 0
    countEl.textContent = count
}
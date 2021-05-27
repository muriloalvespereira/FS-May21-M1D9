
window.onload = function(){

    displayEntireMonth()
}
    

const displayEntireMonth = function(){
    
    let numbersContainer = document.getElementById("numbers-container")
    numbersContainer.innerHTML = ""

    for (let i = 1; i <= 76; i++){
        let newNum = document.createElement("div")
        newNum.innerText = i 
        newNum.classList.add("numbers")
        numbersContainer.appendChild(newNum)
    }
}
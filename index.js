
window.onload = function(){

    displayEntireMonth()
    const randomNum = function (newRandom) {
        let changeNum = document.getElementsByTagName("h1")[0];
        changeNum.innerText =newRandom;
      };
      const btn1= document.querySelector("#random-num")
      btn1.addEventListener('click', function(){
        randomNum (Math.round(Math.random() * 76));
           })
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

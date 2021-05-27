
window.onload = function(){

    displayEntireMonth()
}


const displayEntireMonth = function(){
    
    let numbersContainer = document.getElementById("numbers-container")
    numbersContainer.innerHTML = ""

    for (let i = 0; i <= 76; i++){
        let newNum = document.createElement("div")
        if (i !== 0)
        newNum.innerText = i 
        newNum.classList.add("numbers")
        numbersContainer.appendChild(newNum)
    }
}

const randomNum = function (newRandom) {
    const changeNum = document.getElementsByTagName("h1")[0];
    changeNum.innerText =newRandom
    const numberArray = document.querySelectorAll(".numbers")
    numberArray[newRandom].classList.add("numbers1")
  };
  const btn1= document.querySelector("#random-num")
  btn1.addEventListener('click', function(){
    randomNum (Math.round(Math.random() * 76));
       })
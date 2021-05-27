
window.onload = function(){

    displayEntireNumbers()
    btn1()
}


const displayEntireNumbers = function(){
    
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

//Selecionar todos os divs que possuem a classe numbers1 e comparar com o numero randomico gerado
//se for igual pulamos

//const checkSelected

const randomNum = function (newRandom) {
    const changeNum = document.getElementsByTagName("h1")[0];
    changeNum.innerText =newRandom
    const numberArray = document.querySelectorAll(".numbers")
    numberArray[newRandom].classList.add("numbers1")
  };
  
  let arrayGlobalNum = []

 
  function getRandomNumb(){
    return Math.round(Math.random() * 76)+1
      }

 const btn1 =  function(){
    let btn2 = document.querySelector("#random-num")
  btn2.addEventListener('click', function(){
    checkSelected();
       }
       )
    }

       const checkSelected = function(){
        let createNum = getRandomNumb()


           let numbersOne = document.querySelectorAll(".numbers1")
           if (numbersOne.length === 0){
            arrayGlobalNum.push(createNum)

            randomNum(createNum)
            console.log("primeiro if")
            return
           }
            
           if (false === arrayGlobalNum.includes(createNum)){
             arrayGlobalNum.push(createNum)
              randomNum(createNum)
              console.log("segundo if")
              return
           }
           if(numbersOne.length === 76){
               return
           }
           checkSelected()
        } 
          
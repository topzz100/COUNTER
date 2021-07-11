const counter = document.getElementById("counter");
const lowerNum = document.getElementById("lower");
const addNum = document.getElementById("add");

let counterValue=0;
lowerNum.addEventListener("click", function (event){
  counterValue--;
 
  if(counterValue >= 0){
     counter.innerHTML = counterValue;
   
  }else{
   counterValue = 0;
  }
});

addNum.addEventListener("click", function (event){
  counterValue++;
 
  if(counterValue <= 50){
    counter.innerHTML = counterValue;
  
 }else{
  counterValue = 50;
 }
});


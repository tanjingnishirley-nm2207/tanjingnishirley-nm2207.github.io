/*let counter = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;
});

function count() {
  counter++;

  if (counter % 10 === 0) {
    alert("Mouse would like to thank you for the food 🥙");
  }

  document.querySelector(".counter").innerHTML = counter;
}*/
const bDiv = document.getElementById("one"); 

  const btxt = 
   "what is loneliness to you?" ;
  
  let b = 0;
  
  const intervalB = setInterval( function() {
    bDiv.innerHTML += btxt [b];
    b++;
    const myTimeout = setTimeout(intervalB, 2000);
    if (b === btxt.length){
      clearInterval(intervalB)
    }}, 100);  

onst splitted = txt.split("<nl>");

splitted.forEach( function() {
 const p = document.createElement("p");
 outputDiv.appendChild(p);
});

const para = outputDiv.querySelectorAll("p");


let i = 0;
let currentPara = 0;

const intervalId = setInterval( function() {
  para[currentPara].innerHTML += splitted [currentPara][i];
  i++;
  if (i === splitted[currentPara].length){
    currentPara++;
    i++;

    if (currentPara === splitted.length){
      clearInterval(intervalId)
    }
  }
  
 

}, 100);  
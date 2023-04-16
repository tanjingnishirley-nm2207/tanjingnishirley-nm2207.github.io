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
  
 

}, 100);  d3.csv ("https://raw.githubusercontent.com/tanjingnishirley-nm2207/tanjingnishirley-nm2207.github.io/main/word.csv ", function (errs, datay) {
  if (errs) {
    console.error(errs);
    return;
  }
  
const hihi = datay.map(function(d) { return d.MoST; })
console.log(
let result = '';
if (typeof hihi === 'string') {
  result = hihi.split(' ');
}

console.log(result);
/*hihi.toString()
console.log(hihi)
const myArray = hihi.split(" ")
console.log(myArray)*/

})
  
  
const data = fetch(
  "https://raw.githubusercontent.com/tanjingnishirley-nm2207/tanjingnishirley-nm2207.github.io/main/NewAge.csv" //replace this with the appropriate URL
)
  .then(function (response) {
    return response.text();
  })
  .then(function (data) {
    const table = [];
    const rows = data.split("\r\n"); //replace this with the appropriate values
    console.log(rows)

    //insert your forEach loop here
    rows.forEach((r, index) => {
      const item =r.split(",");
      table.push(item);
      console.log(item)
    });
  })

  d3.csv("https://raw.githubusercontent.com/tanjingnishirley-nm2207/tanjingnishirley-nm2207.github.io/main/test.csv", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  const Age = {
    x: data.map(function(d) { return d.Age; }),
    y: data.map(function(d) { return d.Occurrence; }),
    name: "Age",
    mode: "markers",
    type: "Scatter",
    };
   const plotData = [Age ]
   const layout = {
    title: {
      text: "agegegege",
      font: { size: 24 }
    },
    xaxis: {
      title: "Year",
    },
    yaxis: {
      title: "Life Expectancy",
    },
  };

  Plotly.newPlot("scatter", plotData, layout);

});

  
  

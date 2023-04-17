//wanted it to be more personalised 
const name = prompt("what is your name?");

//data will be shown in div id = 0 
const aDiv = document.getElementById("zero"); 
//this is the data
const atxt = 
"hi " +  name + "...." ;
//typerwriter effect without cursor, i learnt it from w3school i think..
let a = 0;
const intervalA = setInterval( function() {
  //appends the data to the innerhtml of div class = 0 
  aDiv.innerHTML += atxt [a]; a++;
  //until the whole text is finished
  if (a === atxt.length){
  //stop
         clearInterval(intervalA)
  }}, 100);  

  //dropdown menu
  
  function dropdown() {

    document.getElementById("dropContent").classList.toggle("show")
  }
  //reaction towards mouse
  window.onclick = function(event) {
    //if user clicks inside the dropdownbutton, it will show the content
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropContent");
      var i;
      //ensure that all the content has been showned
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  

//scatter
const Scatter = {
    datasets: [{
      //it was painful writing out all the data 
      // i tried to do a loop but i wouldnt work so manually tpying out it is
      data: [ { x: 4, y: 1}, { x: 12, y: 3}, { x: 13, y: 6}, { x: 14, y: 6}, { x: 15, y: 11}, 
              { x: 16, y: 7}, { x: 17, y: 10}, { x: 18, y: 7}, { x: 19, y: 6}, { x: 20, y: 11}, { x: 21, y: 3}, 
        
               { x: 22, y: 9}, { x: 23, y: 11}, { x: 24, y: 11}, { x: 25, y: 11}, { x: 26, y: 8}, { x: 27, y: 13},
               { x: 28, y: 7}, { x: 30, y: 12}, { x: 29, y: 10}, { x: 31, y: 8}, { x: 32, y: 5}, { x: 33, y: 10}, 
               { x: 34, y: 6}, { x: 36, y: 6}, { x: 37, y: 7}, { x: 38, y: 3}, { x: 39, y: 5}, { x: 40, y: 2}, 
               { x: 41, y: 2}, { x: 42, y: 4}, { x: 43, y: 3}, { x: 44, y: 1}, { x: 45, y: 1}, { x: 46, y: 2}, 
               { x: 47, y: 3}, { x: 48, y: 5}, { x: 49, y: 1}, 

              { x: 50, y: 8}, { x: 51, y: 3}, { x: 52, y: 8}, { x: 53, y: 2}, { x: 54, y: 2}, { x: 55, y: 3}, { x: 56, y: 2}, 
              { x: 57, y: 4}, { x: 59, y: 1}, { x: 60, y: 3}, { x: 62, y: 1}, { x: 65, y: 3}, { x: 66, y: 1}, { x: 67, y: 1},
              { x: 68, y: 1}, { x: 69, y: 1}, { x: 70, y: 4}, { x: 71, y: 2}, { x: 73, y: 1}, { x: 74, y: 1}, { x: 75, y: 2},  
        ],
    //i wanted to differentiate the data points into 3 different category (young, adult, old) to have an easier time visualising the data
    //but i got stuck too, i really tried many different ways...
    //for some reason, the code could work in the chart.js example but it didnt work in mine...
    backgroundColor: [ "rgba(245, 255, 61, 1)"],
   
             }
            ],
       };

      
new Chart("ScatterMe",
       {
         type:'scatter',
         data: Scatter,
         options: {
        // for some reason, i cant seem to control the scales, could you let me know why if its possible? i have been on it for hours..
        // i only known one side can be adjusted because this is linear
          scales:{
            x: {
              type: 'linear',
              position: 'bottom'                               
          }},
          //wanted to make the effect as mentioned by the individual, the data points driting away
          //but only happens on the first load 
          // tried to loop it using the property by chart.js but it doesnt work either...
          animation: {
            duration: 15000,
            easing: 'linear',
            },
            title: {
              display: true,
              text: ["Number of People Who Felt Lonely According to their Age"],
              fontFamily: "TrebuchetMS",
              fontSize: 24,
              fontColor: 'rgb(255,255,255)',
          }, //hide the legend 
            maintainAspectRatio: true,
              legend: {
              display: false
          },
        
           },
        
            }
    
      
      );
      
      

//bar plot 
const Words = ["Alone", "People", "Time","Friends", "One", "Felt", "Feel"," Just", "Lonely", "Life"];
const Frequency= [172,169,167,166,162,151,148,142,137,131];



const most = {
    labels: Words,
    datasets: [
        {
          label: "Frequency",
          //this property is just a semantic naming of your y-axis
      data: Frequency,
          //this property contains an array of values that corresponds to your x-axis labels
      borderWidth: 1,
          //the border within your bars 
      backgroundColor:[  'rgba(255, 99, 132, 0.2)',
                          'rgba(255, 159, 64, 0.2)',
                          'rgba(255, 205, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 0, 255, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 205, 86, 0.2)',
                          "rgba(255, 205, 64, 0.2)",
                          'rgba(255, 99, 132, 0.2)'],
          // the background colour of your bars 
       borderColor: [  'rgba(255, 99, 132)',
                        'rgba(255, 159, 64)',
                        'rgba(255, 205, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 0, 255)',
                        'rgba(75, 192, 192)',
                        'rgba(255, 205, 86)',
                        "rgba(255, 159, 64)",
                        'rgba(255, 99, 132)'],
          
        }
    ]
}
new Chart("barplot",
            {
                type: "bar",
                data: most,
                options: {
                  scales: {
                    //for some reason, this is not working.. and i cant figure out why...
                    y: {
                      beginAtZero: true
                    },
                
                  },
                  //hide the legend
                    maintainAspectRatio: true,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ["Top 10 Words Used When Sharing About The Time They Felt The Most Lonely"],
                        fontFamily: "TrebuchetMS",
                        fontSize: 30,
                        fontColor: 'royalblue',
                    }, 
                    //wanna audience to experience the walls kinda rising up and trapping them but i dont think it may have work beacuse by the time they reach there, the bar chart has already finish loading
                    animation: {
                       duration: 30000,
                       easing: 'linear',
                    }
                   
                  },
                },

            
            );
            
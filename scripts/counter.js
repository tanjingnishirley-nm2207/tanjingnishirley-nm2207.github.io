const name = prompt("what is your name?");

const aDiv = document.getElementById("zero"); 

const atxt = 
 "hi " +  name + "...." ;

let a = 0;

const intervalA = setInterval( function() {
  aDiv.innerHTML += atxt [a];
  a++;
  if (a === atxt.length){
    clearInterval(intervalA)
  }}, 100);  



function dropdown() {
    document.getElementById("dropContent").classList.toggle("show")
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
// Current sentence being processed
var sentence = 0;
// Character number of the current sentence being processed 
var character = 0;
var content = [ 
    "the feeling that everyone around me has overlapping spheres of social interaction and I am the outlier on a scatterplot.",
    "like a single balloon released into the sky, moving further and further away from the love and connection and floating uncontrollably into a terrifying dark and unknown abyss.",
    "a perpetual feeling of sitting next to a large hole in the couch - you know there shoud be something there, something necessary, obvious and unable to be ignored but it is oddly just an empty space.",
    "it feels like invisible walls surrounding you and preventing you from reaching out. nobody can come in and you cant get out.",
    "the sound of one hand clapping.",
    "having a question on the tip of your tongue, but feeling unalbe to ask it.",
    "adfrift and unethered, as if you coud just be blown away in a strong wind and no one would notice that you were gone.",
    "like experiencing a numb feeling in your mind and limbs but a suffocating feeling in your throat and chest."
  ];
  

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text in html
var textDisplay = document.getElementById("text");

// Cursor element 
var _CURSOR = document.getElementById("cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  content[sentence].substring(0, character + 1);
	textDisplay.innerHTML = text;
	character++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === content[sentence]) {
		// Hide the cursor
		//_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 100);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  content[sentence].substring(0, character- 1);
	textDisplay.innerHTML = text;
	character--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(sentence == (content.length - 1))
    sentence = 0;
		else
    sentence++;
		
		character = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 1000);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);


const name = prompt("what is your name?");
const greeting = "hi " +  name + "!";
document.getElementById("greet").innerHTML = greeting;



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
  






the_heading = document.getElementById("webTitle");

function rickRoll() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
}    

the_paragraph = document.getElementById("paragraph1");

the_paragraph.onmouseenter = function changeColor() { 
    the_paragraph.style.color = "RoyalBlue";
    the_paragraph.style.backgroundColor = "white";
}

var brand;
function setBrand(){
    brand = document.getElementById("brand").value;
}

var ram;
function setBrand(){
    ram = document.getElementById("ram").value;
}

var storage;
function setBrand(){
    storage = document.getElementById("storage").value;
}

function showFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

var combinedLink
function submitCompiledLink() {
    combinedLink = brand.concat(ram, storage);
    return href=combinedLink
}

// Close the dropdown menu if the user clicks outside of it
function clickOut(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
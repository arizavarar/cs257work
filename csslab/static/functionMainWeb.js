the_heading = document.getElementById("webTitle");

the_heading.onclick = function(){ the_heading.innerText="Goodbye World!"};

the_paragraph = document.getElementById("paragraph1");

the_paragraph.onmouseenter = function() { 
	the_paragraph.style.color = "RoyalBlue";
  the_paragraph.style.backgroundColor = "white";
};

function changeColor() {
  text_input_element = document.getElementById("user-color");
  new_color = text_input_element.value;
	the_heading.style.color = new_color;
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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
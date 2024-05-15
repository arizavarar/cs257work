the_heading = document.getElementById("webTitle");

function rickRoll() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
}    

the_paragraph = document.getElementById("paragraph1");

the_paragraph.onmouseenter = function() { 
    the_paragraph.style.color = "RoyalBlue";
    the_paragraph.style.backgroundColor = "white";
};

function showFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function submitCompiledLink() {
    // Get selected values from dropdowns
    var brand = document.getElementById("brand").value;
    var ram = document.getElementById("ram").value;
    var storage = document.getElementById("storage").value;

    // Construct the URL based on selected values
    var compiledLink = `/${brand}/${ram}/${storage}`;

    // Redirect to the compiled link
    window.location.href = compiledLink;
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
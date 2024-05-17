the_heading = document.getElementById("Title");

function rickRoll() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
}

the_paragraph = document.getElementById("paragraph1");

the_paragraph.onmouseenter = function () {
    the_paragraph.style.color = "RoyalBlue";
    the_paragraph.style.backgroundColor = "white";
};

function showFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function search() {
    var searchedWord = document.getElementById("user-search").value;
    var compiledSearchLink = "/display/" + searchedWord;
    window.location.href = compiledSearchLink;
}

var input = document.getElementById("user-search");


input.addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
    
    event.preventDefault();
    
    document.getElementById("user-search").click();
  }
});

function submitCompiledLink() {
    // Get selected values from dropdowns
    var brand = document.getElementById("brand").value;
    var ram = document.getElementById("ram").value;
    var storage = document.getElementById("storage").value;
    console.log(ram);
    // Construct the URL based on selected values
    var compiledLink = "/display/" + brand + "/" + ram + "/" + storage;

    // Redirect to the compiled link
    window.location.href = compiledLink;
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit_specs_button").addEventListener("click", submitCompiledLink);
    document.getElementById("search_button").addEventListener("click", onloadSearchFunct);
});

function onloadFunct() {
    const pathstring = location.pathname;
    const pathlist = pathstring.split('/');
    const brand = pathlist[2];
    const ram = pathlist[3];
    const storage = pathlist[4];

    if (brand && ram && storage) {
        fetch(`/json/${brand}/${ram}/${storage}`)
            .then(response => response.json())
            .then(data => generateDisplay(data))
            .catch(error => console.error('Error fetching data:', error));
    }
}

function onloadSearchFunct() {
    const searchedWord = document.getElementById("user-search").value;

    if (!searchedWord) {
        alert("Please enter a search term.");
        return;
    }

    window.location.href = `/display/${searchedWord}`;
}

function generateDisplay(data) {
    const container = document.getElementById("myDIV");
    container.innerHTML = ''; // Clear previous contents

    if (!data.nameForLaptop || data.nameForLaptop.length === 0) {
        const errorMsg = document.createElement("p");
        errorMsg.innerText = data.message || "No laptops found or an error occurred.";
        container.appendChild(errorMsg);
        return;
    }

    const laptopNames = data.nameForLaptop;
    const laptopPrices = data.priceForLaptop;

    for (let i = 0; i < laptopNames.length; i++) {
        let pic = document.createElement('img');
        const nameHeading = document.createElement("h2");
        const pricePara = document.createElement("p");

        let nameText = document.createTextNode("Name of Laptop: " + laptopNames[i]);
        let priceText = document.createTextNode("Price: $" + laptopPrices[i]);

        pic.src = "/static/LaptopImages/laptop_3.png";  // Corrected path with forward slashes

        nameHeading.appendChild(nameText);
        pricePara.appendChild(priceText);

        container.appendChild(pic);
        container.appendChild(nameHeading);
        container.appendChild(pricePara);
    }
}

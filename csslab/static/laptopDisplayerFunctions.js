document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("brand").addEventListener("change", onLoadFunct);
    document.getElementById("ram").addEventListener("change", onLoadFunct);
    document.getElementById("storage").addEventListener("change", onLoadFunct);
    document.getElementById("search_button").addEventListener("click", onloadSearchFunct);
    document.getElementById("submit_specs_button").addEventListener("click", onLoadFunct);
});

function onLoadFunct() {
    const brand = document.getElementById("brand").value;
    const ram = document.getElementById("ram").value;
    const storage = document.getElementById("storage").value;

    if (!brand || !ram || !storage) {
        console.log("Incomplete filter selection.");
        return;
    }

    console.log("onLoad: " + brand + " " + ram + " " + storage);

    const queryURL = `/json/${brand}/${ram}/${storage}`;
    fetch(queryURL)
        .then(response => response.json())
        .then(data => generateDisplay(data))
        .catch(error => console.error('Error fetching data:', error));
}

function onloadSearchFunct() {
    const searchedWord = document.getElementById("user-search").value;
    if (!searchedWord) {
        console.log("Search query is empty.");
        return;
    }

    const queryURL = `/search/${searchedWord}`;
    fetch(queryURL)
        .then(response => response.json())
        .then(data => generateDisplay(data))
        .catch(error => console.error('Error fetching data:', error));
}

function generateDisplay(data) {
    const container = document.getElementById("myDIV");
    container.innerHTML = ''; // Clear previous contents

    if (!data.nameForLaptop || !data.priceForLaptop) {
        const errorMsg = document.createElement("p");
        errorMsg.innerText = "No laptops found or an error occurred.";
        container.appendChild(errorMsg);
        return;
    }

    const laptopNames = data.nameForLaptop;
    const laptopPrices = data.priceForLaptop;

    console.log(laptopNames);
    console.log(laptopPrices);

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
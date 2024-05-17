function onLoadFunct() {
    // Grab the brand, ram, storage from the URL
    // GET THE JSON from the Flask server
    // Call Generate Display
    const pathstring = location.pathname;
    const pathlist = pathstring.split('/');
    const brand = pathlist[2];
    const ram = pathlist[3];
    const storage = pathlist[4];

    console.log("onLoad: " + brand + " " + ram + " " + storage);

    const queryURL = `/json/${brand}/${ram}/${storage}`;
    fetch(queryURL)
        .then(response => response.json())
        .then(data => generateDisplay(data))
        .catch(error => console.error('Error fetching data:', error));
}
function onloadSearchFunct() {
    const searchPathstring = location.pathname;
    const searchPathlist = searchPathstring.split('/');
    const searchedWord = searchPathlist[2];

    const queryURL = `/search/${searchedWord}`;
    fetch(queryURL)
        .then(response => response.json())
        .then(data => generateDisplay(data))
        .catch(error => console.error('Error fetching data:', error));

}
function generateDisplay(data) {
    if (!data.nameForLaptop || !data.priceForLaptop) {
        // Display an error message if the expected data is not found
        const container = document.getElementById("myDIV");
        const errorMsg = document.createElement("p");
        errorMsg.innerText = "No laptops found or an error occurred.";
        container.appendChild(errorMsg);
        return;
    }

    const laptopNames = data.nameForLaptop;
    const laptopPrices = data.priceForLaptop;

    console.log(laptopNames);
    console.log(laptopPrices);

    const container = document.getElementById("myDIV");
    container.innerHTML = ''; // Clear previous contents

    for (let i = 0; i < laptopNames.length; i++) {
        let pic = document.createElement('img');
        const nameHeading = document.createElement("h2");
        const pricePara = document.createElement("p");

        let nameText = document.createTextNode("Name of Laptop: " + laptopNames[i]);
        let priceText = document.createTextNode("Price: $" + laptopPrices[i]);

        pic.src = "/static/LaptopImages/laptop_3.png";  // Corrected path with forward slashes

        nameHeading.appendChild(nameText);
        pricePara.appendChild(priceText);

        // Append to myDIV:
        container.appendChild(pic);
        container.appendChild(nameHeading);
        container.appendChild(pricePara);
    }
}
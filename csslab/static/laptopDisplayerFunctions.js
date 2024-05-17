function onLoadFunct() {
    // Grab the brand, ram, storage from the url
    // GET THE json from the Flask server
    // Call Generate Display
    pathstring = location.pathname;
    pathlist=pathstring.split('/');
    brand = pathlist[2];
    ram = pathlist[3];
    storage = pathlist[4];

    console.log("onLoad: " + brand + " " + ram + " " + storage)

    queryURL = "/json/"+brand+"/"+ram+"/"+storage;
    fetch(queryURL).then(response => response.json()).then(data => generateDisplay(data));
}

function generateDisplay(data) {
    const laptopNames = data['nameForLaptop'];
    const laptopPrices = data['priceForLaptop'];

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

        // Append to myDIV:
        const container = document.getElementById("myDIV");
        container.appendChild(pic);
        container.appendChild(nameHeading);
        container.appendChild(pricePara);
    }
}

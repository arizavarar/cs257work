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
        const para = document.createElement("p");
        pic.src = "/static/LaptopImages/laptop_3.png";  // Corrected path with forward slashes
        para.innerText = "Name of Laptop: " + laptopNames[i] + "<br>" +  " Price: $" + laptopPrices[i];
        // Append to myDIV:
        const container = document.getElementById("myDIV");
        container.appendChild(pic);
        container.appendChild(para);
    }
}

function onLoadFunct() {
    // Grab the brand, ram, storage from the url
    // GET THE json from the Flask server
    // Call Generate Display
    pathstring = location.pathname;
    pathlist=pathstring.split('/');
    brand = pathlist[1];
    ram = pathlist[2];
    storage = pathlist[3];

    console.log("onLoad: " + brand + " " + ram + " " + storage)

    queryURL = "/json/"+brand+"/"+ram+"/"+storage;
    fetch(queryURL).then(response => response.json()).then(data => generateDisplay(data));
}

function generateDisplay(data){

    the_json = data;
    laptopName = the_json['laptopsName']
    laptopPrices = the_json['laptopsPrices']

    console.log(laptopName)
    console.log(laptopPrices)

    /*
    for (let i = 0; i < brandName.size(); i++) {
        const para = document.createElement("p");
        para.innerText = "Name of Laptop: " + brandName[i] + " Ram: " + ramS[i] + " Storage size: " + storageS;
        // Append to body:
        document.getElementById("myDIV").appendChild(para);
      }
      */
        
}

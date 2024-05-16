function onLoadFunct() {
    // Grab the brand, ram, storage from the url
    // GET THE json from the Flask server
    // Call Generate Display
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

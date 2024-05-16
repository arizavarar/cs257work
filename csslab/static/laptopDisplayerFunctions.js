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

function generateDisplay(data){

    the_json = data;
    laptopName = the_json['nameForLaptop'];
    laptopPrices = the_json['priceForLaptop'];

    console.log(laptopName)
    console.log(laptopPrices)

    
    for (let i = 0; i < laptopName.length; i++) {
        const pic = document.createElement("img");
        const para = document.createElement("p");
        pic.scr = "LaptopImages/laptop_3.png"
        para.innerText = "Name of Laptop: " + laptopName[i] + " Price: " + laptopPrices[i];
        // Append to body:
        document.getElementById("myDIV").appendChild(pic);
        document.getElementById("myDIV").appendChild(para);
        
      }
      
        
}

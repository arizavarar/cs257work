function myFunc() {
    return brandName + ram
}

function generateDisplay(){

    //const para =  document.createElement("p");
    //para.innerText = brandName;
    //document.getElementById("myDIV").appendChild(para);
    for (let i = 0; i < brandName.length; i++) {
        const para = document.createElement("p");
        para.innerText = "Name of Laptop: " + brandName[i] + " Ram: " + ramS[i] + " Storage size: " + storageS;
        // Append to body:
        document.getElementById("myDIV").appendChild(para);
      }
        
}

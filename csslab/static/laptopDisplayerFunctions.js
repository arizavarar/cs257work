function myFunc() {
    return brandName + ram
}

function generateDisplay(){
    const para = document.createElement("p");
    para.innerText = "Name of Laptop: " + brandName + "Ram: " + ramS + "Storage size: " + storageS;
    // Append to body:
    document.getElementById("myDIV").appendChild(para);
}

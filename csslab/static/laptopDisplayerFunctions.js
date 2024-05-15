function myFunc() {
    return brandName + ram
}

function generateDisplay(){
    const para = document.createElement("p");
    para.innerText = "Name of Laptop: " + brandName + "Ram: " + ram + "Storage size: " + storage;
    // Append to body:
    document.getElementById("myDIV").appendChild(para);
}

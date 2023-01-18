//  Getting elements

const slicedText = document.getElementById("sliced-text")
const currentYear = document.querySelector("span.year")
//  sliced text

const theText = "Innovating with Technology";
let theStart = 1;

slicer();
function slicer() {
    slicedText.textContent = theText.slice(0,theStart)
    theStart++;
    setTimeout(slicer,100)
}

//  current year
currentYear.textContent = new Date().getFullYear() 

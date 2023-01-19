//  Getting elements

const slicedText = document.getElementById("sliced-text")
//  sliced text

const theText = "Innovating with Technology";
let theStart = 1;

slicer();
function slicer() {
    slicedText.textContent = theText.slice(0,theStart)
    theStart++;
    setTimeout(slicer,100)
}


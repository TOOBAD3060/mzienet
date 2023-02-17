//  Getting elements

const slicedText = document.getElementById("sliced-text")
const descImgContainer = document.querySelector(".desc-images")   //conatiner show all desc img
const descImg = document.querySelectorAll(".desc-images img")
const fullDescImgContainer = document.querySelector(".desc-images-full-view")  // container for full img (the clicked one)
const fullDescImg = document.querySelector(".desc-images-full-view img")
const imgCloseBtn = document.querySelector(".desc-images-full-view #close-btn")

//  sliced text

const theText = "Innovating with Technology";
let theStart = 1;

slicer();
function slicer() {
    slicedText.textContent = theText.slice(0,theStart)
    theStart++;
    setTimeout(slicer,100)
}

// show full pics 


//   =    "

let currentFullImg = "";

descImg.forEach((item,index)=>{
     item.addEventListener("click",()=>{

        // get the clicked image
        currentFullImg = item.getAttribute("src");
        //  set the full img to display
        fullDescImg.setAttribute("src",currentFullImg);   
        
         // show full image
     fullDescImgContainer.classList.add("active")

    //  hide all images
    descImgContainer.classList.add("inactive") 
        } )
})

imgCloseBtn.addEventListener("click",()=>{
    // hide full image
    fullDescImgContainer.classList.remove("active")

    //  show all images
    descImgContainer.classList.remove("inactive")
})
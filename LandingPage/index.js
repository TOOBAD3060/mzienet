//  Getting elements

const slicedText = document.getElementById('sliced-text');
const descImgContainer = document.querySelector('.desc-images'); //conatiner show all desc img
const descImg = document.querySelectorAll('.desc-images img');
const fullDescImgContainer = document.querySelector('.desc-images-full-view'); // container for full img (the clicked one)
const fullDescImg = document.querySelector('.desc-images-full-view img');
const imgCloseBtn = document.querySelector('.desc-images-full-view #close-btn');

const leftBtn = document.querySelector('.bx.bx-chevron-left'),
  rightBtn = document.querySelector('.bx.bx-chevron-right');

//  sliced text

const theText = 'Innovating with Technology';
let theStart = 5;

slicer();
function slicer() {
  slicedText.textContent = theText.slice(0, theStart);
  theStart++;
  setTimeout(slicer, 100);
}


let currentFullImg = '';

descImg.forEach((item, index) => {
  item.addEventListener('click', () => {
    // get the clicked image
    currentFullImg = item.getAttribute('src');
    //  set the full img to display
    fullDescImg.setAttribute('src', currentFullImg);

    // show full image
    fullDescImgContainer.classList.add('active');
  });
});

imgCloseBtn.addEventListener('click', () => {
  // hide full image
  fullDescImgContainer.classList.remove('active');

  //  show all images
  descImgContainer.classList.remove('inactive');
});

const picArr = [
  '/images/three.JPG',
  '/images/five.JPG',
  '/images/four.JPG',
  '/images/two.JPG',
  '/images/six.JPG',
  '/images/nine.JPG',
  '/images/seven.JPG',
];


let theFullImg = fullDescImg.getAttribute('src');
let newSrc = picArr.indexOf(theFullImg);
let number = 0;




leftBtn.addEventListener('click', () => {
 
    
    
    if(newSrc === 0){
      newSrc = picArr.length - 1;
    fullDescImg.setAttribute('src', picArr[newSrc]);

    }
    else{
      newSrc--; 
      fullDescImg.setAttribute('src', picArr[newSrc]);
    }
    
    console.log(newSrc);
  }
  
);

rightBtn.addEventListener('click', () => {
 
  
  if(newSrc === picArr.length - 1 ){
  newSrc = 0; 
  fullDescImg.setAttribute('src', picArr[newSrc]);

  }
  else{
    newSrc++ ;
     fullDescImg.setAttribute('src', picArr[newSrc]);
  }
 
  console.log(newSrc);

}
);




// rightBtn.addEventListener('click', () => {

//     for (i = 0; i < picArr.length; i++) {
//         currentFullImg = fullDescImg.getAttribute('src');

//         if (currentFullImg == picArr[i]) {
//         if (i > picArr.length - 1) {
//             newSrc = 0;
//         } else {
//             newSrc == i + 1;
//         }
//         fullDescImg.setAttribute('src', picArr[newSrc]);
//         }
//         console.log(i);
//     }
// });


// leftBtn.addEventListener('click', () => {
//   for (i = 0; i < picArr.length; i++) {
//     currentFullImg = fullDescImg.getAttribute('src');

//     if (currentFullImg == picArr[i]) {
//       if (i == 0) {
//         newSrc = picArr.length - 1;
//       } else {
//         newSrc = i - 1;
//       }

//       fullDescImg.setAttribute('src', picArr[newSrc]);
//     }
//   }
// });

// rightBtn.addEventListener('click', () => {

//     for (i = 0; i < picArr.length; i++) {
//         currentFullImg = fullDescImg.getAttribute('src');

//         if (currentFullImg == picArr[i]) {
//         if (i > picArr.length - 1) {
//             newSrc = 0;
//         } else {
//             newSrc == i + 1;
//         }
//         fullDescImg.setAttribute('src', picArr[newSrc]);
//         }
//     }
// });




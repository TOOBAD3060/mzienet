// Drop down implementation
const dropDown1 = document.getElementById("dropdown1");
const dropDown2 = document.getElementById("dropdown2");
const dropDownMenu1 = document.querySelector("ul.drop-down-menus")
const dropDownMenu2 = document.querySelector("ul.services-drop-down")

dropDown1.addEventListener("click",()=>{
    dropDownMenu1.classList.toggle("active")
    dropDownMenu2.classList.remove("active")
})
dropDown2.addEventListener("click",()=>{
    dropDownMenu2.classList.toggle("active")
    dropDownMenu1.classList.remove("active")

})




//  current year
const currentYear = document.querySelector("span.year")
currentYear.textContent = new Date().getFullYear() 

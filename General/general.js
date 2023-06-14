//  current year
const currentYear = document.querySelectorAll("span.year")
currentYear[0].textContent = new Date().getFullYear() 
currentYear[1].textContent = new Date().getFullYear() 

const hamburger = document.querySelector('.hamburger')
const menu_start = document.querySelector('#menu');
const menu_close = document.querySelector('#menu-close');
const hamburger_child = document.querySelector('.drop-down');


menu_start.addEventListener('click', () =>{
    menu_close.classList.toggle('active');
    hamburger_child.classList.toggle('active');
    menu_start.classList.toggle('active');
  
  
})
 
menu_close.addEventListener('click', () =>{
    menu_close.classList.toggle('active');
    hamburger_child.classList.toggle('active');
    menu_start.classList.toggle('active');
  })


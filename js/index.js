// Your code goes here

// 1. click
const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('click', (event) =>{
   if  (event.target.style.color === 'yellow') {
       event.target.style.color = 'black';
   } else {
       event.target.style.color = 'yellow';
   } 
})

// 2. mouseenter
const headerIMG = document.querySelector('.mouseEnter');
headerIMG.addEventListener('mouseenter', (event) =>{
   event.target.style.transform = 'scale(1.1)';
   event.target.style.transition = 'transform .7s';
})

// mouseleave
headerIMG.addEventListener('mouseleave', (event) =>{
   event.target.style.transform = 'scale(1)';
})

// dblclick
const doubleClick = document.querySelector('.double-click');

doubleClick.addEventListener('dblclick', (event) => {
   event.target.parentElement.style.transform = 'rotate(360deg)';
   event.target.parentElement.style.transition = 'transform 1s';
})


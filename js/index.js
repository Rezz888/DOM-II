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

// 3. mouseleave
headerIMG.addEventListener('mouseleave', (event) =>{
   event.target.style.transform = 'scale(1)';
})

// 4. dblclick
const doubleClick = document.querySelector('.double-click');

doubleClick.addEventListener('dblclick', (event) => {
   event.target.parentElement.style.transform = 'rotate(360deg)';
   event.target.parentElement.style.transition = 'transform 1s';
})

// 5. mouseover
const mouseOver = document.querySelector('.text-content');
mouseOver.addEventListener('mouseover', (event)=>{
    event.target.style.color = 'orange';
})

// 6. mouseout
mouseOver.addEventListener('mouseout', (event) =>{
   event.target.style.color = 'black';
})

// 7. wheel

   const body = document.querySelector('body');
   body.addEventListener('wheel', function alertMeOnce(){
   alert("WAIT!! FASTEN YOUR SEAT BELT FIRST");
   body.removeEventListener('wheel', alertMeOnce);
 });

// 8. keydown

 const header = document.querySelector('header');
 body.addEventListener("keydown", () => header.style.opacity = "0");

 header.addEventListener('mouseenter', () => {
   header.style.opacity = "1";
   
 });

// 9. drag

 const dragThePic = document.querySelector(".content-destination > img" );
 dragThePic.addEventListener('drag', (event) =>{
    event.target.style.transform = 'scale(1.5)';
    })

// 10. load

window.addEventListener("load", function(event) {
   alert("This is to showcase the 'load' event");
    })

// Preventing event propagation

const stopEventProp = document.querySelectorAll('h4');
stopEventProp.forEach((el)=>{
   el.addEventListener('click', (event)=>{
      event.stopPropagation();
      event.target.style.color = 'dodgerblue';
   })
})

const stopEventProp1 = document.querySelectorAll('.content-pick');
stopEventProp1.forEach((el) =>{
   el.addEventListener('click', ()=>{
      el.style.backgroundColor = 'honeydew';
   })
})

// Stop the navigation items from refreshing the page by using preventDefault()
const stopNavHyperlink = document.querySelectorAll('.nav-link');
stopNavHyperlink.forEach((el)=>{
  el.addEventListener('click', (event)=>{
     event.preventDefault();
  })
})

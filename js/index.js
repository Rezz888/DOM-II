// Your code goes here

// 1. click
const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('click', (e)=> {
   if (e.target.style.color === 'yellow') {
      e.target.style.color = 'black';
   } else {
      e.target.style.color = 'yellow';
   
   }
})

// 2. mouseenter
const headerIMG = document.querySelector('.mouse-enter');
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
   event.target.style.transform = 'rotate(360deg)';
   event.target.style.transition = 'transform 4s';
})
/*This is the same example with parent element*/

// doubleClick.addEventListener('dblclick', (event) => {
//    event.target.parentElement.style.transform = 'rotate(360deg)';
//    event.target.parentElement.style.transition = 'transform 4s';
// })

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
   alert("WAIT!! FASTEN YOUR SEAT BELT FIRST - wheel example");
   body.removeEventListener('wheel', alertMeOnce);
 });

// 8. keydown

 const header = document.querySelector('header');
 document.addEventListener("keydown", (e) => {
     header.style.opacity = "0";
   });

 document.addEventListener('mouseenter', (e) => {
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

// Just experimenting with toggle
function clickHandler(){
   const body = document.querySelector('body');
   body.classList.toggle('dark-mode');
}

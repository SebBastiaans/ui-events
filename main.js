/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...

// Stap 2: addEventListener
// scaleLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...

//1--------------------------
let scaleLink = document.querySelector('a[href="#frontend"]')

scaleLink.addEventListener('click', function(){
  scaleLink.classList.add('scale')
})
scaleLink.addEventListener('animationend', function(){
  scaleLink.classList.remove('scale')
})

//3--------------------------

let translateLink = document.querySelector('a[href="#and"]')

translateLink.addEventListener('click', function(){
  translateLink.classList.add('translate')
})

translateLink.addEventListener('animationend', function(){
  translateLink.classList.remove('translate')
})

//4---------------------------

let shakeLink = document.querySelector('a[href="#development"]')


shakeLink.addEventListener('dblclick', function(){
  shakeLink.classList.add('shake')
  console.log(shakeLink)
})

//5---------------------------------

let colorChangeLink = document.querySelector('a[href="#sprint-5"]')

colorChangeLink.addEventListener('focus', function(){
  colorChangeLink.classList.add('color-change')
})

//6-----------------------------

let textChangeLink = document.querySelector('a[href="#fix"]')

textChangeLink.addEventListener('mouseover', function(){
  textChangeLink.textContent = 'hoi'
})

//7----------------------------
let rotateTheLink = document.querySelector('a[href="#the"]')

rotateTheLink.addEventListener('mouseout', function(){
  rotateTheLink.classList.add('rotate-the')
})

//8-----------------------------
let flipFlow = document.querySelector('a[href="#flow"]')

flipFlow.addEventListener('mousedown', function(){
  flipFlow.classList.add('flip-flow')
})

flipFlow.addEventListener('mouseup', function(){
  flipFlow.classList.add('flip-flow-reverse')
})

flipFlow.addEventListener('animationend', function(){
  flipFlow.classList.remove('flip-flow', 'flip-flow-reverse')
})

//9------------------------------

let userKey = document.querySelector('a[href="#user"]')

userKey.addEventListener('keyup', function(event){
  if (event.key === 's'){
    userKey.classList.toggle('user')
  }
})

//10-------------------------------

let balloonPop = document.querySelector('a[href="#interface"]');

balloonPop.addEventListener('keydown', function (event) {
  if (event.key === 'b'){
    balloonPop.classList.add('balloon')
  }
});

balloonPop.addEventListener('keyup', function(event){
  if (event.key === 'b'){
    balloonPop.classList.remove('balloon')
    balloonPop.classList.add('balloon-deflate')
  }
})

balloonPop.addEventListener('animationend', function(){
  balloonPop.classList.remove('balloon-deflate')
})

//11---------------------------------

// let wheelScroll = document.querySelector('a[href="#events"]');

// wheelScroll.addEventListener('wheel', function (Y) {
//   wheelScroll.style.setProperty("--font", Y.deltaY + "px");
// });

//12---------------------------------

let mouse = document.querySelector('a[href="#interaction"]');

mouse.addEventListener("mousemove", function (move) {
  mouse.style.setProperty("--y", move.offsetY + "px");
  mouse.style.setProperty("--x", move.offsetX + "px");
});




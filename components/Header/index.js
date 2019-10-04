// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
let headerContainer = document.querySelector('.header-container')

function Header() {
let 
 head = document.createElement('div'),
 dates = document.createElement('span'),
 title = document.createElement('h1'),
 temp = document.createElement('span')

head.classList.add('header')
dates.classList.add('date')
temp.classList.add('temp')

dates.textContent = 'SMARCH 28, 2019';
title.textContent = 'Lambda Times'
temp.textContent = '98°'

head.appendChild(dates)
head.appendChild(title)
head.appendChild(temp)

return head;
}

headerContainer.appendChild(Header())


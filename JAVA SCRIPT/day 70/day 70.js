
const headingElement = document.getElementById('content');
console.log(headingElement);


const h1Element = headingElement.querySelector('h1');
const paragraphElement = headingElement.querySelector('p');
console.log(h1Element.textContent); 
console.log(paragraphElement.textContent); 


const allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs); 

for (let i = 0; i < allParagraphs.length; i++) {
    console.log(allParagraphs[i].textContent);
}


const buttons = document.getElementsByClassName('button');
console.log(buttons); 


for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i].textContent);
}


const firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent); 

const firstButton = document.querySelector('#myButton');
console.log(firstButton.textContent); 

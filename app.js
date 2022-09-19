//const title = document.getElementById('main-heading');
//console.log(title);

//const listItem = document.getElementsByClassName('list-items');
//console.log(listItem);

//const listItems = document.getElementsByTagName('li');
//console.log(listItems);

//const container = document.querySelector('div');
//console.log(container);

//const container = document.querySelectorAll('div');
//console.log(container);

//const title = document.querySelector('#main-heading');
//console.log(title);

//title.style.color = 'red';

//const listItems = document.querySelectorAll('.list-items');
//console.log(listItems);


//for(i=0; i < listItems.length; i++) {
  //   listItems[i].style.fontSize = '5rem';
//}

//Creating Elements

//const ul = document.querySelector('ul');
//const li = document.createElement('li');

//console.log(li);

//Adding Elements

//ul.append(li)

//Modifying the text
//li.innertext = 'X-men';

//Modifying Attributes and Classes

//li.setAttribute('id', 'main-heading');
//li.removeAttribute('id');

//li.classList.add('list-items');
//console.log(li.classList.contains('list-items'));

//li.remove(); 



// Parent Node Traversal
//let ul = document.querySelector('ul');

//console.log(ul.parentNode.parentNode);
//console.log(ul.parentElement.parentElement);

//const html = document.documentElement;

///console.log(html.parentNode);
//console.log(html.parentElement);


// Child Node Traversal
//let ul = document.querySelector('ul');

//console.log(ul.childNodes);
//console.log(ul.firstChild);
//console.log(ul.lastChild);

//ul.childNodes[3].style.backgroundColor = 'yellow';

//console.log(ul.children);
//console.log(ul.firstElementChild);
//console.log(ul.lastElementChild);


//Sibling Node Traversal
//let ul = document.querySelector('ul');

//const div = document.querySelector('div');
//console.log(div.childNodes);


//console.log(ul.previousElementSibling);
//console.log(ul.nextElementSibling);


//Event Listeners
//const buttonTwo = document.querySelector('.btn-2');

//function alertBtn() {
  //alert('Dixit loves Javascript');
//}

//buttonTwo.addEventListener("click", alertBtn);


//MouseOver

//const newBackgroundColor = document.querySelector('.box-3');

//function changeBgColor() {
//newBackgroundColor.style.backgroundColor = "blue";
//}

//newBackgroundColor.addEventListener("mouseover", changeBgColor);


//Event Probagation

//window.addEventListener("click", function() {
  //console.log('Window');
//}, false);


//document.addEventListener("click", function(e) {
  //e.stopPropagation()
  //console.log('Document');
//}, false);

//document.querySelector(".div-2").addEventListener("click", function() {
  //console.log('DIV-2');
//},{once: true});

//document.querySelector(".div-1").addEventListener("click", function() {
  //console.log('DIV-1');
//}, false);

//document.querySelector(".button").addEventListener("click", function(e) {
  //e.preventDefault()
  //console.log(e.target.innertext = 'Clicked');
//}, false);


//document.querySelector('#football').addEventListener('click', function(e) {
 // console.log("football is clicked.");

  //const target = e.target;
  //if(target.matches('li')) {
    //target.style.backgroundColor = 'lightgrey';
  //}


//})

//document.querySelector('#basketball').addEventListener('click', function(e) {
  //console.log("basketball is clicked.");

  //const target = e.target;
  //if(target.matches('li')) {
   // target.style.backgroundColor = 'lightgrey';
  //}


//})

//document.querySelector('#boxing').addEventListener('click', function(e) {
  //console.log("boxing is clicked.");

  //const target = e.target;
  //if(target.matches('li')) {
    //target.style.backgroundColor = 'lightgrey';
  //}


//})

//document.querySelector('#tennis').addEventListener('click', function(e) {
  //console.log("tennis is clicked.");

  //const target = e.target;
  //if(target.matches('li')) {
    //target.style.backgroundColor = 'lightgrey';
  //}


//})


//document.querySelector('#golf').addEventListener('click', function(e) {
  //console.log("golf is clicked.");

  //const target = e.target;
  //if(target.matches('li')) {
    //target.style.backgroundColor = 'lightgrey';
  //}


//})

document.querySelector('#sports').addEventListener('click', function(e) {
  console.log(e.target.getAttribute('id') + 'is clicked.');

  const target = e.target;
  if(target.matches('li')) {
    target.style.backgroundColor = 'red';
  }
})

const sports = document.querySelector('#sports')
const newSport = document.createElement('li');

newSport.innerText = "Rugby";
document.setAttribute('id', 'rugby');
sports.appendChild(newSport);
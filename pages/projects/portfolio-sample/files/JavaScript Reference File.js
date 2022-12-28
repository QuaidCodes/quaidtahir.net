// JS reference file

// String Interpolation
let name = 'Jade';
    // Needs to have backstick quotes.
console.log(`My name is ${name}`); // Prints: My name is Jade

// Short Circuit evaluation
let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger

// Teranary Operators


// selector document.getElementById('');
const header = document.getElementById('header');

// To print in the console
console.log(header);

// Adds text with respect to styling
header.innerText = "something"; 

// Adds text without any regard for styling
header.textContent = "text";

// adding html via javascript, doesn't change the original element.
header.innerHTML = '<h3>Hello</h3>'

// To style html elements
header.style.borderBottom = "3px solid #000";

// Get element by class name //
const items = document.getElementsByClassName('list-group-item');

// Have to use indexes since it is creating a dom collection
console.log(items[1]);

// Get element by tag name (works the same way as getElementsByClassName)
const li = document.getElementsByTagName('li');
console.log(li[1]);

// Query Selector(use to grab only the first item) //
// Can use anything inside # for id . for class and tag names like normal
// If there is more than one element with the same class then only the first one
// is selected
const header = document.querySelector('#main-header');
header.style.borderBottom = "solid 4px #ccc";

var input = document.querySelector('input');
input.value = "Hello World";

var submit = document.querySelector('input[type="submit"]');
submit.value = "send";

// Will grab the first .list-group-item tag
var item = document.querySelector('.list-group-item');
item.style.color = "red";

// If I wanted to grab the last item then we use the css pseudo selector
// property last child
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = "blue";

// If I wanted to grab a specific element then we use the nth child css property
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = "crimson";

// QuerySelector All(works similar to getElementBy Tag & Class name)//
var titles = document.querySelectorAll('.title');
// the above code will give us a node list in which array methods can be run

titles[0].textContent = "hello";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length; ++i){
    odd[i].style.backgroundColor = "#f4f4f4";
    even[i].style.backgroundColor = "#f4f4f4";
}

// Traversing the DOM //
var itemList = querySelector('#items');

// parent node (if the #items is within another element than the parent element 
// will be grabbed)
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode); // parent node can be chained

// parentElement similar to parentNode, they can be used interchangebly

// childNodes (gives an array, whitespace is also added as an index(such as line 
// break)), not best practice to use childNodes, use children
console.log(item.childNodes);;

// children(gives an html collection)
console.log(itemList.children);
console.log(itemList.children[1]);

// firstChild, not the best practice since it gives text nodes
console.log(itemList.firstChild);

// firstElementChild, will give us the first itemList child
console.log(itemList.firstElementChild);

// lastElementChild and lastChild

// nextSibling, gives text node if there is one, use nextElementSibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

// previousSibling, gives text node use previousElementSibling
console.log(itemList.perviousSibling);

// method called createElement 

// div creation
var newDiv = document.createElement('div');

newDiv.className = 'hello';

// add id on that div (any attribute can be added like this)
newDiv.id = "hello-id";

// Create text node in the div 
var newDivText = document.createTextNode('HelloWorld');

// Add text to div with append
newDiv.appendChild(newDivText);

// as of now this div only exist in the JS not the html dom

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

// inserBefore takes 2 parameters the 1st=what is being inserted and 2nd=what  
// we are inserting before
container.insertBefore(newDiv, h1);

console.log(newDiv);

// Interactivity eventListener();
var button = document.getElementById('button1').addEventListener
('click', function(){
    console.log("123");
});


var button = document.getElementById('button1').addEventListener
('click', buttonClick);

function buttonClick(){
    document.getElementById('header-title').textContent = "changed";
    document.querySelector('#main').style.backgroundColor = "#f4f4f4";
}

// When you run a event listner, you can call a parameter typically event/e
// gives all the different properties, such as mouse position, click etc.

function buttonClick(e){
    console.log(e); // Gives list of properties
    console.log(e.target); // Gives the element from which the event is fired form
    console.log(e.id); // Gives id of the targeted element
    console.log(e.className) // Gives class of the targeted element in a string
    console.log(e.classList) // Gives class in dom token list form, like an array

    console.log(e.type); // Tells us what type of event it is e.g a click a key down etc.

    console.log(e.clientX); // Position from the left browser window
    console.log(e.clientY); // Position from the top browser window

    console.log(e.offsetX); // Position of mouse in the element
    console.log(e.offsetY); // Position of the mouse in the element

    // Test if any keys are being held down, will give a boolean value
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e.ctrlKey);
}

// Mouse Events

var button = document.getElementById('button1');

button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent); //user presses mouse1 2x
button.addEventListener('mousedown', runEvent); //as soon as user presses mouse 1
button.addEventListener('updown', runEvent); // when user lets go of mouse1

function runEvent(){
    console.log('Event Type: ' + e.type);
}

// checks if enter key was pressed
document.getElementById('name').addEventListener('keydown', (e) => {
    if(e.key == 'Enter')
        document.querySelector('#no-error').innerHTML = document.querySelector('#name').value;
    
});









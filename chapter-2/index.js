// Setting the textContent property of an Element.

document.getElementById('paragraph').textContent = 'Hello world'

// Create a new HTML element programmatically.

var element = document.createElement('p');
element.textContent = "Hello, World";
document.body.appendChild(element); // hear I'm add the newly element to the DOM
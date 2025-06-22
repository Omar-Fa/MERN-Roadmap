const container = document.querySelector('#container');
const p1 = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');

p1.textContent = "Hey I'm red!";
p1.style.color = 'red';
container.appendChild(p1);

h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';
container.appendChild(h3);

container.appendChild(div);
div.style.backgroundColor = 'pink';
div.style.border = '2px solid black';

h1.textContent = "I'm in a div";
div.appendChild(h1);

p2.textContent = 'ME TOO!';
div.appendChild(p2);

// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});


// the JavaScript file
const btn2 = document.querySelector('#btn-too');
btn2.addEventListener('click', () => {
  alert('Hello World');
});

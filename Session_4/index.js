console.log("hello from javascript");
/*
function appendToParent(parent, childTagType, text) {
  const par = document.getElementById(parent);
  const child = document.createElement(childTagType);
  child.textContent = text;
  par.appendChild(child);
}
appendToParent("elem", "li", "Iron Man");*/
/*function showGreeting(name) {
  console.log("Hello " + name + "!");
}
//setTimeout(showGreeting("Moto"), 3000);
setTimeout(() => showGreeting("Moto"), 3000);
*/

console.log("Greetings Start");

function showGreeting(name) {
  console.log("Hello " + name + "!");
}

console.log("Greeting Rohan");
setTimeout(() => showGreeting("Rohan"), 5000);

console.log("Greetings End");

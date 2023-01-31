//Event Listener on GrandParent
document.getElementById("grandparent").addEventListener("click", (e) => {
  console.log(e.target);
  console.log("Grandparent Clicked");
});

//Event Listener on Parent
document.getElementById("parent").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  console.log("Parent Clicked");
});

//NO Event Listener on Child!

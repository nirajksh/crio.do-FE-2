const myButton = document.getElementById("btn");
myButton.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target.id); //btn
  console.log(e.target.className); //btn btn-lg-blue
});
const myInput = document.getElementById("firstname");
myInput.addEventListener("click", (e) => {
  //console.log(e);
  //e.target.value = "Yay";
  //console.log(e.target.placeholder);
  console.log(e.target.value);
});

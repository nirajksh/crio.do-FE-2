const data = {
  fullname: "",
  email: ""
};
const showButton = document.getElementById("btn");
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");

const handleInput = (e) => {
  const key = e.target.name;
  const value = e.target.value;
  data[key] = value;
};
fullnameInput.addEventListener("input", handleInput);
emailInput.addEventListener("input", handleInput);
showButton.addEventListener("click", (e) => {
  console.log(data);
});

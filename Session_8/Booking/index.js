document.getElementById("radio-btn").addEventListener("input", (e) => {
  console.log(e.target.value);
});

document.getElementById("date").addEventListener("change", (e) => {
  console.log(e.target.value);
  const dateInput = new Date(e.target.value);
  console.log(dateInput.toUTCString());
  //console.log(dateInput.toLocaleDateString("en-IN"));
});

document.getElementById("time").addEventListener("change", (e) => {
  console.log(e.target.value);
});

document.getElementById("colors").addEventListener("click", (e) => {
  //console.log(e.target);
  const selectedDiv = document.getElementById("selected");
  selectedDiv.style.backgroundColor = e.target.id;
  selectedDiv.textContent = "Selected Color: " + e.target.id;
});

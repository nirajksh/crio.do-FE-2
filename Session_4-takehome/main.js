function generateSortedList(arr) {
  arr.sort();
  console.log(arr);
  const parentElement = document.getElementById("sorted-list");
  console.log(parentElement);

  arr.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    console.log(li);
    parentElement.append(li);
  });
}

generateSortedList([2, 1, 4, 3]);

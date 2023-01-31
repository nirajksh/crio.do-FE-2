function generateSortedList(arr) {
  arr.sort((a, b) => a - b);
  // for(let i=0; i<arr.length; i++){
  //   appendToParent("table", "li", arr[i]);
  // }
  console.log(arr);
  arr.forEach((element) => {
    appendToParent("table", "li", element);
  });
}
generateSortedList([58, 89, 12, 28, 5, 99]);

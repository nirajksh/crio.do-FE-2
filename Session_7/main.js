/*function doSomething(){
  console.log("hello");

}*/
const getCount = () => {
  const count = document.getElementById("counter").textContent;
  return parseInt(count);
};
function increment() {
  const currentCount = getCount();
  document.getElementById("counter").textContent = currentCount + 1;
}
function decrement() {
  const currentCount = getCount();
  document.getElementById("counter").textContent = currentCount - 1;
}
const increaseBtn = document.getElementById("btn-increase");
increaseBtn.addEventListener("click", increment);

const decreaseBtn = document.getElementById("btn-decrease");
decreaseBtn.addEventListener("click", decrement);

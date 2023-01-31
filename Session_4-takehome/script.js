console.log("Hello, javascript");
function addNewChildElementToParent(parentId, childTagType, text) {
  const parentElement = document.getElementById(parentId);
  const childElement = document.createElement(childTagType);
  childElement.textContent = text;
  console.log(childElement);
  parentElement.append(childElement);
}
addNewChildElementToParent("numbers-list", "li", "3");
addNewChildElementToParent("text-paras", "p", "hey there");

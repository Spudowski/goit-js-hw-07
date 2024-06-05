const categoriesNumber = document.getElementById('categories').children.length;
console.log(`Number of categories: ${categoriesNumber}`);

const itemsElement = document.querySelectorAll(".item");
itemsElement.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});
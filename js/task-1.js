const list = document.querySelector("#categories");

const items = list.querySelectorAll(".item");

console.log(`Number of categories: ${list.childElementCount}`);

for (const item of items) {
  const heading = item.querySelector("h2");
  const itemElements = item.querySelectorAll("li");
  const numberOfElements = itemElements.length;

  console.log(`Category: ${heading.textContent}`);
  console.log(`Elements: ${numberOfElements}`);
}

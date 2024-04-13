function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input[type=number]");

const createBtn = document.querySelector("[data-create]");

const destroyBtn = document.querySelector("[data-destroy]");

const resultArea = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    const size = 30 + i * 10;

    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    resultArea.append(newDiv);
  }
}

function destroyBoxes() {
  resultArea.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = input.value;

  if (amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes();
  createBoxes(amount);

  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);

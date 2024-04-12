const input = document.querySelector("#name-input");

const showName = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const trimmedInputValue = event.currentTarget.value.trim();
  showName.textContent = trimmedInputValue;

  if (!trimmedInputValue) {
    showName.textContent = "Anonymous";
  }
});

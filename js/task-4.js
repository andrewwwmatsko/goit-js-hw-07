const form = document.querySelector(".login-form");

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();

  const form = e.target;

  //   const emailInput = form.querySelector("[type=email]").value;

  //   const passwordInput = form.querySelector("[type=password]").value;

  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || !password === "") {
    return alert("All form fields must be filled in");
  }

  console.log({
    email: login,
    password,
  });

  form.reset();
}

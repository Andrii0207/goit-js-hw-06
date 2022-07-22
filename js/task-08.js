const formRegitration = document.querySelector('.login-form');
console.log(formRegitration);

formRegitration.addEventListener('submit', onFormRegitrationSubmit);

function onFormRegitrationSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const emailInput = formElements.email.value;
  const passwordInput = formElements.password.value;

  if (emailInput === '' || passwordInput === '') {
    alert('Please fill in all fields of the form!');
    return;
  }

  const formData = {
    email: emailInput,
    password: passwordInput,
  };
  console.log(formData);
  event.currentTarget.reset();
}

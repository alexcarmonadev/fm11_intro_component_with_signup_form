// ------------LAS CONSTANTES------------
const form = document.getElementById('form');
const inputs = form.querySelectorAll('.form-inputbox');
const email = document.getElementById('email');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const password = document.getElementById('password');

// ------------VALIDAR EMAIL------------
const emailRegex =
  /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// ------------VALIDAR PASSWORD------------
// Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
const passwordRegex =
  /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;

// ------------VALIDAR FORMULARIO------------
const validateForm = () => {
  inputs.forEach((input) => {
    if (
      input.firstElementChild.value.trim() === '' &&
      input.firstElementChild.name !== 'email'
    ) {
      input.classList.add('form-inputbox--error');
    } else {
      input.classList.remove('form-inputbox--error');
    }
  });

  if (!emailRegex.test(form.email.value.toLowerCase().trim())) {
    form.email.parentElement.classList.add('form-inputbox--error');
    email.placeholder = 'email@example/com';
    fname.placeholder = '';
    lname.placeholder = '';
    password.placeholder = '';
  } else {
    form.email.parentElement.classList.remove('form-inputbox--error');
  }

  if (!passwordRegex.test(form.password.value)) {
    form.password.parentElement.classList.add('form-inputbox--error');
  } else {
    form.password.parentElement.classList.remove('form-inputbox--error');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

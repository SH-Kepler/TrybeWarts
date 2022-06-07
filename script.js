const formButton = document.getElementById('formButton');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitFormButton = document.getElementById('submit-btn');
const requiredCheckbox = document.getElementById('agreement');
submitFormButton.disabled = true;

function submitCheck() {
  if (requiredCheckbox.checked) {
    submitFormButton.disabled = false;
  } else {
    submitFormButton.disabled = true;
  }
}

function loginCheck(e) {
  e.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

formButton.addEventListener('click', loginCheck);
requiredCheckbox.addEventListener('change', submitCheck);

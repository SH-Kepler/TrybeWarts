const formButton = document.getElementById('formButton');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitFormButton = document.getElementById('submit-btn');
const requiredCheckbox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
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

function getCounter() {
  const counter = document.getElementById('counter');
  const limit = 500;
  const count = textarea.value.length;
  const rest = limit - count;
  counter.innerHTML = rest;
}

textarea.addEventListener('keydown', getCounter);
textarea.addEventListener('keyup', getCounter);
formButton.addEventListener('click', loginCheck);
requiredCheckbox.addEventListener('change', submitCheck);

// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const formElement = document.getElementById('form');
const inputNameElement = document.getElementById('card-name-form');
const formNameElement = document.getElementById('card-name');
const inputNumberElement = document.getElementById('card-number-form');
const formNumberElement = document.getElementById('card-number');

formElement.addEventListener('input', event => {
  formNameElement.textContent = inputNameElement.value;
  formNumberElement.textContent = inputNumberElement.value;
  console.log(event.target.value);
});
formElement.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.target.name.value);
});

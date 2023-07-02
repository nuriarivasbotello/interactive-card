// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const formElement = document.getElementById('form');
const inputNameElement = document.getElementById('name');

inputNameElement.addEventListener('change', event => {
  console.log(event.target.value);
});
formElement.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.target.name.value);
});

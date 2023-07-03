// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const formElement = document.getElementById('form');
const cardNameElement = document.getElementById('card-name');
const formNameElement = document.getElementById('name-form');
const cardNumberElement = document.getElementById('card-number');
const formNumberElement = document.getElementById('number-form');
const cardMonthElement = document.getElementById('card-month');
const formMonthElement = document.getElementById('month-form');
const cardYearElement = document.getElementById('card-year');
const formYearElement = document.getElementById('year-form');
const cardCvElement = document.getElementById('card-cv-number');
const formCvElement = document.getElementById('cv-form');
const formConfirm = document.getElementById('confirm');

formNameElement.addEventListener('input', event => {
  //console.log(formNameElement);
  if (formNameElement.value === '') {
    cardNameElement.textContent = 'Nuria Rivas';
  } else {
    cardNameElement.textContent = formNameElement.value;
  }
});

formNumberElement.addEventListener('input', event => {
  if (formNumberElement.value === '') {
    cardNumberElement.textContent = '0000 0000 0000 0000';
  } else {
    cardNumberElement.textContent = formNumberElement.value;
  }
});
formMonthElement.addEventListener('input', event => {
  if (formMonthElement.value === '') {
    cardMonthElement.textContent = 'MM';
  } else {
    cardMonthElement.textContent = formMonthElement.value;
  }
});
formYearElement.addEventListener('input', event => {
  if (formYearElement.value === '') {
    cardYearElement.textContent = 'YY';
  } else {
    cardYearElement.textContent = formYearElement.value;
  }
});
formCvElement.addEventListener('input', event => {
  if (formCvElement.value === '') {
    cardCvElement.textContent = '000';
  } else {
    cardCvElement.textContent = formCvElement.value;
  }
});
formElement.addEventListener('submit', event => {
  event.preventDefault();
  let errors = false;
  if (formNameElement.value === '') {
    errors = true;
    console.log('Te falta el nombre');
  }
  if (formNumberElement.value === '') {
    errors = true;
    console.log('Te falta el número');
  }
  if (formMonthElement.value === '') {
    errors = true;
    console.log('Te falta el mes');
  }
  if (formYearElement.value === '') {
    errors = true;
    console.log('Te falta el año');
  }
  if (formCvElement.value === '') {
    errors = true;
    console.log('Te falta el cv');
  }
  if (!errors) {
    console.log('Todo listo');
  }
});

import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const formKey = 'feedback-form-state';
let formData = {};

const saveState = throttle(event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(formKey, JSON.stringify(formData));
}, 500);

const handleInput = event => {
  saveState(event); 
};

const restoreState = () => {
  try {
    const data = localStorage.getItem(formKey);
    if (!data) return;
    formData = JSON.parse(data);
    Object.entries(formData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  } catch (e) {
    console.log(e);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  form.reset();
  localStorage.removeItem(formKey);
  console.log(formData);
  formData = {};
};

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

restoreState();


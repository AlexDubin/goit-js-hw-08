import throttle from 'lodash/throttle';


const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveState = throttle(() => {
  const state = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

const handleInput = () => {
  saveState();
};

const restoreState = () => {
  const state = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = state.email || '';
  messageInput.value = state.message || '';
};

const handleSubmit = event => {
  event.preventDefault();
  const state = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem('feedback-form-state');
  console.log(state);
};

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

restoreState();

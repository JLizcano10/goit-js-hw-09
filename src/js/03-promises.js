import Notiflix from 'notiflix';

const promiseForm = document.querySelector('.form');
const delayInput = document.querySelector('input[name= "delay"]');
const stepInput = document.querySelector('input[name= "step"]');
const amountInput = document.querySelector('input[name= "amount"]');

const submitBtn = document.querySelector('button[type = "submit"]');

promiseForm.addEventListener('submit', e => {
  Notiflix.Notify.success(e.target);
});
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

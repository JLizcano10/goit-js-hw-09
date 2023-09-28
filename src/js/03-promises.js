const promiseForm = document.querySelector('.form');
const delayInput = document.querySelector('input[name= "delay"]');
const stepInput = document.querySelector('input[name= "step"]');
const amountInput = document.querySelector('input[name= "amount"]');

const submitBtn = document.querySelector('button[type = "submit"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

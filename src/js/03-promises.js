import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  amountInput: document.querySelector('.form > input')
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

const formEl = event.currentTarget.elements;
let delay = Number(formEl.delay.value);
const step = Number(formEl.step.value);
const amount = Number(formEl.amount.value);

  for (let i = 1;  i<= amount; i++) {
    
  createPromise(i, delay)
  .then(({ position, delay }) => {
    
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
 delay += step;
}  
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {  
        
  if (shouldResolve) {
    resolve({ position, delay });
  } else {
    reject({ position, delay });
  }
}, delay);
})
}


import Notiflix from 'notiflix';


const formOfGenerator = document.querySelector('.form');

formOfGenerator.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();

  const formData = event.currentTarget.elements;

  const firstDelay = formData.delay.value;
  const delayStep = formData.step.value;
  const amount = formData.amount.value;

  for (let index = 1; index <= Number(amount); index += 1) {
    const mainDelay = Number(firstDelay) + Number(delayStep) * (index - 1);
    
    createPromise(index, mainDelay).then(onMakeNotifySuccess).catch(onMakeNotifyError);
  };
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay);
  })

  return promise;
}


function onMakeNotifySuccess({ position, delay }) {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function onMakeNotifyError({ position, delay }) {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}
const form = document.querySelector('form.login-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const inputs = form.querySelectorAll('input');
  for (const input of inputs) {
  if (input.value.trim() === '') {
    alert('All form fields must be filled in') } else {
return
    }
}
}
  const user = {
    const email = inputs[0].value.trim();
    const password = inputs[1].value.trim();

})

// =================


const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    if (input.value.trim() === '') {
      alert('All form fields must be filled in');
      return;
    }
  }

  const user = {
    email: inputs[0].value.trim(),
    password: inputs[1].value.trim()
  };

  console.log(user);
});



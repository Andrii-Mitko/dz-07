


const form = document.querySelector('form.login-form');
form.elements.email.setAttribute('autocomplete', 'username');
form.elements.password.setAttribute('autocomplete', 'current-password');
form.addEventListener('submit', e => {
  e.preventDefault(); 
  if (form.elements.email.value.trim() === '' || form.elements.password.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  } else {
    const user = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
    }
    console.log(user);
  }
});



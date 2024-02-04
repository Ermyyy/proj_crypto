const submitButton = document.querySelector('.submit');
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
submitButton.addEventListener('click', function() {
    const firstname = firstnameInput.value;
    const lastname = lastnameInput.value;
    const email = emailInput.value;
    sendDataToDeveloper(firstname, lastname, email);
});
  
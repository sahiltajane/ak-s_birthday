document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Store the values in local storage
    localStorage.setItem('birthdayName', name);
    localStorage.setItem('birthdayMessage', message);

    // Redirect to the birthday page
    window.location.href = 'birthday.html';
});
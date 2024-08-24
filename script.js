
// Function to validate the login form
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "") {
        alert("Please enter your username or email.");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    // If everything is filled out correctly, return true
    return true;
}

// Event listener for the "Forget Password" button
document.getElementById('Forget').addEventListener('click', function (event) {
    window.location.href = 'forget.html';
});

// Event listener for the "Login" button
document.getElementById('logbtn2').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission for validation
    if (validateForm()) {
        window.location.href = 'home.html';
    }
});

// Event listener for the "Register" button
document.getElementById('logbtn1').addEventListener('click', function (event) {
    window.location.href = 'register.html';
});

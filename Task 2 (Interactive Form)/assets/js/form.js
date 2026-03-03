const form = document.getElementById('regist-form');

// Function to show error messages
form.addEventListener('submit', function(e){
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email-address').value.trim();
    const password = document.getElementById('password').value.trim();
    const phone = document.getElementById('phone-no').value.trim();
    const confirmedPassword = document.getElementById('confirmed-password').value.trim();
    e.preventDefault();
    clearErrors();
    var isValid = true;

    // Full Name Validation
    if(fullName.length<3){
        showError('full-name', 'Full name must be at least 3 charachters ');
        isValid = false;
    }

    // Email Validtaion 
    if(email === '' || !email.includes('@') || !email.includes('.')){
        showError('email-address' , 'Enter a valid email address.');
        isValid = false;
    }

    //Phone Validation
    if (phone.length < 11){
        showError('phone-no', 'Phone Number must be at least 11 numbers.');
        isValid = false;
    }

    // Paasword Validation
    if (password.length <8) {
        showError('password', ' Password must be at least 8 characters');
        isValid = false;
    }
    else if (password === password.toLowerCase()){
        showError('password', 'Password must contain at least one uppercase letter.');
        isValid = false;
    }
    else if (password === password.toUpperCase()){
        showError('password', 'Password must contain at least one lowercase letter.');
        isValid = false;
    }
    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        showError('password', 'Password must contain at least one special character.');
        isValid = false;
    }
    else if (!/[0-9]/.test(password)){
        showError('password','Password must contain at least one number');
        isValid = false;
    }

    // Confirmed Password Validation
    if(confirmedPassword !== password){
        showError('confirmed-password', 'Passwords do not match.');
        isValid = false;
    }
    if (isValid){
        var btn = document.querySelector('input[type="submit"]');
        btn.value = '✓ Success!';
        btn.style.background = 'linear-gradient(135deg, #00b09b, #96c93d)';
        btn.style.color = '#fff';
        setTimeout(function() {
            btn.value = 'Sign Up';
            btn.style.background = '';
            btn.style.color = '';
        }, 3000);
        document.getElementById('full-name').value = '';
        document.getElementById('email-address').value = '';
        document.getElementById('phone-no').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmed-password').value = '';
    }

});

//Focus & Blur Events
var inputs = document.querySelectorAll('input');

inputs.forEach(function(input){
    // Blue outline on focus
    input.addEventListener('focus', function() {
    input.style.outline = '2px solid #7b9fd4';
  });

  // Remove outline on blur
  input.addEventListener('blur', function() {
    input.style.outline = '';
  });
})

//Create a red error message
function showError(id, message){
  var input = document.getElementById(id);
  var err =document.createElement('span');
  err.className = 'error-msg';
  err.style.color = '#e74c3c';
  err.style.fontSize = '12px';
  err.style.marginTop = '5px';
  err.style.display = 'block';
  err.textContent = message;
  input.parentElement.appendChild(err);
  input.style.outline = '2px solid #e74c3c';
}


// Removes all error messages and resets outlines before each submit
function clearErrors() {
  var errors = document.querySelectorAll('.error-msg');
  errors.forEach(function(err) { err.remove(); });

  var inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) { input.style.outline = ''; });

}
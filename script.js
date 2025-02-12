function checkpwd() {
    var password = document.getElementById('input').value;
    var text = document.getElementById('strenthtext');

    if (password.length >= 8 && /[!@#$%^&*]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
        text.innerHTML = 'Your password is strong...';
        text.style.color = 'green';
    } else if (password.length >= 6 && /\d/.test(password) && /[a-z]/.test(password)) {
        text.innerHTML = 'Your password is average ,should include some special characters...';
        text.style.color = 'orange';
    } else if (password.length < 6 && /[a-z]/.test(password)) {
        text.innerHTML = 'Your password is weak, should include numbers and special characters...';
        text.style.color = 'red';
    } else {
        text.innerHTML = 'Your password is weak,include alphabets,numbers and special characters...';
        text.style.color = 'red';
    }
}
function resetpwd() {
    document.getElementById('input').value = '';
    document.getElementById('strenthtext').innerHTML = '';
}
function submitpwd() {
    var password = document.getElementById('input').value;
    if (password === '') {
        alert('Please enter a password before submitting.');
    } else {
        alert('Password submitted successfully!');
    }
}
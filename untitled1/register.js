//Mostrar senha e confirmar senha
document.getElementById('show-password').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');

    if (this.checked) {
        passwordField.type = 'text';
        confirmPasswordField.type = 'text';
    } else {
        passwordField.type = 'password';
        confirmPasswordField.type = 'password';
    }
});
document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let isValid = true;

    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';

    if (!password) {
        passwordError.textContent = 'A senha é obrigatória.';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (!hasLowerCase) {
        passwordError.textContent = 'A senha deve conter pelo menos uma letra minúscula.';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (!hasUpperCase) {
        passwordError.textContent = 'A senha deve conter pelo menos uma letra maiúscula.';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (!hasSpecialChar) {
        passwordError.textContent = 'A senha deve conter pelo menos um caractere especial.';
        passwordError.style.display = 'block';
        isValid = false;
    }
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'As senhas não são iguais.';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

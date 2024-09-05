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
    event.preventDefault();
    let isValid = true;

    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phone-error');
    phoneError.textContent = '';
    phoneError.style.display = 'none';

    if (phone.length !== 14) {
        phoneError.textContent = 'O campo telefone deve conter 9 dígitos.';
        phoneError.style.display = 'block';
        isValid = false;
    }

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Limpar mensagens de erro
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';

    // Validar a senha
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

    // Validar senha e confirmação de senha
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'As senhas não são iguais.';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});


// Formata o número de telefone ao digitar
document.getElementById('phone').addEventListener('input', function(event) {
    let input = event.target.value;
    // Remove todos os caracteres não numéricos
    let formattedNumber = input.replace(/\D/g, '');

    // Adiciona o hífen quando o número tiver 9 dígitos
    if (formattedNumber.length > 5) {
        formattedNumber = formattedNumber.slice(0, 5) + '-' + formattedNumber.slice(5);
    }

    // Atualiza o valor do input
    event.target.value = formattedNumber;
});



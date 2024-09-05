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

    if (phone.length !== 9) {
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

document.getElementById('phone').addEventListener('input', function (event) {
    let input = event.target.value;
    const ddd = document.getElementById('ddd-select').value;

    // Remove caracteres não numéricos
   let phoneNumber = input.replace(/\D/g, '');

    // Verifica se o DDD já está presente
    if (phoneNumber.startsWith(ddd)) {
        phoneNumber = phoneNumber.substring(ddd.length); // Remove o DDD se já estiver presente
    }


    // Formatar o número de telefone
    if (input.length > 5) {
        input = input.replace(/(\d{5})(\d{1,4})/, '$1-$2');
    }

    event.target.value = `(${ddd}) ${input}`;
});

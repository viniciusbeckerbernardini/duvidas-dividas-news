document.getElementById('forgot-pass').addEventListener('click', (event) => {
  event.preventDefault();
  window.open('', 'Esqueceu sua senha?', 'width=400,height=200').document.write('<h3>Esqueceu sua senha?</h3>');
});

const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', login, false);

function login(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Credenciais inválidas");
      }
    })
    .then((data) => {
      window.location.href = '/dashboard';
    })
    .catch((error) => {
      alert(error.message);
    });
}

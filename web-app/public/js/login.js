const btnLogin = document.getElementById('btn-login');
if(btnLogin !== null){
  btnLogin.addEventListener('click', login, false);
}
function login(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:9001/api/user/login', {
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
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('isLogged', 'true');
      window.location.href = '/';
    })
    .catch((error) => {
      alert(error.message);
    });
}

//Catalog


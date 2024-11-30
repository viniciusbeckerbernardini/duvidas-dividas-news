const btnLogin = document.getElementById('btn-login');
if(btnLogin !== null){
  btnLogin.addEventListener('click', login, false);
}
const btnCreateAccount = document.getElementById('btn-create-account');
if(btnCreateAccount !== null){
  btnCreateAccount.addEventListener('click', createAccount, false);
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

function createAccount(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const telephone = document.getElementById('telephone').value;
  const cpf = document.getElementById('cpf').value;

  if(email === '' || email === undefined || email === null ||
      password === '' || password === undefined || password === null ||
      name === '' || name === undefined || name === null ||
      telephone === '' || telephone === undefined || telephone === null ||
      cpf === '' || cpf === undefined || cpf === null ||
  ){
    alert('Preencha todos os campos');
    return
  }

  fetch('http://localhost:9001/api/user/create-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name:name,
      telephone:telephone,
      cpf:cpf
    }),
  })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erro ao criar usuário");
        }
      })
      .then((data) => {
        alert('Usuário criado com sucesso!')
        window.location.href = '/login';
      })
      .catch((error) => {
        alert(error.message);
      });
}


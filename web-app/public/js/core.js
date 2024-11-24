function verifyAuthenticated(){
  const isLogged = localStorage.getItem('isLogged');

  console.log(isLogged)
  if(isLogged !== 'true'){
      const navbar = document.querySelector('.navbar-nav.navbar-right');
      navbar.innerHTML = `<a class="nav-item nav-link" href="/login">Login</a>`
  }
}

function logout(event) {
  event.preventDefault();
  localStorage.clear();
  window.location.href = event.target.href;
}

document.getElementById('logout').addEventListener('click', logout);

document.addEventListener("DOMContentLoaded", function() {
  verifyAuthenticated()
});
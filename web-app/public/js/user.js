function loadUser(){
    const token = localStorage.getItem("token");
    fetch(`http://localhost:9007/api/user/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Erro ao carregar dados do usuário");
            }
        })
        .then((data) => {
            const {user} = data;
            fillUser(user)
        })
        .catch((error) => {
            alert(error.message);
        });
}

function fillUser(user){
    const userDetails = document.getElementById('user-details');
    userDetails.innerHTML = `
    <div class="p-3">
        <p>Nome: ${user.name}</p>
        <p>E-mail: ${user.email}</p>
        <p>CPF: ${user.cpf}</p>
    </div>
  `;

}


document.addEventListener("DOMContentLoaded", function() {
    loadUser()
});
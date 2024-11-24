function loadRatings(){
    const url = window.location.href;
    const segments = url.split('/');
    const isbn = segments[segments.length - 1];

    console.log(isbn);
    fetch(`http://localhost:9003/api/rating/list/${isbn}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Erro ao carregar avaliações");
            }
        })
        .then((data) => {
            data.ratings.forEach((rating) => addRatings(rating));
        })
        .catch((error) => {
            alert(error.message);
        });
}

function addRatings(rating){
    const productRatings = document.getElementById('ratings');


    productRatings.innerHTML = `
    <div class="rating">
        <p>Usuário: ${rating.userName}</p>
        <p>Comentário: ${rating.comment}</p>
        <p>Data: ${new Date(rating.dateCreated).toLocaleString('pt-BR')}</p>
        <p>Nota: ${rating.rating}/5</p>
    </div>
  `;

}


document.addEventListener("DOMContentLoaded", function() {
    loadRatings()
});
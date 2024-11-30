function loadRatings(){
    const url = window.location.href;
    const segments = url.split('/');
    const isbn = segments[segments.length - 1];

    fetch(`http://localhost:9007/api/rating/list/${isbn}`, {
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


function addMyRating(){
    const url = window.location.href;
    const segments = url.split('/');
    const isbn = segments[segments.length - 1];
    const token = localStorage.getItem("token");

    const ratingBox = document.getElementById('rating-box').value;
    if(ratingBox < 1 || ratingBox > 5){
        alert('Avaliação com nota de 1 a 5');
    }

    let commentBox = document.getElementById('comment-box').value;
    if(commentBox === ''){
        commentBox = 'Usuário não inseriu avaliação'
    }


    fetch(`http://localhost:9007/api/rating/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify(
            {
                isbn:`${isbn}`,
                rating:ratingBox,
                comment:commentBox
            })
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Erro ao enviar a avaliação");
            }
        })
        .then((data) => {
            window.location.reload()
        })
        .catch((error) => {
            alert(error.message);
        });
}

function loadMyRating(){
    const token = localStorage.getItem("token");
    const url = window.location.href;
    const segments = url.split('/');
    const isbn = segments[segments.length - 1];
    fetch(`http://localhost:9007/api/rating/find/${isbn}`, {
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
                throw new Error("Erro ao carregar catalogo");
            }
        })
        .then((data) => {
            const {rating} = data
            console.log(rating)
            if(rating !== null){
                const myRating = document.getElementById('my-rating');
                const myComment = document.getElementById('my-comment');
                console.log(myRating)
                console.log(myComment)
                myRating.innerHTML += rating.rating
                myComment.value = rating.comment
            }
        })
        .catch((error) => {
            alert(error.message);
        });
}


document.addEventListener("DOMContentLoaded", function() {
    loadRatings()
});
function loadCatalog(){
  fetch('http://localhost:9002/api/catalog/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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
        data.catalog.forEach((product) => addCatalog(product));
      })
      .catch((error) => {
        alert(error.message);
      });
}

function addCatalog(product){
  const productsCatalog = document.getElementById('products-catalog');

  let productHtml = `
            <div class="col-3 mt-4">
                    <div class="card">
                        <img class="card-img-top" src="
                           https://cdn.shopify.com/s/files/1/0565/4039/7655/files/book_cover_${Math.floor(Math.random() * 3) + 1}.png
                        " alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">
                                ${product.title}
                            </p>
                            <p class="card-text">
                                <strong>R$ ${product.price}</strong>
                            </p>
                            <p class="card-text">
                                <div class="row">
                                    <div class="col-6">
                                        <a type="button" href="/product/detail/${product.isbn}" class="btn btn-primary">
                                            DETALHES
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-success">
                                            <i class="fa-solid fa-cart-shopping fa-beat-fade"></i>
                                        </button>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
            </div>
  `;

  productsCatalog.innerHTML += productHtml;

}

document.addEventListener("DOMContentLoaded", function() {
  loadCatalog()
});
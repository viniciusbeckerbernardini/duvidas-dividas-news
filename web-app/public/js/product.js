function loadProduct(){
  const url = window.location.href;
  const segments = url.split('/');
  const isbn = segments[segments.length - 1];

  fetch(`http://localhost:9007/api/catalog/find/${isbn}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Erro ao carregar produto");
        }
      })
      .then((data) => {
        const {book} = data
        fillProduct(book)
      })
      .catch((error) => {
        alert(error.message);
      });
}

function fillProduct(product){
  const productDescrition = document.getElementById('product-description');
  const productTitle = document.getElementById('product-title');
  const productPrice = document.getElementById('product-price');


  productDescrition.innerHTML = `
  <h2>Descrição</h2>
  <p>${product.description}</p>
  <p>ISBN: <strong>${product.isbn}</strong></p>
  <p>Autores: <strong>${product.authors}</strong></p>
  <p>Número de páginas: <strong>${product.pageNumbers} páginas</strong></p>
  <p>Data de publicação: <strong>${new Date(product.publishDate).toLocaleString('pt-BR')}</strong></p>
  <p>Editora: <strong>${product.publisher} &trade;</strong></p>
  <p>Categorias: <strong>${product.categories.join(', ')}</strong></p>
  `;
  
  productTitle.innerHTML = product.title;

  productPrice.innerHTML = `<h3> R$ ${product.price}`;

}

function addToCart(){
  const url = window.location.href;
  const segments = url.split('/');
  const isbn = segments[segments.length - 1];
  const token = localStorage.getItem("token");

  const orderId = segments[segments.length - 1];

  fetch(`http://localhost:9007/api/carts/add-product`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body:JSON.stringify({product: {isbn:isbn}})
  })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Erro ao confirmar o pedido: Você precisa estar logado");
        }
      })
      .then((data) => {
        alert('Produto adicionado ao carrinho!')
      })
      .catch((error) => {
        alert(error.message);
      });
}

function addAndGoToCart(){
  const url = window.location.href;
  const segments = url.split('/');
  const isbn = segments[segments.length - 1];
  const token = localStorage.getItem("token");

  const orderId = segments[segments.length - 1];

  fetch(`http://localhost:9007/api/carts/add-product`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body:JSON.stringify({product: {isbn:isbn}})
  })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Erro ao confirmar o pedido: Você precisa estar logado");
        }
      })
      .then((data) => {
        window.location.href = '/cart';
      })
      .catch((error) => {
        alert(error.message);
      });
}

function calculateFreight(){
    const cep = document.getElementById('input-cep').value;
    const freightDiv = document.getElementById('freight-value');
    if(cep.value === '' || cep.value === null){
        alert('Informe o cep');
        return;
    }
    freightDiv.style.display = 'block';
}
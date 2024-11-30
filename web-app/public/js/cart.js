order = {
    "products": [],
    "cost": 0,
    "sendCost": 0,
    "sendAddress": {
        "street": "",
        "city": "",
        "state": "",
        "zip": ""
    },
    "paymentMethod": "pix"
}

function createOrder(){
    const cep = document.getElementById("cart-cep").value;
    const houseNumber = document.getElementById("house-number").value;
    if(cep === '' || cep === undefined || houseNumber === '' || houseNumber === undefined){
        alert('Informe o cep / número da residência');
        return;
    }
    const token = localStorage.getItem("token");
    fetch(`http://localhost:9007/api/orders/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify(order)
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Erro ao confirmar o pedido");
            }
        })
        .then((data) => {
            alert('Pedido criado com sucesso!');
            clearCart()
        })
        .catch((error) => {
            alert(error.message);
        });
}

function clearCart(){
    const token = localStorage.getItem("token");
    fetch(`http://localhost:9007/api/carts/clear`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Erro ao limpar carrinho");
            }
        })
        .then(() => {
            window.location.href = '/account/orders'
        })
        .catch((error) => {
            alert(error.message);
        });
}

function getAdress(){
    const cep = document.getElementById("cart-cep").value;
    const houseNumber = document.getElementById("house-number").value;
    if(cep === '' || cep === undefined || houseNumber === '' || houseNumber === undefined){
        alert('Informe o cep / número da residência');
        return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
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
            order.sendAddress.street = data.logradouro+' '+houseNumber;
            order.sendAddress.city = data.localidade;
            order.sendAddress.state = data.uf;
            order.sendAddress.zip = data.cep;
        })
        .catch((error) => {
            alert(error.message);
        });
}

function loadCart(){
  const token = localStorage.getItem("token");
  fetch('http://localhost:9007/api/carts/get', {
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
        data.cart.products.forEach((product) => loadCartProduct(product));
      })
      .catch((error) => {
        alert(error.message);
      });
}

function addTotalPrice(amount){
    const totalPrice = document.getElementById('total-price');
    const actualPrice = totalPrice.innerHTML;
    totalPrice.innerText = eval(`${actualPrice} + ${amount}`);

}
function addProduct(product, quantity){
  const cart = document.getElementById('cart');
  addTotalPrice(eval(product.price * (quantity??1)));

  order.products.push({isbn:product.isbn, quantity: quantity??1, price:eval(product.price * (quantity??1))});
  order.cost += eval(product.price * (quantity??1))


  const photoUrl = product.bookImage??`https://cdn.shopify.com/s/files/1/0565/4039/7655/files/book_cover_${Math.floor(Math.random() * 3) + 1}.png`;

  let cartHtml = `
             <tr class="text-center">
                <th scope="row">
                <img src="${photoUrl}" class="img-thumbnail" width="100px">
                </th>
                <td><p>${product.title}</p></td>
                <td><p>X${quantity??1}</p></td>
                <td><p>R$ ${eval(product.price * (quantity??1))}</p></td>
                <td>
                    <a class="btn btn-primary" href="/product/detail/${product.isbn}"><i class="fa fa-search"></i></a>
                    <button onclick="removeCart('${product.isbn}')" class="btn btn-danger"><i class="fa-solid fa-minus"></i></button>
                    <button onclick="addCart('${product.isbn}')" class="btn btn-success"><i class="fa-solid fa-plus"></i></button>
                </td>
             </tr>
  `;

  cart.innerHTML += cartHtml;

}


function addCart(isbn){
    const token = localStorage.getItem("token");
    fetch(`http://localhost:9007/api/carts/add-product`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify({product: {isbn:`${isbn}`}})
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Erro ao confirmar o pedido");
            }
        })
        .then((data) => {
            window.location.href = '/cart';
        })
        .catch((error) => {
            alert(error.message);
        });
}

function removeCart(isbn){
  const token = localStorage.getItem("token");
  fetch(`http://localhost:9007/api/carts/remove-product`, {
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
          throw new Error("Erro ao remover produto");
        }
      })
      .then((data) => {
        window.location.href = '/cart';
      })
      .catch((error) => {
        alert(error.message);
      });
}

function loadCartProduct(product){
  const isbn = product.isbn;
  const quantity = product.quantity;

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
          throw new Error("Erro ao carregar produtos");
        }
      })
      .then((data) => {
        const {book} = data
        addProduct(book, quantity)
      })
      .catch((error) => {
        alert(error.message);
      });
}

document.addEventListener("DOMContentLoaded", function() {
  loadCart()
});
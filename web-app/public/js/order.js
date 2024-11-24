function loadOrder(){
    const url = window.location.href;
    const segments = url.split('/');
    const token = localStorage.getItem("token");

    const order = segments[segments.length - 1];
    fetch(`http://localhost:9004/api/orders/find/${order}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

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
            const {order} = data
            fillOrder(order)
        })
        .catch((error) => {
            alert(error.message);
        });
}

function fillOrder(order){
    const orderDetails = document.getElementById('order-details');
    const productList = document.getElementById('products-list');

    orderDetails.innerHTML = `
       <p><strong>Número: ${order._id}</strong></p>
       <p><strong>Status: ${getStatus(order.status)}</strong></p>
       <p><strong>Custo: R$ ${order.cost}</strong></p>
       <p><strong>Frete: R$ ${order.sendCost}</strong></p>
       <p><strong>Custo total: R$ ${parseFloat(order.cost) + parseFloat(order.sendCost)}</strong></p>
       <p><strong>Método de pagamento: ${getPaymentMethod(order.paymentMethod)}</strong></p>
       <p><strong>Endereço de entrega: ${getDeliveryAddress(order.sendAddress)}</strong></p>
  `;

    order.products.forEach(product => {
        productList.innerHTML += `
                    <div class="col col-12 mt-2">
                        <div class="row">
                            <div class="col col-6">${product.isbn}</div>
                            <div class="col col-2">${product.price}</div>
                            <div class="col col-2">x${product.quantity}</div>
                            <div class="col col-2"><a class="btn btn-primary" href="/product/detail/${product.isbn}">Detalhes</a></div>
                        </div>
                    </div>
        `
    })


}


function getStatus(status){
    switch (status) {
        case 'delivered':
            return "Entregue";
        case 'pending-payment':
            return "Pendente de pagamento";
        default:
            return "Em processamento";
    }
}

function getPaymentMethod(paymentMethod){
    switch (paymentMethod) {
        case 'credit card':
            return "Cartão de crédito";
        case 'debit card':
            return "Cartão de débito";
        case 'bank transfer':
            return "Transferência bancária";
        case 'boleto':
            return "Boleto bancário";
        default:
            return "Em processamento";
    }
}

function getDeliveryAddress(address){
    return `${address.street}, ${address.city}, ${address.state}, CEP: ${address.zip}`
}


document.addEventListener("DOMContentLoaded", function() {
    $('.carousel').carousel({
        interval: 2000
    })
    loadOrder()
});
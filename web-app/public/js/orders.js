function loadOrders(){
    const token = localStorage.getItem("token");
    fetch('http://localhost:9004/api/orders/list', {
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
            data.orders.forEach((order) => addOrder(order));
        })
        .catch((error) => {
            alert(error.message);
        });
}

function addOrder(order){
    const orders = document.getElementById('orders');

    let ordersHtml = `
             <tr>
                <th scope="row">${order._id}</th>
                <td>${getStatus(order.status)}</td>
                <td>R$ ${parseFloat(order.cost) + parseFloat(order.sendCost)}</td>
                <td>${getPaymentMethod(order.paymentMethod)}</td>
                <td>${new Date(order.dateCreated).toLocaleString('pt-BR')}</td>
                <td><a class="btn btn-primary" href="/order/detail/${order._id}">Detalhes</a></td>
             </tr>
  `;

    orders.innerHTML += ordersHtml;

}

function getStatus(status){
    switch (status) {
        case 'delivered':
            return "Entregue";
        case 'canceled':
            return "Cancelado";
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

document.addEventListener("DOMContentLoaded", function() {
    loadOrders()
});
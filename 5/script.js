document.addEventListener('DOMContentLoaded', function () {
  const calculateButton = document.getElementById('calculateButton');
  calculateButton.addEventListener('click', calculateTotal);
});

function calculateTotal() {
  const quantityInput = document.getElementById('quantity');
  const quantity = parseInt(quantityInput.value);

  const selectedProduct = document.getElementById('products');
  const price = parseFloat(selectedProduct.value);

  if (isNaN(quantity) || quantity <= 0) {
    alert('Введите корректное количество товара.');
    return;
  }

  const regex = /^[0-9]+$/;
  if (!regex.test(quantityInput.value)) {
    alert('Введите корректное количество товара (только цифры).');
    return;
  }

  const total = price * quantity;

  document.getElementById('total').innerHTML = `Общая стоимость заказа: $${total.toFixed(2)}`;
}
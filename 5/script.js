function calculateTotal() {
    
    const quantity = parseInt(document.getElementById('quantity').value);
    const selectedProduct = document.getElementById('products');
    const price = parseFloat(selectedProduct.value);
  
    // Проверяем корректность введенных данных
    if (isNaN(quantity) || quantity <= 0) {
      alert('Введите корректное количество товара.');
      return;
    }
  
    // Рассчитываем общую
    const total = price * quantity;
  
    // Выводим результат 
    document.getElementById('total').innerHTML = `Общая стоимость заказа: $${total.toFixed(2)}`;
  }
  
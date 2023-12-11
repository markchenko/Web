
const quantityInput = document.getElementById('quantity');
const serviceTypeInputs = document.querySelectorAll('input[name="serviceType"]');
const optionSection = document.getElementById('optionSection');
const propertySection = document.getElementById('propertySection');
const optionsSelect = document.getElementById('options');
const propertyCheckbox = document.getElementById('property');
const totalPriceElement = document.getElementById('totalPrice');

const prices = {
  type1: 10, // Цена для типа 1
  type2: 15, // Цена для типа 2
  type3: 20, // Цена для типа 3
  option1: 5, // Цена для опции 1
  option2: 8, // Цена для опции 2
  option3: 12, // Цена для опции 3
  property: 7 // Цена для свойства
};

function calculateTotalPrice() {
  let totalPrice = 0;
  const selectedServiceType = document.querySelector('input[name="serviceType"]:checked').value;
  totalPrice += prices[selectedServiceType];

  if (selectedServiceType === 'type2') {
    const selectedOption = optionsSelect.value;
    totalPrice += prices[selectedOption];
  } else if (selectedServiceType === 'type3' && propertyCheckbox.checked) {
    totalPrice += prices.property;
  }

  const quantity = quantityInput.valueAsNumber;
  totalPrice *= quantity;

  totalPriceElement.textContent = `Итоговая цена: ${totalPrice}`;
}

function showHideOptionsAndProperty() {
  const selectedServiceType = document.querySelector('input[name="serviceType"]:checked').value;

  if (selectedServiceType === 'type2') {
    optionSection.style.display = 'block';
    propertySection.style.display = 'none';
  } else if (selectedServiceType === 'type3') {
    optionSection.style.display = 'none';
    propertySection.style.display = 'block';
  } else {
    optionSection.style.display = 'none';
    propertySection.style.display = 'none';
  }

  calculateTotalPrice();
}

quantityInput.addEventListener('input', calculateTotalPrice);
optionsSelect.addEventListener('change', calculateTotalPrice);
propertyCheckbox.addEventListener('change', calculateTotalPrice);
serviceTypeInputs.forEach(input => input.addEventListener('change', showHideOptionsAndProperty));

showHideOptionsAndProperty(); // Вызов для отображения начальной цены

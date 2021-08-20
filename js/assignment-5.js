function updatePrice(price, id) {
    let extraPrice = document.getElementById(id);
    extraPrice.innerText = price;

    // Updtae Total Price
    let totalPrice = document.getElementById('total-price');
    const defaultPrice = document.getElementById('default-price');
    const defaultPriceNumber = parseFloat(defaultPrice.innerText);
    const memoryPrice = document.getElementById('memory-price');
    const memoryPriceNumber = parseFloat(memoryPrice.innerText);
    const storagePrice = document.getElementById('storage-price');
    const storagePriceNumber = parseFloat(storagePrice.innerText);
    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeNumber = parseFloat(deliveryCharge.innerText);

    totalPrice.innerText = defaultPriceNumber + memoryPriceNumber + storagePriceNumber + deliveryChargeNumber;

    // Adjust on Final Price
    const finalPrice = document.getElementById('final-Price');
    finalPrice.innerText = totalPrice.innerText;
}

//Customize Memory Price
document.getElementById('memory-type').addEventListener('click', function () {
    updatePrice(0, 'memory-price');
})

document.getElementById('best-memory').addEventListener('click', function () {
    updatePrice(180, 'memory-price');
})

//Customize SSD Storage Price

document.getElementById('default-ssd').addEventListener('click', function () {
    updatePrice(0, 'storage-price');
})

document.getElementById('medium-ssd').addEventListener('click', function () {
    updatePrice(100, 'storage-price');
})

document.getElementById('best-ssd').addEventListener('click', function () {
    updatePrice(180, 'storage-price');
})

//Customize Delivary Charge
document.getElementById('default-delivery').addEventListener('click', function () {
    updatePrice(0, 'delivery-charge');
})
document.getElementById('fist-delivery').addEventListener('click', function () {
    updatePrice(20, 'delivery-charge');
})

// Update Final Price
document.getElementById('apply-promo-code').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code');
    const finalPrice = document.getElementById('final-Price');
    const finalPriceNumber = parseFloat(finalPrice.innerText);

    if (promoCode.value == 'stevekaku') {
        finalPrice.innerText = finalPriceNumber - finalPriceNumber * .20;
        document.getElementById('apply-promo-code').disabled = true;

    } else {
        alert('This promo Code is wrong')
    }
})

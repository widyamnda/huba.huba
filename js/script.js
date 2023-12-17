// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart')
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// klik di luar elemen
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    if(!sc.constains(e.target) && !shoppingCart.contains(e.target)) {shoppingCart.classList.remove('active')}
})
import { products } from './fetchProducts.js';
import { limit, page } from './index.js';
import imagesNot from '../images/not-images.jpg';
import exitSvg from '../images/icons.svg';
const listProduct = document.querySelector('#listProduct');
const listProductBasket = document.querySelector('#listProductBasket');
const totalPrice = document.querySelector('#totalPrice');
const totalProducts = document.querySelector('#totalProdacts');
const basketBtn = document.querySelector('button[data-action="close"]');
const basketContainer = document.querySelector('#basket');
const basketExit = document.querySelector('#basketExit');

listProduct.addEventListener('click', handleAddCard);
listProductBasket.addEventListener('click', handleMinusAndPlus);
listProductBasket.addEventListener('click', handleRemoveCard);
basketBtn.addEventListener('click', handelToggleBasket);
basketExit.addEventListener('click', handelToggleBasket);
document.addEventListener('DOMContentLoaded', () => {
  renderProductsBaket();
  totalPriceProducts();
  totalProductsNumber();
});

let productItem = [];
const localProducts = JSON.parse(localStorage.getItem('products'));
if (Array.isArray(localProducts)) {
  localProducts.map(item => productItem.push(item));
}

async function handleAddCard(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const res = await products(limit, page);
  const findProductBasket = productItem.find(
    ({ id }) => id === Number(e.target.id)
  );
  if (findProductBasket) {
    return alert('Ви вже додавали цей продукт у корзину');
  }
  const findProduct = res.products.find(({ id }) => id === Number(e.target.id));
  const newProduct = { ...findProduct, number: 1 };
  productItem.push(newProduct);
  localStorage.setItem('products', JSON.stringify(productItem));
  renderProductsBaket();
  totalPriceProducts();
  totalProductsNumber();
}

function handleRemoveCard(e) {
  if (
    e.target.nodeName !== 'BUTTON' &&
    e.target.nodeName !== 'svg' &&
    e.target.nodeName !== 'use'
  ) {
    return;
  }
  const removeItem = productItem.filter(({ id }) => id !== Number(e.target.id));
  productItem = removeItem;
  localStorage.setItem('products', JSON.stringify(productItem));
  renderProductsBaket();
  totalPriceProducts();
  totalProductsNumber();
}

const renderProductsBaket = () => {
  const productItemBasket = productItem
    .map(({ title, images, variants, id, number }) => {
      const price = (
        (variants[0].price || variants[0].compare_at_price) * number
      ).toLocaleString('en-US');
      const deleteIconHtml = `<svg width="24px" height="24px" id="${id}">
      <use href=${exitSvg}#deleteIcon id="${id}"></use>
      </svg>`;
      return `
      <li class="flex gap-4 items-start ">
        <img
        src="${images.length > 0 ? images[0].src : imagesNot}"
          class="rounded-md border border-white border-opacity-50 w-[74px]"
          />
        <div class="flex flex-col  justify-between w-[231px] h-heightImgBasket grid">
          <h3 class="text-yellow-50 text-sm font-bold">${title}</h3>
          <p class="text-yellow-50 text-sm font-bold"> ${price} KR.</p>
          <div class="flex"><button type='button' class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="minus-${id}">-</button><p class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="number">${number}</p><button type='button' class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="plus-${id}">+</button></div>
          </div>
        <button type='button' id="${id}">${deleteIconHtml}</button>
      </li>`;
    })
    .join('');
  listProductBasket.innerHTML = '';
  listProductBasket.insertAdjacentHTML('beforeend', productItemBasket);
};
function totalProductsNumber() {
  totalProducts.innerHTML = 'TOTAL: ';
  const total = productItem.reduce((cal, item) => {
    return cal + item.number;
  }, 0);
  totalProducts.insertAdjacentHTML('beforeend', total);
}

function handleMinusAndPlus(e) {
  if (e.target.id.includes('plus')) {
    const splices = e.target.id.split('-');
    const product = productItem.find(({ id }) => id === Number(splices[1]));
    product.number = product.number + 1;
  } else {
    const splices = e.target.id.split('-');
    const product = productItem.find(({ id }) => id === Number(splices[1]));
    product.number = product.number === 1 ? 1 : product.number - 1;
  }
}
function handelToggleBasket() {
  basketContainer.classList.toggle('hidden');
}

function totalPriceProducts() {
  const total = productItem.reduce((cal, item) => {
    return cal + Number(item.variants[0].price) * item.number;
  }, 0);
  totalPrice.innerHTML = ' KR.';
  totalPrice.insertAdjacentHTML('afterbegin', total.toLocaleString('en-US'));
}

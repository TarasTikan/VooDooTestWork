import { products } from "./fetchProducts.js";
const paginationContainer = document.querySelector("#pagination");
export const limit = 24;
export let page = 1;
let totalPages = null;

paginationContainer.addEventListener("click", handlePageTarget);
function handlePageTarget(e) {
  if (e.target.nodeName !== "LI" && e.target.nodeName !== "A") return;
  const clickedPage = e.target.dataset.page;
  const currentPage = paginationContainer.querySelector(".active-page");
  if (currentPage === e.target.parentNode) return;
  if (currentPage) {
    currentPage.classList.remove("active-page");
    currentPage.classList.add("bg-yellow-50", "text-importantText");
  }
  if (e.target.parentNode.nodeName === "UL") {
    return;
  }
  e.target.parentNode.classList.remove("bg-yellow-50", "text-importantText");
  e.target.parentNode.classList.add("bg-black", "text-yellow-50");
  e.target.parentNode.classList.add("active-page");
  page = clickedPage;
  products(limit, page).then((res) => {
    renderProducts(res.products);
    calculatePagination(461);
  });
}

function calculatePagination(totalProducts) {
  totalPages = Math.ceil(totalProducts / limit);
  renderPagination();
}
function renderPagination() {
  const maxVisiblePages = 4;
  let pagesElements = "";

  let startPage = Math.max(1, page - maxVisiblePages);
  let endPage = Math.min(totalPages, Number(page) + maxVisiblePages);
  if (startPage > 2) {
    pagesElements += `<li class="transition-all duration-250 ease-out hover:bg-black hover:text-yellow-50 w-10 h-10 rounded-full justify-center flex items-center border border-black text-importantText">
      <a href="#" data-page="1" class="transition-all duration-250 ease-out hover:text-yellow-50 font-space-grotesk font-medium text-importantText">1</a>
    </li>`;
  }

  if (startPage > 1) {
    pagesElements += `<li class="w-10 h-10 rounded-full justify-center flex items-center border border-black">...</li>`;
  }

  for (let i = startPage; i <= endPage; i += 1) {
    const isActivePage = i === parseInt(page);
    const activeClass = isActivePage
      ? "bg-black text-yellow-50"
      : "bg-yellow-50 text-importantText";

    pagesElements += `<li class="transition-all duration-250 ease-out hover:bg-black hover:text-yellow-50 w-10 h-10 rounded-full justify-center flex items-center border border-black ${activeClass}">
      <a
        href="#"
        data-page="${i}"
        class="transition-all duration-250 ease-out hover:text-yellow-50 font-space-grotesk font-medium text-importantText"
      >
        ${i}
      </a>
    </li>`;
  }
  if (endPage < totalPages) {
    pagesElements += `<li class="w-10 h-10 rounded-full justify-center flex items-center border border-black">...</li>`;

    pagesElements += `<li class="transition-all duration-250 ease-out hover:bg-black hover:text-yellow-50 w-10 h-10 rounded-full justify-center flex items-center border border-black text-importantText">
      <a href="#" data-page="${totalPages}" class="transition-all duration-250 ease-out hover:text-yellow-50 font-space-grotesk font-medium text-importantText">${totalPages}</a>
    </li>`;
  }

  paginationContainer.innerHTML = "";
  paginationContainer.insertAdjacentHTML("beforeend", pagesElements);
}

products(limit, page).then((res) => {
  renderProducts(res.products);
  calculatePagination(461);
});

function renderProducts(data) {
  const productItem = data
    .map(({ title, images, id, variants }) => {
      return `
    <li class="w-[342px] grid gap-3 lg:w-[300px]" id="${id}">
   <div class="relative">
     <img
       src="${images.length > 0 ? images[0].src : "./img/not-images.jpg"}"
       class="border border-black rounded w-[342px] lg:w-[300px] h-[300px]"
     />
     <p class="top-3 left-3 flex items-center justify-center absolute w-12 h-6 p-2 bg-black rounded items-start gap-2.5 inline-flex text-yellow-50 text-xs font-normal uppercase">
       Used
     </p>
   </div>
   <div class="flex justify-between">
     <div>
       <p class="text-black font-space-grotesk text-base font-bold">${title}</p>
       <p class="text-black font-space-grotesk text-base font-bold">
         ${variants[0].price || variants[0].compare_at_price} KR.
       </p>
     </div>
     <div class="flex flex-col text-right">
       <p class="text-black font-space-grotesk text-base font-medium">
         Condition
       </p>
       <p class="text-black font-space-grotesk text-base font-normal">
         Slightly used
       </p>
     </div>
   </div>
   <button
     type="button"
     id="${id}"
     class="transition-all duration-250 ease-out hover:bg-yellow-50 hover:text-black hover:border-black hover:border w-full mt-auto h-10 bg-black rounded justify-center items-center text-white text-center font-space-grotesk text-sm font-bold"
   >
     ADD TO CART
   </button>
 </li>
    `;
    })
    .join("");
  listProduct.innerHTML = "";
  listProduct.insertAdjacentHTML("beforeend", productItem);
}

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var i=r("khrDK"),o=r("btpe3");const d=document.querySelector("#listProduct"),s=document.querySelector("#listProductBasket"),c=document.querySelector("#totalPrice"),a=document.querySelector("#totalProdacts"),l=document.querySelector('button[data-action="close"]'),u=document.querySelector("#basket"),m=document.querySelector("#basketExit");d.addEventListener("click",(async function(e){if("BUTTON"!==e.target.nodeName)return;const t=await(0,i.products)(o.limit,o.page);if(f.find((({id:t})=>t===Number(e.target.id))))return alert("Ви вже додавали цей продукт у корзину");const n={...t.products.find((({id:t})=>t===Number(e.target.id))),number:1};f.push(n),localStorage.setItem("products",JSON.stringify(f)),p(),g(),x()})),s.addEventListener("click",(function(e){if(!e.target.id.includes("plus"))return;const t=e.target.id.split("-"),n=f.find((({id:e})=>e===Number(t[1])));n.number=n.number+1})),s.addEventListener("click",(function(e){if(!e.target.id.includes("minus"))return;const t=e.target.id.split("-"),n=f.find((({id:e})=>e===Number(t[1])));n.number=1===n.number?1:n.number-1})),s.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName&&"svg"!==e.target.nodeName&&"use"!==e.target.nodeName)return;const t=f.filter((({id:t})=>t!==Number(e.target.id)));f=t,localStorage.setItem("products",JSON.stringify(f)),p(),g(),x()})),l.addEventListener("click",y),m.addEventListener("click",y),document.addEventListener("DOMContentLoaded",(()=>{p(),g(),x()}));let f=[];const b=JSON.parse(localStorage.getItem("products"));function g(){const e=f.reduce(((e,t)=>e+Number(t.variants[0].price)*t.number),0);c.innerHTML=" KR.",c.insertAdjacentHTML("afterbegin",e.toLocaleString("en-US"))}Array.isArray(b)&&b.map((e=>f.push(e)));const p=()=>{const e=f.map((({title:e,images:t,variants:n,id:r,number:i})=>{const o=((n[0].price||n[0].compare_at_price)*i).toLocaleString("en-US");return`\n      <li class="flex gap-4 items-start ">\n        <img\n          src="${t.length>0?t[0].src:"./images/not-images.jpg"}"\n          class="rounded-md border border-white border-opacity-50 w-[74px]"\n        />\n        <div class="flex flex-col  justify-between w-widthInfoProduct h-heightImgBasket grid">\n          <h3 class="text-yellow-50 text-sm font-bold">${e}</h3>\n          <p class="text-yellow-50 text-sm font-bold"> ${o} KR.</p>\n          <div class="flex"><button type='button' class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="minus-${r}">-</button><p class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="number">${i}</p><button type='button' class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="plus-${r}">+</button></div>\n        </div>\n        <button type='button' id="${r}"><svg width="24px" height="24px" id="${r}">\n          <use href="./images/icons.svg#icon-deleteIcon" id="${r}"></use>\n        </svg></button>\n      </li>`})).join("");s.innerHTML="",s.insertAdjacentHTML("beforeend",e)};function x(){a.innerHTML="TOTAL: ";const e=f.reduce(((e,t)=>e+t.number),0);a.insertAdjacentHTML("beforeend",e)}function y(){u.classList.toggle("hidden")}
//# sourceMappingURL=index.29c71b8e.js.map

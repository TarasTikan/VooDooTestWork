function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("kyEFX").register(JSON.parse('{"d5lhQ":"index.0711e379.js","gv9sM":"not-images.b1286e6f.jpg","8OQ7p":"icons.7d46eb79.svg"}'));var i,s=o("khrDK"),d=o("btpe3");i=new URL(o("kyEFX").resolve("gv9sM"),import.meta.url).toString();var c;c=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const l=document.querySelector("#listProduct"),a=document.querySelector("#listProductBasket"),u=document.querySelector("#totalPrice"),m=document.querySelector("#totalProdacts"),f=document.querySelector('button[data-action="close"]'),p=document.querySelector("#basket"),b=document.querySelector("#basketExit");l.addEventListener("click",(async function(e){if("BUTTON"!==e.target.nodeName)return;const t=await(0,s.products)(d.limit,d.page);if(g.find((({id:t})=>t===Number(e.target.id))))return alert("Ви вже додавали цей продукт у корзину");const n={...t.products.find((({id:t})=>t===Number(e.target.id))),number:1};g.push(n),localStorage.setItem("products",JSON.stringify(g)),x(),h(),v()})),a.addEventListener("click",(function(e){if(e.target.id.includes("plus")){const t=e.target.id.split("-"),n=g.find((({id:e})=>e===Number(t[1])));n.number=n.number+1}else{const t=e.target.id.split("-"),n=g.find((({id:e})=>e===Number(t[1])));n.number=1===n.number?1:n.number-1}})),a.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName&&"svg"!==e.target.nodeName&&"use"!==e.target.nodeName)return;const t=g.filter((({id:t})=>t!==Number(e.target.id)));g=t,localStorage.setItem("products",JSON.stringify(g)),x(),h(),v()})),f.addEventListener("click",S),b.addEventListener("click",S),document.addEventListener("DOMContentLoaded",(()=>{x(),h(),v()}));let g=[];const y=JSON.parse(localStorage.getItem("products"));Array.isArray(y)&&y.map((e=>g.push(e)));const x=()=>{const t=g.map((({title:t,images:n,variants:r,id:o,number:s})=>{const d=((r[0].price||r[0].compare_at_price)*s).toLocaleString("en-US"),l=`<svg width="24px" height="24px" id="${o}">\n      <use href=${e(c)}#deleteIcon id="${o}"></use>\n      </svg>`;return`\n      <li class="flex gap-4 items-start ">\n        <img\n        src="${n.length>0?n[0].src:e(i)}"\n          class="rounded-md border border-white border-opacity-50 w-[74px]"\n          />\n        <div class="flex flex-col  justify-between w-[231px] h-heightImgBasket grid">\n          <h3 class="text-yellow-50 text-sm font-bold">${t}</h3>\n          <p class="text-yellow-50 text-sm font-bold"> ${d} KR.</p>\n          <div class="flex"><button type='button' class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="minus-${o}">-</button><p class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="number">${s}</p><button type='button' class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="plus-${o}">+</button></div>\n          </div>\n        <button type='button' id="${o}">${l}</button>\n      </li>`})).join("");a.innerHTML="",a.insertAdjacentHTML("beforeend",t)};function v(){m.innerHTML="TOTAL: ";const e=g.reduce(((e,t)=>e+t.number),0);m.insertAdjacentHTML("beforeend",e)}function S(){p.classList.toggle("hidden")}function h(){const e=g.reduce(((e,t)=>e+Number(t.variants[0].price)*t.number),0);u.innerHTML=" KR.",u.insertAdjacentHTML("afterbegin",e.toLocaleString("en-US"))}
//# sourceMappingURL=index.0711e379.js.map
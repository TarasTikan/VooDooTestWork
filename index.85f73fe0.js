!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),o("iE7OH").register(JSON.parse('{"em0yr":"index.85f73fe0.js","lyuoq":"not-images.b1286e6f.jpg","410VS":"icons.7d46eb79.svg"}'));var i=o("bpxeT"),c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a.default(e,t,n[t])}))}return e};var u,a=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var d,s=o("2TvXO"),l=o("XhTkP"),f=o("5TAx9");d=o("aNJCr").getBundleURL("em0yr")+o("iE7OH").resolve("lyuoq");var b;b=o("aNJCr").getBundleURL("em0yr")+o("iE7OH").resolve("410VS");var p=document.querySelector("#listProduct"),m=document.querySelector("#listProductBasket"),g=document.querySelector("#totalPrice"),v=document.querySelector("#totalProdacts"),y=document.querySelector('button[data-action="close"]'),x=document.querySelector("#basket"),h=document.querySelector("#basketExit");p.addEventListener("click",(function(e){return S.apply(this,arguments)})),m.addEventListener("click",(function(e){if(!e.target.id.includes("plus"))return;var t=e.target.id.split("-"),n=w.find((function(e){return e.id===Number(t[1])}));n.number=n.number+1})),m.addEventListener("click",(function(e){if(!e.target.id.includes("minus"))return;var t=e.target.id.split("-"),n=w.find((function(e){return e.id===Number(t[1])}));n.number=1===n.number?1:n.number-1})),m.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName&&"svg"!==e.target.nodeName&&"use"!==e.target.nodeName)return;var t=w.filter((function(t){return t.id!==Number(e.target.id)}));w=t,localStorage.setItem("products",JSON.stringify(w)),N(),L(),T()})),y.addEventListener("click",_),h.addEventListener("click",_),document.addEventListener("DOMContentLoaded",(function(){N(),L(),T()}));var w=[],O=JSON.parse(localStorage.getItem("products"));function S(){return(S=e(i)(e(s).mark((function t(n){var r,o,i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("BUTTON"===n.target.nodeName){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,(0,l.products)(f.limit,f.page);case 4:if(r=t.sent,!w.find((function(e){return e.id===Number(n.target.id)}))){t.next=8;break}return t.abrupt("return",alert("Ви вже додавали цей продукт у корзину"));case 8:o=r.products.find((function(e){return e.id===Number(n.target.id)})),i=e(c)({},o,{number:1}),w.push(i),localStorage.setItem("products",JSON.stringify(w)),N(),L(),T();case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){var e=w.reduce((function(e,t){return e+Number(t.variants[0].price)*t.number}),0);g.innerHTML=" KR.",g.insertAdjacentHTML("afterbegin",e.toLocaleString("en-US"))}Array.isArray(O)&&O.map((function(e){return w.push(e)}));var N=function(){var t=w.map((function(t){var n=t.title,r=t.images,o=t.variants,i=t.id,c=t.number,u=((o[0].price||o[0].compare_at_price)*c).toLocaleString("en-US"),a='<svg width="24px" height="24px" id="'.concat(i,'">\n        <use href=').concat(e(b),'#deleteIcon id="').concat(i,'"></use>\n      </svg>');return'\n      <li class="flex gap-4 items-start ">\n        <img\n          src="'.concat(r.length>0?r[0].src:e(d),'"\n          class="rounded-md border border-white border-opacity-50 w-[74px]"\n        />\n        <div class="flex flex-col  justify-between w-widthInfoProduct h-heightImgBasket grid">\n          <h3 class="text-yellow-50 text-sm font-bold">').concat(n,'</h3>\n          <p class="text-yellow-50 text-sm font-bold"> ').concat(u,' KR.</p>\n          <div class="flex"><button type=\'button\' class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="minus-').concat(i,'">-</button><p class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="number">').concat(c,'</p><button type=\'button\' class="w-5 h-5 text-center text-yellow-50 text-sm font-bold" id="plus-').concat(i,"\">+</button></div>\n        </div>\n        <button type='button' id=\"").concat(i,'">').concat(a,"</button>\n      </li>")})).join("");m.innerHTML="",m.insertAdjacentHTML("beforeend",t)};function T(){v.innerHTML="TOTAL: ";var e=w.reduce((function(e,t){return e+t.number}),0);v.insertAdjacentHTML("beforeend",e)}function _(){x.classList.toggle("hidden")}}();
//# sourceMappingURL=index.85f73fe0.js.map

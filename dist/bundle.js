(()=>{"use strict";console.log("JS loaded!");const e=document.querySelectorAll(".step"),t=document.querySelectorAll(".connect-line"),n=document.querySelector(".control-panel"),s=document.querySelector(".btn-outline"),c=document.querySelector(".btn-primary-2"),i=document.querySelector(".btn-primary"),l=document.querySelectorAll(".form"),o=document.querySelector(".shopping-cart-items");let r=0;n.addEventListener("click",(function(n){n.preventDefault();const o=e[r];if("下一步 →"===n.target.innerHTML){const n=e[r+1];o.classList.remove("active"),o.classList.add("checked"),n.classList.add("active"),s.classList.remove("d-none"),t[r].classList.add("bold"),l[r].classList.add("d-none"),l[r+1].classList.remove("d-none"),r+=1}else if("← 上一步"===n.target.innerHTML){const n=e[r-1];o.classList.remove("active"),n.classList.remove("checked"),n.classList.add("active"),t[r-1].classList.remove("bold"),l[r].classList.add("d-none"),l[r-1].classList.remove("d-none"),r-=1}0===r?s.classList.add("d-none"):(s.classList.remove("d-none"),c.classList.remove("d-none"),i.classList.add("d-none")),c.innerHTML=2===r?"送出申請":"下一步 →"})),o.addEventListener("click",(function(e){if(e.target.matches(".item-minus")){let t=e.target.nextElementSibling,n=parseInt(t.innerHTML)-1;n>=0?t.innerHTML=n:n<0&&(t.innerHTML=0)}else if(e.target.matches(".item-plus")){let t=e.target.previousElementSibling,n=parseInt(t.innerHTML)+1;t.innerHTML=n}}))})();
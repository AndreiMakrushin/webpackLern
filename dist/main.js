(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),c=()=>{let e=(()=>{let e=(new Date("26 aug 2022").getTime()-(new Date).getTime())/1e3,t=0,n=0,o=0;return e>0&&(t=Math.floor(e%60),n=Math.floor(e/60%60),o=Math.floor(e/60/60)),{timeRemaining:e,hours:o,minutes:n,seconds:t}})();t.textContent=e.hours,n.textContent=e.minutes,o.textContent=e.seconds,t.textContent<10&&(t.textContent="0"+t.textContent),o.textContent<10&&(o.textContent="0"+o.textContent),n.textContent<10&&(n.textContent="0"+n.textContent),e.timeRemaining<0&&clearInterval(setInterval(c,1e3))};setInterval(c,1e3)})(),(()=>{document.querySelector(".menu");const e=document.querySelector("menu");document.addEventListener("click",(t=>{t.target.closest(".menu")?e.classList.toggle("active-menu"):(t.target.closest(".close-btn")||t.target.closest("ul>li>a"),e.classList.remove("active-menu"))}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-content"),o={count:-400,speed:10,startPos:-400,endPos:200},c=()=>{o.startPos>o.endPos?o.count-=o.speed:o.count+=o.speed,n.style.transform=`translateY(${o.count}px)`,(o.startPos>o.endPos?o.count>o.endPos:o.count<o.endPos)&&requestAnimationFrame(c)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",screen.width>768&&(o.count=o.startPos,requestAnimationFrame(c))}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelector("main>a"),t=document.getElementById("service-block");e.addEventListener("click",(()=>{t.scrollIntoView({block:"center",behavior:"smooth"})}))})(),(()=>{const e=document.querySelector(".calc").querySelectorAll("input"),t=document.querySelectorAll('[placeholder="Ваше имя"]'),n=document.querySelectorAll('[placeholder="E-mail"]');document.querySelectorAll('[placeholder="Номер телефона"]').forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^+() 0-9 -]+(.*)/,"$1")})))),n.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^@ - _ .! ~ * ' a-z A-Z]+(.*)/,"$1")})))),t.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яёА-ЯЁ ]/g,"")})))),e.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/g,"")}))))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}))})()})();
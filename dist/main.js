(()=>{"use strict";const e=()=>{const e=document.querySelector(".popup-content"),t={count:-400,speed:10,startPos:-400,endPos:200},o=()=>{t.startPos>t.endPos?t.count-=t.speed:t.count+=t.speed,e.style.transform=`translateY(${t.count}px)`,(t.startPos>t.endPos?t.count>t.endPos:t.count<t.endPos)&&requestAnimationFrame(o)};o()};e();const t=({idForm:e,someElem:t=[]})=>{const o=document.getElementById(e),n=(document.querySelectorAll(".form-btn"),document.createElement("div")),a=document.querySelector('[placeholder="Ваше сообщение"]'),r=document.querySelectorAll('[placeholder="Ваше имя"]'),l=document.querySelectorAll('[placeholder="Номер телефона"]'),c=o.querySelectorAll("input");try{if(!o)throw new Error("Верните форму на место");o.addEventListener("submit",(e=>{e.preventDefault();let d=0;c.forEach((e=>{("email"===e.type&&""===e.value||"tel"===e.type&&""===e.value||"text"===e.type&&""===e.value)&&(d++,console.log(d))})),0===d&&(()=>{const e=o.querySelectorAll("input"),c=new FormData(o),d={};var u;n.textContent="Загрузка...",o.append(n),c.forEach(((e,t)=>{d[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?d[e.id]=t.textContent:"input"===e.type&&(d[e.id]=t.value)})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яёА-ЯЁ 0-9 , . - \s]/g,"")})),r.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яёА-ЯЁ ]/g,"")})))),l.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^+() 0-9 -]+(.*)/,"$1")})))),(u=d,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{n.textContent="Спасибо! Наш менеджер с вами свяжется!",e.forEach((e=>{e.value=""})),setTimeout(s,3e3)})).catch((e=>{n.textContent="Ошибка"}))})()}))}catch(e){console.log(e.message)}const s=()=>{n.textContent=""}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),a=()=>{let r=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=0,n=0,a=0;return t>0&&(o=Math.floor(t%60),n=Math.floor(t/60%60),a=Math.floor(t/60/60)),{timeRemaining:t,hours:a,minutes:n,seconds:o}})();t.textContent=r.hours,o.textContent=r.minutes,n.textContent=r.seconds,t.textContent<10&&(t.textContent="0"+t.textContent),n.textContent<10&&(n.textContent="0"+n.textContent),o.textContent<10&&(o.textContent="0"+o.textContent),r.timeRemaining<0&&clearInterval(setInterval(a,1e3))};setInterval(a,1e3),a()})("31 dec 2022"),(()=>{document.querySelector(".menu");const e=document.querySelector("menu");document.addEventListener("click",(t=>{t.target.closest(".menu")?e.classList.toggle("active-menu"):t.target.closest(".close-btn")||t.target.closest("ul>li>a")?e.classList.remove("active-menu"):t.target.closest("menu")||e.classList.remove("active-menu")}))})(),(()=>{const t=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((o=>{o.addEventListener("click",(()=>{t.style.display="block",screen.width>768&&(e.count=e.startPos,requestAnimationFrame(e))}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),(()=>{const e=document.querySelector("main>a"),t=document.getElementById("service-block");e.addEventListener("click",(()=>{t.scrollIntoView({block:"center",behavior:"smooth"})}))})(),(()=>{const e=document.querySelectorAll(".calc-block>input[type = text]"),t=document.querySelectorAll('[placeholder="Ваше имя"]'),o=document.querySelectorAll('[placeholder="E-mail"]'),n=document.querySelectorAll('[placeholder="Номер телефона"]'),a=document.querySelector('[placeholder="Ваше сообщение"]'),r=document.getElementById("form3-phone"),l=document.getElementById("form3-email");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/g,"")}))})),n.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^+() 0-9 -]+(.*)/,"$1")})))),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^+() 0-9 -]+(.*)/,"$1")})),o.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^@ - _ .! ~ * ' a-z A-Z 0-9]+(.*)/,"$1")})))),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^@ - _ .! ~ * ' a-z A-Z 0-9]+(.*)/,"$1")})),t.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яёА-ЯЁ ]/g,"")})))),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яёА-ЯЁ 0-9 , . - \s]/g,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,a=0;t.forEach((()=>{const e=document.createElement("li");e.classList.add("dot"),o.appendChild(e)})),o.children[0].classList.add("dot-active");const r=document.querySelectorAll(".dot"),l=(e,t,o)=>{e[t].classList.remove(o)},c=(e,t,o)=>{e[t].classList.add(o)},s=()=>{l(t,a,"portfolio-item-active"),l(r,a,"dot-active"),a++,a>=t.length&&(a=0),c(t,a,"portfolio-item-active"),c(r,a,"dot-active")},d=(e=1500)=>{n=setInterval(s,e)};e.addEventListener("click",(e=>{event.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,a,"portfolio-item-active"),l(r,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&r.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),c(t,a,"portfolio-item-active"),c(r,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&d(5e3)}),!0),d(5e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==n&&t.target!==a&&t.target!==r||(()=>{const t=+o.options[o.selectedIndex].value,c=n.value;let s=0,d=1,u=1;a.value>1&&(d+=+a.value/10),r.value&&r.value<5?u=2:r.value&&r.value<10&&(u=1.5),s=o.value&&n.value?e*t*c*d*u:0,l.textContent=s})()}))})(100),t({idForm:"form1",someElem:[{type:"block",id:"total"}]}),t({idForm:"form2",someElem:[{type:"block",id:"total"}]}),t({idForm:"form3",someElem:[{type:"block",id:"total"}]})})();
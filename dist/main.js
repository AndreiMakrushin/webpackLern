(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),c=()=>{let e=(()=>{let e=(new Date("26 aug 2022").getTime()-(new Date).getTime())/1e3,t=0,n=0,o=0;return e>0&&(t=Math.floor(e%60),n=Math.floor(e/60%60),o=Math.floor(e/60/60)),{timeRemaining:e,hours:o,minutes:n,seconds:t}})();t.textContent=e.hours,n.textContent=e.minutes,o.textContent=e.seconds,t.textContent<10&&(t.textContent="0"+t.textContent),o.textContent<10&&(o.textContent="0"+o.textContent),n.textContent<10&&(n.textContent="0"+n.textContent),e.timeRemaining<0&&clearInterval(setInterval(c,1e3))};setInterval(c,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-close"),o=document.querySelector(".popup-content"),c={count:-400,speed:10,startPos:-400,endPos:200},s=()=>{c.startPos>c.endPos?c.count-=c.speed:c.count+=c.speed,o.style.transform=`translateY(${c.count}px)`,(c.startPos>c.endPos?c.count>c.endPos:c.count<c.endPos)&&requestAnimationFrame(s)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",screen.width>768&&(c.count=c.startPos,requestAnimationFrame(s))}))})),n.addEventListener("click",(()=>{e.style.display="none"}))})(),(()=>{const e=document.querySelector("main>a"),t=document.getElementById("service-block");e.addEventListener("click",(()=>{console.log("scrol"),t.scrollIntoView({block:"center",behavior:"smooth"})}))})()})();
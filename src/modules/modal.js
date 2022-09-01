import {animate} from "./helpers"
animate();
const modal = ()=>{
    const popup = document.querySelector('.popup')
    const popupBtn = document.querySelectorAll('.popup-btn')
popupBtn.forEach(elem => {
    elem.addEventListener('click', () => {
        popup.style.display = 'block';
        if (screen.width > 768) {
            animate.count = animate.startPos;
            requestAnimationFrame(animate);
        }
    });
});
//------------------------------------------------------------------------------------------
popup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
        popup.style.display = 'none'
    }
});
};
export default modal
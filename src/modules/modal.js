const modal = ()=>{
    const popup = document.querySelector('.popup')
    const popupBtn = document.querySelectorAll('.popup-btn')
    const popupContent = document.querySelector('.popup-content')
    const popupData = {count: -400, speed: 10, startPos: -400, endPos: 200};
//--------------------------------------------------------------------------------------------

const showPopup = () => {
    popupData.startPos > popupData.endPos ? popupData.count -= popupData.speed : popupData.count += popupData.speed; popupContent.style.transform = `translateY(${popupData.count}px)`;
    if (popupData.startPos > popupData.endPos ? popupData.count > popupData.endPos : popupData.count < popupData.endPos) {requestAnimationFrame(showPopup);}};
//-------------------------------------------------------------------------------------------

popupBtn.forEach(elem => {
    elem.addEventListener('click', () => {
        popup.style.display = 'block';
        if (screen.width > 768) {
            popupData.count = popupData.startPos;
            requestAnimationFrame(showPopup);
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
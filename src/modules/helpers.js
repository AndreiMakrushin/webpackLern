  const animate = () =>{
    const popupContent = document.querySelector('.popup-content')
    const popupData = {count: -400, speed: 10, startPos: -400, endPos: 200};
    const showPopup = () => {
        popupData.startPos > popupData.endPos ? popupData.count -= popupData.speed : popupData.count += popupData.speed; popupContent.style.transform = `translateY(${popupData.count}px)`;
        if (popupData.startPos > popupData.endPos ? popupData.count > popupData.endPos : popupData.count < popupData.endPos) {requestAnimationFrame(showPopup);}
    };  
    showPopup()
    }

export {animate}
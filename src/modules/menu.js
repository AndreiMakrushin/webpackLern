const menu = ()=>{
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
//-----------------------------------------------------------------

    document.addEventListener('click', (e) =>{
        if (e.target.closest('.menu')) {
            menu.classList.toggle('active-menu')
        }else
        if (e.target.closest('.close-btn')){
            menu.classList.remove('active-menu')
        }else if (e.target.closest('ul>li>a')){
            menu.classList.remove('active-menu')
        }else if (!e.target.closest('menu')){
            menu.classList.remove('active-menu')
        }
   })

//---------------------------------------------------------------

}
export default menu 
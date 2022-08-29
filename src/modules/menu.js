const menu = ()=>{
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
//-----------------------------------------------------------------

   menu.addEventListener('click', (e) =>{
        if (e.target.closest('.close-btn')){
            menu.classList.remove('active-menu')
        }else if (e.target.closest('ul>li>a')){
            menu.classList.remove('active-menu')
        }else{
            menu.classList.remove('active-menu')
        }
   })

    menuBtn.addEventListener('click', () =>{
        menu.classList.toggle('active-menu')
    })  
//---------------------------------------------------------------

}
export default menu 
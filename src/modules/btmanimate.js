const btmanimate = () =>{
    const scrolBtn = document.querySelector('main>a')
    const service = document.getElementById('service-block')
    //----------------------------------------------------------------
    
   let scrol = () =>{
    service.scrollIntoView({block: "center", behavior: "smooth"})
   } 
scrolBtn.addEventListener('click', scrol)

}

export default btmanimate
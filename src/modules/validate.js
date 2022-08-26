const validate = () =>{
    const calc = document.querySelector('.calc')
    const input = calc.querySelectorAll('input')
    const valName = document.querySelectorAll('[placeholder="Ваше имя"]')
    const valEmail = document.querySelectorAll('[placeholder="E-mail"]')
    const valPhone = document.querySelectorAll('[placeholder="Номер телефона"]')
//-----------------------------------------------------------------------------------------

    valPhone.forEach(valPhone=> valPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^+() 0-9 -]+(.*)/, '$1')
    }))
//-----------------------------------------------------------------------------------------

    valEmail.forEach(valEmail=> valEmail.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^@ - _ .! ~ * ' a-z A-Z]+(.*)/, '$1')
    }))
//-----------------------------------------------------------------------------------------

    valName.forEach(valName=> valName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ ]/g,"")
    }))
//-----------------------------------------------------------------------------------------

    input.forEach(input => input.addEventListener('input', (e)=>{
        e.target.value  = e.target.value.replace(/\D/g, '')
    }))

}
export default validate
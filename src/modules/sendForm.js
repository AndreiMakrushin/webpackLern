const sendForm = ({ idForm, idForm2, idForm3, someElem = [] }) =>{
    const form = document.getElementById(idForm);
    const form2 = document.getElementById(idForm2);
    const form3 = document.getElementById(idForm3);
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка'
    const successText = 'Спасибо! Наш менеджер с вами свяжется!'
    const valMessage = document.querySelector('[placeholder="Ваше сообщение"]')
    const valName = document.querySelectorAll('[placeholder="Ваше имя"]')
    const valPhone = document.querySelectorAll('[placeholder="Номер телефона"]')
//---------------------------------------------------------------------------------------

    const validate = () =>{
        let success = true
        valMessage.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ 0-9 , . - \s]/g, "")
        })
        valName.forEach(valName => valName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ ]/g, "")
        }))
        valPhone.forEach(valPhone => valPhone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^+() 0-9 -]+(.*)/, '$1')
        }))
        return success
    }
//-------------------------------------------------------------------------------------------

    const sendData = (data) =>{
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }
//-------------------------------------------------------------------------------------------------

    const submitForm = () =>{
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form);
        const formbody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)
        formData.forEach((val, key) =>{
         formbody[key] = val
        })
        someElem.forEach(elem =>{
         const element = document.getElementById(elem.id)
         if (elem.type === 'block') {
             formbody[elem.id] = element.textContent
         }else if (elem.type === 'input') {
             formbody[elem.id] = element.value
         }
        })
 //----------------------------------------------------------------------------------------

        if (validate(formElements)) {
             sendData(formbody)
             .then(data =>{
                 statusBlock.textContent = successText
                 formElements.forEach(input =>{
                     input.value = ''
                 })
             }).catch(error => {
                 statusBlock.textContent = errorText
             })
        }else{
         alert('Данные не валидны!')
        }
    }
 //---------------------------------------------------------------------------------------------
    const submitForm2 = () =>{
        const formElements2 = form2.querySelectorAll('input')
        const formData = new FormData(form2);
        const formbody = {}
 
        statusBlock.textContent = loadText
        form2.append(statusBlock)
        formData.forEach((val, key) =>{
         formbody[key] = val
        })
        someElem.forEach(elem =>{
         const element = document.getElementById(elem.id)
         if (elem.type === 'block') {
             formbody[elem.id] = element.textContent
         }else if (elem.type === 'input') {
             formbody[elem.id] = element.value
         }
        })
 //----------------------------------------------------------------------------------------------------   
 
        if (validate(formElements2)) {
             sendData(formbody)
             .then(data =>{
                 statusBlock.textContent = successText
                 formElements2.forEach(input =>{
                     input.value = ''
                 })
             }).catch(error => {
                 statusBlock.textContent = errorText
             })
        }else{
         alert('Данные не валидны!')
        }
    }
//------------------------------------------------------------------------------------------------------

    const submitForm3 = () =>{
        const formElements3 = form3.querySelectorAll('input')
        const formData = new FormData(form3);
        const formbody = {}
 
        statusBlock.textContent = loadText
        form3.append(statusBlock)
        formData.forEach((val, key) =>{
         formbody[key] = val
        })
        someElem.forEach(elem =>{
         const element = document.getElementById(elem.id)
         if (elem.type === 'block') {
             formbody[elem.id] = element.textContent
         }else if (elem.type === 'input') {
             formbody[elem.id] = element.value
         }
        })
 //-------------------------------------------------------------------------------------

        if (validate(formElements3)) {
             sendData(formbody)
             .then(data =>{
                 statusBlock.textContent = successText
                 formElements3.forEach(input =>{
                     input.value = ''
                 })
             }).catch(error => {
                 statusBlock.textContent = errorText
             })
        }else{
         alert('Данные не валидны!')
        }
    }
    //-------------------------------------------------------------
    try {
        if (!form, !form2, !form3) {
            throw new Error('Верните форму на место')
        }
        form.addEventListener('submit', (event) =>{
            event.preventDefault();
           submitForm() 
        })
        form2.addEventListener('submit', (event) =>{
            event.preventDefault();
           submitForm2() 
        })
        form3.addEventListener('submit', (event) =>{
            event.preventDefault();
           submitForm3() 
        })
    } catch (error) {
        console.log(error.message)
    }
    
}
export default sendForm
//sendForm({form1: 'form1'})
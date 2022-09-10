import countdowntimer from "./modules/countdowntimer.js"
import menu from "./modules/menu.js"
import modal from "./modules/modal.js"
import btmanimate from "./modules/btmanimate"
import validate from "./modules/validate"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calculator from "./modules/calculator"
import sendForm from "./modules/sendForm"


countdowntimer('10 sep 2022');
menu();
modal();
btmanimate();
validate();
tabs();
slider();
calculator(100);
sendForm({
    idForm: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    idForm: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    idForm: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});

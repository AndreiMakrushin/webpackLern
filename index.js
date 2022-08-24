const greeting = document.createElement('div')
const dayWeek = document.createElement('div')
const currentTimer = document.createElement('div')
const newYearDays = document.createElement('div')
//----------------------------------------------------------------------

function clock(){
const date = new Date()
const days = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
]
const hour = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const day = days[date.getDay()]
const time = date.toLocaleDateString('ru')
const newDate = new Date(new Date().getFullYear() + 1, 0, 1);
//-------------------------------------------------------------------

const changeEnding = (num) => {
    const textVariant = [' день', ' дня', ' дней'];
    const n1 = num % 100,
        n2 = num % 10;
    return n1 > 4 && n1 < 21 ? num + textVariant[2] :
        n2 === 1 ? num + textVariant[0] :
        n2 > 1 && n2 < 5 ? num + textVariant[1] :
        num + textVariant[2];
};
//----------------------------------------------------------------------------------------------------------------------------------------

greeting.textContent = hour < 5 || hour > 22 ? 'Доброй ночи' : hour < 10 ? 'Доброе утро' : hour < 17 ? 'Добрый день' : 'Добрый вечер';
dayWeek.textContent = 'Сегодня : ' + day;
currentTimer.textContent = 'Текущее время : ' + hour + ':'+ minutes + ':' + seconds;
newYearDays.textContent = 'До нового года осталось : ' + changeEnding(Math.ceil((newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24));
//--------------------------------------------------------------------------------------------------------------------------------------------

document.body.append(greeting, dayWeek, currentTimer, newYearDays)
//этого нет в задании, просто сделал стили

const div  = document.querySelectorAll('div')
div.forEach(item => {
    item.classList.add('hello')
})
}
setInterval(clock, 1000)
//-----------------------------------------------------------------------------------------------------------------------------------------



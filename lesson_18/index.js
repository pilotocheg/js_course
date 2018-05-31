const moment = require('moment');
moment.locale('ru');
const btn = document.getElementById('btn');
const num = document.getElementById('num');
const date = document.getElementById('date');

date.value = "2019-01-12";


btn.addEventListener('click', function(){
    const result = moment().diff(`${date.value}`, 'days');
    num.innerHTML = `${Math.abs(result)}`;
})

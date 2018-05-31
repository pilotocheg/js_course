const moment = require('moment');

const date = document.getElementById('date').value;
const btn = document.getElementById('btn');
const num = document.getElementById('num');
const result = moment(date, "YYYY-MM-DD").fromNow();

btn.addEventListener('click', function(){
    num.innerHTML = 'result';
})
// console.log(result);
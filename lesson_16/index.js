const n = 10;
const numbers = document.getElementById('numbers');
const startB = document.getElementById('start');
const pauseB = document.getElementById('pause');
const stopB = document.getElementById('stop');
const second = document.getElementById('second');
let num = 0;
let speed = 1000;

second.appendChild(document.createTextNode(num));

for (i = 1; i <= n; i += 1) {
	let span = document.createElement('span');
	span.setAttribute('id', `span_${i}`);
	span.appendChild(document.createTextNode(i));

	numbers.insertBefore(span, numbers.children[i]);
	if(i < n) {
	numbers.insertBefore(document.createTextNode(', '), numbers.children[i + 1])
	}
}

function count() {
	let interval = setInterval(function(){
		num += 1;
		second.innerHTML = num;
		startB.setAttribute('disabled', 'true');
	}, speed);

	pauseB.addEventListener('click', function(){
		clearInterval(interval);
		startB.removeAttribute('disabled');
	})

	stopB.addEventListener('click', function(){
		clearInterval(interval);
		second.innerHTML = 0;
		num = 0;
		startB.removeAttribute('disabled');
	})
}

startB.addEventListener('click', count);
document.getElementById('x1').addEventListener('click', function(){
	speed = 1000;
});
document.getElementById('x2').addEventListener('click', function(){
	speed = 500;
});
document.getElementById('x3').addEventListener('click', function(){
	speed = 366;
})
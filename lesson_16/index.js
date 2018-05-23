const n = 15;

const numbers = document.getElementById('numbers');
const startB = document.getElementById('start');
const pauseB = document.getElementById('pause');
const stopB = document.getElementById('stop');
const second = document.getElementById('second');
const letS = document.getElementById('letS');

let num = 0, counter = 0, speed = 1000, interval;

letS.innerHTML = 's';

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
	
	interval = setInterval(function(){
		num += 1;
		second.innerHTML = num;
		startB.setAttribute('disabled', 'true');

		if (num === 1) {
			letS.innerHTML = '';
		} else {
			letS.innerHTML = 's';
		}

		if (counter < n) {
			counter += 1;
			document.getElementById(`span_${counter}`).style.backgroundColor = 'orange';
		} else if (counter === n) {
			counter += n + 1;
			document.getElementById(`span_${counter - n - 1}`).style.backgroundColor = 'gray';
			counter -= 1;
		} else if (counter > n + 1) {
			counter -= 1;
			document.getElementById(`span_${counter - n}`).style.backgroundColor = 'gray';
		} else if (counter === n + 1) {
			counter = 0;
			document.getElementById(`span_${counter + 1}`).style.backgroundColor = 'orange';
			counter += 1;
		}
	}, speed);

	pauseB.addEventListener('click', function(){
		clearInterval(interval);
		startB.removeAttribute('disabled');
	})

	stopB.addEventListener('click', function(){
		clearInterval(interval);
		second.innerHTML = 0;
		num = 0;
		counter = 0;
		
		let numb = numbers.children;
		for (let i = 1; i < numb.length - 1; i++ ) {
			numb[i].style.backgroundColor = '';
		}

		startB.removeAttribute('disabled');
		letS.innerHTML = 's';
	})
}

startB.addEventListener('click', count);

document.getElementById('x1').addEventListener('click', function(){
	speed = 1000;
	clearInterval(interval);
	startB.removeAttribute('disabled');
});
document.getElementById('x2').addEventListener('click', function(){
	speed = 500;
	clearInterval(interval);
	startB.removeAttribute('disabled');
});
document.getElementById('x3').addEventListener('click', function(){
	speed = 336;
	clearInterval(interval);
	startB.removeAttribute('disabled');
})
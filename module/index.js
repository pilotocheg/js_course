// Task 1

function itsMe(a = 'pilotocheg'){
	console.log(`It's me ${a}`);
	return `It's me ${a}`;
}

// Task 2

function compare(a, b){
	if (typeof a !== 'number' || typeof b !== 'number'){
		return 'НЕ ЧИСЛО';
	} else {
		if (a > b) {
			return `${a} > ${b}`;
		} else if (a < b) {
			return `${a} < ${b}`;
		} else if (a === b) {
			return `${a} == ${b}`;
		} 
	}
}

// Task 3

function row(a, b, c, diff) {
	let numbers = [];
	for (let i = 0; i < arguments.length - 1; i++){
		numbers.push(arguments[i]);
	}
	switch (diff) {
		case '<':
			numbers.sort();
			return numbers.join(' < ');
			break;
		case '>':
			numbers.sort().reverse();
			return numbers.join(' > ');
			break;
	}
}

// Task 4

function fact(a) {
	let n = 0;

	while (a > 1) {
		n++;
		a = a / n;
	}
	return n;
}

// Task 5

function matrixDiff(arr1, arr2) {
	let allSum = 0;
	cycle: for (let i = 0; i < arguments.length; i++) {
		let sum = 0;
		if (arguments[0].length === arguments[i].length){
			for (let j = 0; j < arguments[i].length; j++){
					let dif = arguments[i][j][0];
					if (arguments[i][0].length === arguments[i][j].length){
						for (let k = 1; k < arguments[i][j].length; k++) {
							dif -= arguments[i][j][k];
						}
					}	else {
						return NaN;
					}
					sum += Math.abs(dif);
			}
			allSum += sum;
		} else {
			return NaN;
		}
	}
	return allSum;
}

function strangeSearch (arr){
	for (i = 0; i < arr.length; i++){
		let div = document.createElement('div');
		let input = document.createElement('input');
		input.setAttribute('type', 'number');
		input.setAttribute('value', '0');
		div.appendChild(document.createTextNode(`${arr[i]}`));
		div.appendChild(input);
		document.body.appendChild(div);
	}
	let button = document.createElement('button');
	button.setAttribute('id', 'go');
	button.appendChild(document.createTextNode('Search'));
	document.body.appendChild(button);
	let go = document.getElementById('go');
	go.addEventListener('click', function(){
		let arr = document.querySelector('div').children;
			let words = [];
		for (i = 0; i < arr.length; i++){
			let inp = document.querySelectorAll('input')[i];
			if (inp.getAttribute('value')) {
				words.push(arr[i]);
			}
		}

		window.location.href = `https://www.youtube.com/?gl=UA&hl=ru?${words.join('+')}`;
	});

}
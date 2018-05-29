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
	let n = 1;
	let f = 1;

	while (a > 1) {
		n *= (f + 1);
		f++;
		a--;
	}
	return n;
}

// Task 5

function matrixDiff(arr1, arr2) {
	let allSum = 0;
	for (let i = 0; i < arguments.length; i++) {
		let sum = 0;
		if (arguments[0].length === arguments[i].length){
			for (let j = 0; j < arguments[i].length; j++){
					let dif = arguments[i][j][0];
					if (arguments[i][0].length === arguments[i][j].length){
						for (let k = 1; k < arguments[i][j].length; k++) {
							dif -= arguments[i][j][k];
						}
					} else {
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
	let nums = [];

	go.addEventListener('click', function(){
		let arr2 = document.querySelectorAll('div');
		
		for (let j = 0; j < arr2.length; j++){
			let inp = document.querySelectorAll('input')[j];
			if (inp.value !== '0') {
				let n = 0;
				for (num in nums) {
					if (+inp.value + n === +num){
						n++;
					}
				}
				nums[+inp.value + n] = arr[j];
			}
		}
		for (let k = 0; k < nums.length; k++) {
			if (nums[k] === undefined) {
				nums.splice(k, 1);
				k -= 1;
			}
		}
		// console.log(nums.join('+'));
		window.location = `https://www.youtube.com/results?search_query=${nums.join("%2B")}`;
	});

}
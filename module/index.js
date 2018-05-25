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
	let fact = 0;
	while (a > 1) {
		n++;
		a = a / n;
	}
	return n;
}
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
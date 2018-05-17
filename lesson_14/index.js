function add(str = '❤🇺🇦') {
	let sum = 0;
	
	for (let i in str) {
		sum += str.charCodeAt(i);
	}
	return sum / str.length;
}

function clearNumbers(arr = []) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (typeof arr[i][j] !== 'number') {
				arr[i].splice(j, 1);
			}
		}
	}
	return arr;
}
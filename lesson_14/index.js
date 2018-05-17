function add(str = '❤🇺🇦') {
	let sum = 0;
	
	for (let i in str) {
		sum += str.charCodeAt(i);
	}
	return sum / str.length;
}
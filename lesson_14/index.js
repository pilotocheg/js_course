function add(str = '❤🇺🇦') {
	let sum = 0;
	let middle = 0;
	let num = 0;

	for (let i of str) {
		for (let j in i) {
			sum += i.charCodeAt(j);
		}
		middle += sum;
		
		num++;
		
		sum = 0;
	}
	return middle / num;
}

function clearNumbers(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (typeof arr[i][j] !== 'number') {
				arr[i].splice(j, 1);
				j -= 1;
			}
		}
	}
	return arr;
}

function revers() {
	let str;
	let strArr = [];

	for (let i = (arguments.length - 1); i >= 0; i--) {
		str = arguments[i].split("").reverse().join("");
		
		strArr.push(str);
	}

	return strArr;
}

function splitArray(arr, num) {
	let arrArr = [];
	let someArr;

	while (arr.length){
		someArr = arr.splice(0, num)
		arrArr.push(someArr);
	}

	return arrArr;
}
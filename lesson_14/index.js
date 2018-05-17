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

	for (i = 0; i < arr.length; i = num) {
		if(i === 0){
			someArr = arr.slice(i, num)
		} else {
			someArr = arr.slice(i, (num += num))
		}
		arrArr.push(someArr)
	}

	return arrArr;
}
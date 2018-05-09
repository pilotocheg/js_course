const arr1 = [-120, 3334, 334, 1333];
let sum = 0, min = arr1[0], max = min;

for (let i = 0; i < arr1.length; i++) {
	sum += arr1[i];
	if (min > arr1[i]) min = arr1[i];
	if (max < arr1[i]) max = arr1[i];
}

console.log(sum);
console.log(sum / arr1.length);
console.log(min);
console.log(max);

const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };
let arr2 = obj1['value'], arr3 = [];

for (j = obj1['from']; j <= obj1['to']; j++) {
	if (j == obj1['ignore']) continue;
	arr3.push(arr2[j]);
}

console.log(arr3.join(', '))
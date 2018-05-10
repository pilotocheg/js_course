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

const obj1 = { from: 2, to: 6, value: [25, 26, 27, 28, 29, 30, 31, 32], ignore: [3, 5] };
let arr2 = obj1['value'], arr3 = [];

cycle:
for (j = obj1['from']; j <= obj1['to']; j++) {
	for (k of obj1['ignore']) {
		if (j == k) continue cycle;
	}
	arr3.push(arr2[j]);
}

console.log(arr3.join(', '))
function removeKeys1(obj1, arr1) {
	for (let key of arr1) {
		if (key in obj1) {
			delete obj1[key];
		}
	}
	return obj1;
}

function removeKeys2(obj2, arr2) {
	for (let key of arr2) {
		if (key in obj2) {
			delete obj2[key];
		}
	}
	let newObj = Object.assign({}, obj2);
	
	return newObj;
}

function absDiff(a) {
	return (b) => Math.abs(a - b);
}
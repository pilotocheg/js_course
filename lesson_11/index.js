let a = 2, b = 2, operation = 'add';


switch (operation) {
	case 'sub':
		console.log(a - b);
		break;
	case 'mult':
		console.log(a * b);
		break;
	case 'div':
		console.log(a / b);
		break;
	case 'pow':
		console.log(Math.pow(a,b));
		break;
	case 'add':
		console.log(a + b);
		break;
}
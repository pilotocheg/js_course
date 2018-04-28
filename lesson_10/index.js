const myAge = 115;

let year = 'лет';

if ((myAge % 10) == 1) {
	year = 'год'
}

if ((myAge % 100) >= 5 && (myAge % 100) <=20) {
	year = 'лет'
}

else if ((myAge % 10) >= 2 && (myAge % 10) <= 4) {
	year = 'года'
}

console.log(`Мой возраст ${myAge} ${year}`);
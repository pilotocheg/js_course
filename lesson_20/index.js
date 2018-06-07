class Human {
    constructor(arr) {
        this.arr = arr; 
    }

    sayHello() {
        console.log(`Hello, my name is ${this.arr.name}, i am ${this.arr.age} years old`);
    }
}

let human = new Human({ name: 'Slavik', age: 25 });
human.sayHello()

class AlevelStudent extends Human {
    constructor(arr) {
        super();
        this.arr = arr;
    }

    averageMark() {
        let marks = this.arr.marks;
        let sum = marks[0];
        for (let i in marks) {
            if (i > 0) sum += marks[i];
        }
        console.log(sum / marks.length);
    }
}

let alevelStudent = new AlevelStudent({ name: 'Slavik', age: 25, marks: [1, 2, 3, 4, 5] });
alevelStudent.averageMark()
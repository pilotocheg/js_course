function Human(arr) {
    this.arr = arr; 
}

Human.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.arr.name}, i am ${this.arr.age} years old`);
};

let human = new Human({ name: 'Slavik', age: 25 });
human.sayHello()

function AlevelStudent(arr) {
    this.arr = arr;
}

AlevelStudent.prototype = human;

AlevelStudent.prototype.averageMark = function() {
    let marks = this.arr.marks;
    let sum = 0;
    for (let i in marks) {
        sum += marks[i];
    }
    console.log(sum / marks.length);
}

let alevelStudent = new AlevelStudent({ name: 'Slavik', age: 25, marks: [1, 2, 3, 4, 5] });
alevelStudent.averageMark()
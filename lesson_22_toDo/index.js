class Task {
    constructor () {
        this.list = document.getElementById('list');
        this.text = document.getElementById('text');

        this.li = document.createElement('li');
        this.del = document.createElement('button');
        this.done = document.createElement('label');
        this.input = document.createElement('input');
        this.counter = counter;

        this.createTask();
    }

    createTask() {
        this.done.setAttribute('class', 'done');
        this.done.innerHTML = 'v';
        this.input.type = 'checkbox';
        this.input.onchange = this.doneTask.bind(this);
        this.done.appendChild(this.input);
        this.del.setAttribute('class', 'delete');
        this.del.innerHTML = 'x';
        this.del.onclick = this.deleteTask.bind(this);

        this.li.innerHTML = this.text.value;
        this.li.appendChild(this.done);
        this.li.appendChild(this.del);
        this.list.appendChild(this.li);
        
        this.text.value = '';
        counter++;
    };

    deleteTask() {
        this.li.remove();
        delete taskArr[this.counter];
        if(this.list.children.length === 0) {
            while (taskArr.length) {
                taskArr.splice(0, 1);
                counter = 0;
            }
        }
        console.log(taskArr);
    }
    doneTask() {
        if(this.input.checked) {
            this.li.style.textDecoration = 'line-through';
            this.li.style.color = 'lightseagreen';
            this.li.style.background = 'lightgray';
            this.done.style.background = 'lightseagreen';
        } else {
            this.li.style.textDecoration = 'none';
            this.li.style.color = 'lightcoral';
            this.li.style.background = 'white';
            this.done.style.background = 'none';
        }
    }
}

const btn = document.getElementById('btn');
const taskArr = [];
let counter = 0;

btn.addEventListener('click', () => {
    const text = document.getElementById('text');
    if (text.value) {
        taskArr.push(new Task());
        console.log(taskArr);
    }
    
})

window.onbeforeunload = () => {
    if(taskArr.length) {
        const jsonArr = JSON.stringify(taskArr);
        window.localStorage.setItem('taskArr', jsonArr);
    }
}

window.onload = () => {
    if(window.localStorage.length) {
        const list = document.getElementById('list');
        console.log(window.localStorage);
        let jsonArr = JSON.parse(window.localStorage.getItem('taskArr'));
        console.log(jsonArr);
        taskArr.concat(jsonArr);
        for (let i in taskArr) {
            list.appendChild(taskArr[i].li);
        }
    }
}
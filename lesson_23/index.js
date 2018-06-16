const btn = document.getElementById('btn');
const text = document.getElementById('text');
const todoCache = [];
let counter = 0;

class Task {
    constructor (textValue) {
        this.list = document.getElementById('list');
        this.textValue = textValue;

        this.li = document.createElement('li');
        this.del = document.createElement('button');
        this.done = document.createElement('label');
        this.input = document.createElement('input');
        this.counter = counter;
        this.doneCheck = false;

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

        this.li.appendChild(document.createTextNode(this.textValue));
        this.li.appendChild(this.done);
        this.li.appendChild(this.del);
        this.list.appendChild(this.li);

        todoCache[this.counter] = {
            textValue: this.textValue,
            doneCheck: this.doneCheck
        };
        localStorage.setItem('todoCache', JSON.stringify(todoCache));
        
        text.value = '';
        counter++;
    };

    deleteTask() {
        this.li.remove();
        delete todoCache[this.counter];
        localStorage.setItem('todoCache', JSON.stringify(todoCache));

    }
    
    doneTask() {
        if(!this.doneCheck) {
            this.li.style.textDecoration = 'line-through';
            this.li.style.color = 'lightseagreen';
            this.li.style.background = 'lightgray';
            this.done.style.background = 'lightseagreen';
            this.doneCheck = true;
        } else {
            this.li.style.textDecoration = 'none';
            this.li.style.color = 'lightcoral';
            this.li.style.background = 'white';
            this.done.style.background = 'none';
            this.doneCheck = false;
        }
        
        todoCache[this.counter].doneCheck = this.doneCheck;
        localStorage.setItem('todoCache', JSON.stringify(todoCache));

    }
}


btn.addEventListener('click', () => {
    const text = document.getElementById('text');
    if (text.value) {
        new Task(text.value);
    }
    
})

window.onload = () => {
    if(localStorage.length) {
        let taskArr = JSON.parse(localStorage.getItem('todoCache'));
        localStorage.clear();
        for (let i in taskArr) {
            if (taskArr[i] !== null) {
                if (taskArr[i].doneCheck !== false) {
                    new Task(taskArr[i].textValue).doneTask();
                } else {
                    new Task(taskArr[i].textValue);
                }
            }
        }
    }
}
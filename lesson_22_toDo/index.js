class Task {
    constructor () {
        this.list = document.getElementById('list');
        this.text = document.getElementById('text');

        this.li = document.createElement('li');
        this.del = document.createElement('button');
        this.done = document.createElement('label');
        this.input = document.createElement('input');

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
    };

    deleteTask() {
        this.li.remove();
        delete this;
    }
    doneTask() {
        if(this.input.checked) {
            this.li.style.textDecoration = 'line-through';
            this.done.style.background = 'lightseagreen';
        } else {
            this.li.style.textDecoration = 'none';
            this.done.style.background = 'none';
        }
    }
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    new Task();
})
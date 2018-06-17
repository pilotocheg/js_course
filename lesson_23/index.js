const btn = document.getElementById('btn');
const text = document.getElementById('text');
const todoCache = [];
const taskArr = [];
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
        this.done.innerHTML = '&#10004;';
        this.input.type = 'checkbox';
        this.input.onchange = this.doneTask.bind(this);
        this.done.appendChild(this.input);
        this.del.setAttribute('class', 'delete');
        this.del.innerHTML = '&#10008;';
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
        this.deleteAnimation()     
        .then(() => {
            this.li.remove();
            taskArr.splice(this.counter, 1);
            todoCache.splice(this.counter, 1);
            localStorage.setItem('todoCache', JSON.stringify(todoCache));
            for(let i = 0; i < taskArr.length; i++) {
                if (i >= this.counter) {
                    taskArr[i].counter -= 1;
                }
            }
            counter--;
        });
    };
    doneTask() {
        if(!this.doneCheck) {
            this.li.style.textDecoration = 'line-through';
            this.li.style.color = 'lightseagreen';
            this.li.style.background = 'lightgray';
            this.done.style.background = 'lightseagreen';
            this.done.style.color = 'white';
            this.doneCheck = true;
        } else {
            this.li.style.textDecoration = 'none';
            this.li.style.color = 'lightcoral';
            this.li.style.background = 'white';
            this.done.style.background = 'none';
            this.done.style.color = 'lightseagreen';
            this.doneCheck = false;
        }
        
        todoCache[this.counter].doneCheck = this.doneCheck;
        localStorage.setItem('todoCache', JSON.stringify(todoCache));
    }
    deleteAnimation() {
        return new Promise(resolve => {
            let delAnimCount = 1;
            this.del.setAttribute('disabled', 'true');
            this.delInterval = setInterval(() => {
                if(delAnimCount > 100) {
                    clearInterval(this.delInterval);
                    resolve();
                }
                this.li.style.transform = `translateX(${delAnimCount}%)`
                delAnimCount += 1;
            }, 2);
        });
    };
};

text.onfocus = () => {
    text.style.border = '2px solid lightseagreen';
    text.style.boxShadow = '0 0 2px lightseagreen';
    text.style.color = 'lightseagreen';
    text.value = '';
    btn.removeAttribute('disabled');
}

text.onblur = () => {
    text.style.border = '2px solid lightcoral';
    text.style.boxShadow = 'none';
    btn.removeAttribute('disabled');
}

btn.addEventListener('click', () => {
    if (text.value) {
        taskArr.push(new Task(text.value));
    } else {
        text.style.border = '2px solid red';
        text.style.boxShadow = '0 0 2px red';
        text.style.color = 'red';
        text.value = 'Type your task:'
        btn.setAttribute('disabled', 'true');
    }
    
})

window.onload = () => {
    if(localStorage.length) {
        let tempArr = JSON.parse(localStorage.getItem('todoCache'));
        localStorage.removeItem('todoCache');
        for (let i in tempArr) {
            if (tempArr[i].hasOwnProperty('textValue') && tempArr[i].textValue.length) {
                if (tempArr[i].doneCheck !== false) {
                    taskArr.push(new Task(tempArr[i].textValue).doneTask());
                } else {
                    taskArr.push(new Task(tempArr[i].textValue));
                }
                console.log('ok');
            }
        }
    }
}
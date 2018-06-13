const textInp = document.getElementById('text');
const list = document.getElementById('list');
const btn = document.getElementById('btn');

function createTask() {
    const value = textInp.value;
    if (value) {
        let li = document.createElement('li');
        let del = document.createElement('button');
        let done = document.createElement('label');
        let check = document.createElement('input');

        li.innerHTML = value;
        del.setAttribute('class', 'delete');
        del.setAttribute('onclick', 'parentNode.remove()');
        del.innerHTML = 'x';
        
        done.setAttribute('class', 'done');
        done.innerHTML = 'v';
        
        check.setAttribute('type', 'checkbox');
        check.setAttribute('checked', 'false');
        check.setAttribute('onclick', 'if(this.checked) {parentNode.parentNode.style.textDecoration = "none"} else {parentNode.parentNode.style.textDecoration = "line-through"}');

        done.appendChild(check);
        li.appendChild(del);
        li.appendChild(done);
        list.appendChild(li);
        textInp.value = '';
    }
};

btn.addEventListener('click', createTask);
// window.onbeforeunload = function() {
//     localStorage.setItem('list', `${JSON.stringify(list)}`);
// }
// window.onload = localStorage.getItem('list');

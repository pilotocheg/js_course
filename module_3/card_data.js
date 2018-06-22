

export default class CardData {
    constructor () {
        this.inp1 = document.getElementById('inp');
        this.inp2 = document.getElementById('inp2');
        this.anim = document.createElement('span');
        this.anim.innerHTML = 'loading';
        this.anim.style.display = 'none';
        document.body.appendChild(this.anim);

        this.cardCache = JSON.parse(localStorage.getItem('cache')) || {};
        window.onload = () => {
            if (this.cardCache.length) {
                this.setData(this.cardCache);
            }
        }
    }

    showPreloader() {
        this.inp1.setAttribute('disabled', 'true');
        this.inp2.setAttribute('disabled', 'true');
        this.anim.style.display = 'inline';
    }

    hidePreloader() {
        this.inp1.removeAttribute('disabled');
        this.inp2.removeAttribute('disabled');
        this.anim.style.display = 'none';
    }

    setData(obj) {
        if(this.cardCache !== obj){
            if(this.table){
                delete this.table;
                delete this.clearBtn;
                document.getElementById('tab').remove();
                document.getElementById('clear').remove();
                // this.setData.bind(this);
            }
            this.cardCache = obj;
            localStorage.setItem('cache', JSON.stringify(this.cardCache));
            this.table = document.createElement('table');
            this.table.setAttribute('id', 'tab');
            for (let i in obj) {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let word = i.charAt(0).toUpperCase() + i.substr(1);
                td1.textContent = word;
                if(obj[i]) {
                    td2.textContent = obj[i];
                } else {
                    td2.textContent = 'Unknown';
                }
                tr.appendChild(td1);
                tr.appendChild(td2);
                this.table.appendChild(tr);
            }
            document.body.appendChild(this.table);
            this.createClearBtn();
        }
    }
    createClearBtn() {
        this.clearBtn = document.createElement('button');
        this.clearBtn.id = 'clear';
        this.clearBtn.textContent = 'clear';
        this.clearBtn.onclick = () => {
            delete this.table;
            document.getElementById('tab').remove();
            this.cardCache = {};
            localStorage.setItem('cache', JSON.stringify(this.cardCache));
            document.getElementById('clear').remove();
        }
        document.body.appendChild(this.clearBtn);
    }
}
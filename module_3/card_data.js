

export default class CardData {
  constructor () {
    this.inp1 = document.getElementById('inp');
    this.inp2 = document.getElementById('inp2');
    this.anim = document.createElement('span');
    this.anim.innerHTML = 'loading';
    this.anim.style.display = 'none';
    document.body.appendChild(this.anim);

    // this.cardCache = JSON.parse(localStorage.getItem('cache')) || {};
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
        if(this.table){
            this.table.remove();
            this.clearBtn.remove();
        }
        // localStorage.setItem('cache', JSON.stringify(obj));
        this.table = document.createElement('table');
        this.table.setAttribute('id', 'tab');
        for (let i in obj) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.textContent = i.charAt(0).toUpperCase() + i.substr(1);
            td2.textContent = obj[i] || "Unknown";
            tr.appendChild(td1);
            tr.appendChild(td2);
            this.table.appendChild(tr);
        }
        document.body.appendChild(this.table);
        this.createClearBtn();
  }
  createClearBtn() {
    this.clearBtn = document.createElement('button');
    this.clearBtn.id = 'clear';
    this.clearBtn.textContent = 'clear';
    this.clearBtn.onclick = () => {
        this.table.remove();
        this.cardCache = {};
        // localStorage.setItem('cache', JSON.stringify(this.cardCache));
        this.clearBtn.remove();
    }
    document.body.appendChild(this.clearBtn);
  }
}
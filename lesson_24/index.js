class Email {
    constructor () {
        this.regExp = /^\w[\w!#$%&'*+\-/=?^_`{|}~]+\.?[\w!#$%&'*+\-/=?^_`{|}~]+@\w{1,12}\.[A-z]{2,3}$/i;
        this.email = document.getElementById('email');
        this.email.onchange = this.testEmail.bind(this);
    }

    testEmail() {
        if (!this.regExp.test(this.email.value)) {
            this.email.style.border = '2px solid red';
        } else {
            this.email.style.border = '2px solid green';
        }
    }
}

class Phone {
    constructor() {
        this.regExp = /^\+\d\d(\(\d{3}\)|\d{3})\d{3}(\-|\s)?\d{2}(\-|\s)?\d{2}$/;
        this.phone = document.getElementById('phone');
        this.phone.onchange = this.testPhone.bind(this);
    }
    testPhone() {
        if (!this.regExp.test(this.phone.value)) {
            this.phone.style.border = '2px solid red';
        } else {
            this.phone.style.border = '2px solid green';
        }
    }
}
class TextArea {
    constructor () {
        this.regExp = /\w[\w!#$%&'*+\-/=?^_`{|}~]+\.?[\w!#$%&'*+\-/=?^_`{|}~]+@\w{1,12}\.[A-z]{2,3}/igm;
        this.content = document.getElementById('content');
        this.search = document.getElementById('search');
        
        this.search.onclick = this.findEmails.bind(this);
    }
    findEmails() {
        if(this.list) {
            this.list.remove();
        }
        this.emailList = this.content.value.match(this.regExp);
        if(this.emailList) {
            this.list = document.createElement('ol');
            this.emailList.forEach(el => {
                let li = document.createElement('li');
                li.id = el;
                li.textContent = el;
                this.list.appendChild(li);
            });
            document.body.appendChild(this.list);
        }
    }
}
const email = new Email();
const phone = new Phone();
const textArea = new TextArea();
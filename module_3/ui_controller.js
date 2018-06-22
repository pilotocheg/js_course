import MaskInput from './node_modules/mask-input';

export default class UIController {
    constructor () {
        this.createInput();
        this.createNameInp();
        this.createGetBtn();
    }
    
    createInput() {
        this.numInp = document.createElement('input');
        this.numInp.setAttribute('type', 'text');
        this.numInp.setAttribute('id', 'inp');  
        document.body.appendChild(this.numInp);
    
        this.maskInput = new MaskInput(this.numInp, {
            mask: '0000-0000-0000-0000',
            alwaysShowMask: true,
            onChange: this.inpValidation.bind(this),
            maskChar: '_',
          });
    }

    inpValidation() {
        this.inpReg = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;
        if (!this.inpReg.test(this.numInp.value)) {
            this.numInp.style.border = '2px solid red';
            this.inpVal = false;
        } else {
            this.numInp.style.border = '2px solid green';
            this.inpVal = true;
        }
    }

    createNameInp() {
        this.nameInp = document.createElement('input');
        this.nameInp.setAttribute('type', 'text');
        this.nameInp.setAttribute('placeholder', 'name');
        this.nameInp.setAttribute('id', 'inp2');
        this.nameInp.onchange = this.nameValidation.bind(this);
        document.body.appendChild(this.nameInp);
    }

    nameValidation() {
        this.nameReg = /[A-z, А-Я]{2,}/;
        if (!this.nameReg.test(this.nameInp.value)) {
            this.nameInp.style.border = '2px solid red';
            this.nameVal = false;
        } else {
            this.nameInp.style.border = '2px solid green';
            this.nameVal = true;
        }

    }

    createGetBtn() {
        this.getBtn = document.createElement('button');
        this.getBtn.setAttribute('id', 'getBtn');
        this.getBtn.setAttribute('disabled', 'true');
        this.getBtn.style.border = '2px solid red';
        this.getBtn.textContent = 'Get Info';
        document.body.appendChild(this.getBtn);
        // this.getBtn.onclick = this.getInfo.bind(this);
        window.addEventListener('change', this.checkInfo.bind(this));
    }

    checkInfo() {
        if(this.nameVal && this.inpVal) {
            this.getBtn.style.border = '2px solid green';
            this.getBtn.removeAttribute('disabled');
        } else {
            this.getBtn.style.border = '2px solid red';
            this.getBtn.setAttribute('disabled', 'true');
        }
    }
    getInfo() {
        let reg = /\-/g;
        if (this.numInp.value !== this.cardNum) {
            this.cardNum = this.numInp.value.replace(reg, '');
            return fetch(`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${this.cardNum}`)
                .then(response => {
                    if(response.status === 200) {
                        // console.log(response.json());
                        return response.json();
                    } else {
                        throw new Error(response.status);
                    }
                })
        }
    }
}
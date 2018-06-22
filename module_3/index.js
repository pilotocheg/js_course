import UIController from './ui_controller';
import CardData from './card_data';

const uiController = new UIController();
const cardData = new CardData();

const getBtn = document.getElementById('getBtn');

getBtn.addEventListener('click', () => {
    getBtn.setAttribute('disabled', 'true');
    cardData.showPreloader();
    uiController.getInfo()
        .then(res => {
            cardData.setData(res);
            cardData.hidePreloader();
            getBtn.removeAttribute('disabled');
        })
        .catch(rej => {
            cardData.hidePreloader();
            getBtn.removeAttribute('disabled');
            alert(rej);
        })
})
import LocationApi from './location_api';
import Dom from './dom';

const locationApi = new LocationApi();
const dom = new Dom();
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    dom.showPreloader();
    setTimeout(() => {
        locationApi.getMyIp()
                .then(res => locationApi.getMyLocation(res.ip))
                .then(res => dom.setCoordinates(res))
                .then(res => dom.hidePreloader())
                .catch(rej => {
                    dom.hidePreloader();
                    console.log('Error:', rej);
                });
    }, 2000);
})

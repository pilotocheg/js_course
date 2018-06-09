import LocationApi from './location_api';
import Dom from './dom';

const locationApi = new LocationApi();
const dom = new Dom();
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    locationApi.getMyIp()
    .then(res => locationApi.getMyLocation(res.ip))
    .then(res => dom.setCoordinates(res));
})

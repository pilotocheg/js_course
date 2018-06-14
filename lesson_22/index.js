import LocationApi from './location_api';
import Dom from './dom';
import Weather from './weather_api';

const locationApi = new LocationApi();
const dom = new Dom();
const weather = new Weather();
const btn = document.getElementById('btn');
const weatherBtn = document.getElementById('weatherBtn');

btn.addEventListener('click', () => {
    dom.showPreloader();
    setTimeout(() => {
        locationApi.getMyIp()
                .then(res => locationApi.getMyLocation(res.ip))
                .then(res => {
                    dom.setCoordinates(res);
                    return weather.getWeather(res.city);
                })
                .then(res => {
                    weather.setWeather(res);
                    dom.hidePreloader();
                })
                .catch(rej => {
                    dom.hidePreloader();
                    console.log('Error:', rej);
                });
    }, 1000);
})

weatherBtn.addEventListener('click', () => {
    const city = document.getElementById('city');

    if (city.value) {
        dom.showPreloader();
        setTimeout(() => {
            weather.getWeather(city.value)
                .then(res => {
                    weather.setWeather(res);
                    dom.hidePreloader();
                })
                .catch(rej => {
                    dom.hidePreloader();
                    setTimeout(() => {
                        alert('Wrong or unsupported city name. Error: ' + rej);
                    }, 100);
                    console.log('Error:', rej);
                });
        }, 1000);
    }
    
})

export default class Weather {
    constructor () {
        this.api = '6f3a95751554047fd3ce85616fdcf29a';
        this.temp = document.getElementById('temp');
        this.place = document.getElementById('place');
        this.description = document.getElementById('description');
        this.icon = document.getElementById('icon');
    }
    
    // Данные по городу сохраняются в кэш, на 10 минут, чтобы не превышать лимит запросов
    getWeather(city) {
        const cache = JSON.parse(localStorage.getItem('cache')) || {};
        if (cache[city]) {
            if (Date.now() - cache[city].timestamp < 1000 * 60 * 10) {
                return Promise.resolve(cache[city].data);
            } else {
                cache[city] = null;
                localStorage.setItem('cache', JSON.stringify(cache));
            }
        }
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api}`)
            .then(res => {
                if(res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject(res.status);
                }
            })
            .then(data => {
                cache[city] = {
                    timestamp: Date.now(),
                    data
                };
                localStorage.setItem('cache', JSON.stringify(cache));
                console.log(cache);

                return data;
            })
    }

    setWeather(data) {
        this.temp.innerHTML = Math.round(data.main.temp - 273.15) + ' &#8451;';
        this.place.innerHTML = data.name + ' / ' + data.sys.country;
        this.description.innerHTML = `"${data.weather[0].description}"`;
        this.icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    }
}
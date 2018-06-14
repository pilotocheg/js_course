export default class Weather {
    constructor () {
        this.api = '6f3a95751554047fd3ce85616fdcf29a';
        this.temp = document.getElementById('temp');
        this.place = document.getElementById('place');
        this.description = document.getElementById('description');
        this.icon = document.getElementById('icon');
    }
    
    getWeather(myCity) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${this.api}`)
            .then(res => {
                if(res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject(res.status);
                }
            })
    }

    setWeather(data) {
        this.temp.innerHTML = Math.round(data.main.temp - 273.15) + ' &#8451;';
        this.place.innerHTML = data.name + ' / ' + data.sys.country;
        this.description.innerHTML = `"${data.weather[0].description}"`;
        this.icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    }
}
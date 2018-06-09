export default class LocationApi {
    getMyIp() {
        return fetch('https://api.ipify.org?format=json')
            .then(res => {
                if(res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject(res.status);
                }
            })
            .catch(rej => console.log('Получение IP не удалось. Error: ' + rej));
    };
    
    getMyLocation(myIp) {
        return fetch(`https://freegeoip.net/json/${myIp}`)
            .then (res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            // .then(res => console.log(res.latitude, res.longitude))
            .catch(rej => console.log('Получение координат по IP не удалось. Error: ' + rej));
    }
};
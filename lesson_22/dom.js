export default class Dom {
    constructor() {
        this.lat = document.getElementById('lat');
        this.long = document.getElementById('long');
        this.city = document.getElementById('city');
        this.country = document.getElementById('country');
        this.ip = document.getElementById('ip');

        this.hover = document.getElementById('hover');
        this.animation = document.getElementById('animation');
        this.circle1 = document.getElementById('circle1');
        this.circle2 = document.getElementById('circle2');
        this.circle3 = document.getElementById('circle3');
    }

    showPreloader() {
        this.hover.style.display = 'block';
        this.animation.style.display = 'block';
        this.i = 2;
        this.interval = setInterval(() => {
            switch (this.i) {
                case 1:
                    this.circle1.style.background = 'darkmagenta';
                    this.circle3.style.background = 'orange';
                    break;
                case 2:
                    this.circle1.style.background = 'orange';
                    this.circle2.style.background = 'darkmagenta';
                    break;
                case 3:
                    this.circle2.style.background = 'orange';
                    this.circle3.style.background = 'darkmagenta';
                    this.i = 0;
                    break;
            }
            this.i += 1;
        }, 300);
    };

    hidePreloader() {
        this.hover.style.display = 'none';
        this.animation.style.display = 'none';
        clearInterval(this.interval);
        this.i = 2;
        this.circle1.style.background = 'darkmagenta';
        this.circle2.style.background = 'orange';
        this.circle3.style.background = 'orange';

    };

    setCoordinates(crd) {
        this.lat.value = crd.latitude;
        this.long.value = crd.longitude;
        this.city.value = crd.city;
        this.country.value = crd.country_name;
        this.ip.innerHTML = `ip: ${crd.ip}`;
    };
}
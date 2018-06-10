export default class Dom {
    constructor() {
        const lat = document.getElementById('lat');
        const long = document.getElementById('long');
        const city = document.getElementById('city');
        const country = document.getElementById('country');

        const hover = document.getElementById('hover');
        const animation = document.getElementById('animation');
        const circle1 = document.getElementById('circle1');
        const circle2 = document.getElementById('circle2');
        const circle3 = document.getElementById('circle3');
    }

    showPreloader() {
        hover.style.display = 'block';
        animation.style.display = 'block';
        this.i = 2;
        this.interval = setInterval(() => {
            switch (this.i) {
                case 1:
                    circle1.style.background = 'darkmagenta';
                    circle3.style.background = 'orange';
                    break;
                case 2:
                    circle1.style.background = 'orange';
                    circle2.style.background = 'darkmagenta';
                    break;
                case 3:
                    circle2.style.background = 'orange';
                    circle3.style.background = 'darkmagenta';
                    this.i = 0;
                    break;
            }
            this.i += 1;
        }, 300);
    };

    hidePreloader() {
        hover.style.display = 'none';
        animation.style.display = 'none';
        clearInterval(this.interval);
        this.i = 2;
        circle1.style.background = 'darkmagenta';
        circle2.style.background = 'orange';
        circle3.style.background = 'orange';

    };

    setCoordinates(crd) {
        lat.value = crd.latitude;
        long.value = crd.longitude;
        city.value = crd.city;
        country.value = crd.country_name;
    };
}
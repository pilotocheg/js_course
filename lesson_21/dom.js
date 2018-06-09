export default class Dom {
    constructor() {
        const lat = document.getElementById('lat');
        const long = document.getElementById('long');
        const city = document.getElementById('city');
        const country = document.getElementById('country');

        const hover = document.getElementById('hover');
        const circle1 = document.getElementById('circle1');
    }

    setCoordinates(crd) {
        lat.value = crd.latitude;
        long.value = crd.longitude;
        city.value = crd.city;
        country.value = crd.country_name;
    }
}
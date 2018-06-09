export default class Dom {
    constructor() {
        const lat = document.getElementById('lat');
        const long = document.getElementById('long');
        const btn = document.getElementById('btn');
    }

    setCoordinates(crd) {
        lat.value = crd.latitude;
        long.value = crd.longitude;
    }
}
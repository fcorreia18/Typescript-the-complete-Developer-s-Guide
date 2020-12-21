export class CustomMap {
    private googleMaps: google.maps.Map;

    constructor(divId: string) {
        this.googleMaps = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })

    }
}
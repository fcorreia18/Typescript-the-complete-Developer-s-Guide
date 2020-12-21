
//instructions to every other class 
//on how they can be an argument to 'addMarker'
export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string;
    color?: string;
}

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
    public addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMaps, position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        });
        marker.addListener('click', () => {
            const infowindow = new google.maps.InfoWindow({ content: mappable.markerContent(), position: mappable.location });
            infowindow.open(this.googleMaps, marker);
        })
    }


}
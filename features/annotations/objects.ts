const profile = {
    fullName: 'Francisco Correia',
    age: 20,
    coords: {
        lat: 2,
        lng: 5
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age, fullName }: { age: number, fullName: string } = profile;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;
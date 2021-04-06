class Boat {
    color: string = 'red';

    get formattedColor(): string {
        return ` This boat color is ${this.color}`;
    }

    public pilot(): void {
        console.log('swish');
    }
}

function testDecorator(target: any, key: string): void {
    console.log("target:", target);
    console.log("key:", key);
}

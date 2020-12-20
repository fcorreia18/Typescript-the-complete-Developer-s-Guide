const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

//Type alias
type DRINK = [string, boolean, number];

const pepsi: DRINK = ['brown', true, 40];
const sprite: DRINK = ['clear', true, 40];
const tea: DRINK = ['brown', false, 0];

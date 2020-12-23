import { Sort } from "./Sort";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
// const numbersCollection = new NumbersCollection([0, -2, 293, -17, 4]);
// const sort = new Sort(numbersCollection);
// sort.sort();
// console.log(numbersCollection.data);//Para mostrar o array organizado de forma ascendente

const charactersCollection = new CharactersCollection('aflkj');
const sort = new Sort(charactersCollection);
sort.sort();
console.log(charactersCollection.data);

import { Sort } from "./Sort";
import { NumbersCollection } from "./NumbersCollection";
const numbersCollection = new NumbersCollection([0, -2, 293, -17, 4]);
const sort = new Sort(numbersCollection);
sort.sort();
console.log(numbersCollection.data);//Para mostrar o array organizado de forma ascendente

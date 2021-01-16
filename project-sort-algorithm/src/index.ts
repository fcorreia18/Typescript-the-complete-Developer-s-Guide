import { Sort } from "./Sort";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
// import { LinkedList } from "./LinkedList";
const numbersCollection = new NumbersCollection([121, 3456, -83, 3, 83]);
numbersCollection.sort();
console.log(numbersCollection.data);//Para mostrar o array organizado de forma ascendente

const charactersCollection = new CharactersCollection('aflkj');
charactersCollection.sort();
console.log(charactersCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(1234);
// linkedList.add(-43);
// linkedList.add(24);
// linkedList.add(4);
// linkedList.sort();
// linkedList.print();
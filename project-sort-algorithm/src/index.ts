import { Sort } from "./Sort";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
// const numbersCollection = new NumbersCollection([0, -2, 293, -17, 4]);
// const sort = new Sort(numbersCollection);
// sort.sort();
// console.log(numbersCollection.data);//Para mostrar o array organizado de forma ascendente

// const charactersCollection = new CharactersCollection('aflkj');
// const sort = new Sort(charactersCollection);
// sort.sort();
// console.log(charactersCollection.data);  
const linkedList = new LinkedList();
linkedList.add(1234);
linkedList.add(-43);
linkedList.add(24);
linkedList.add(4);
const sort = new Sort(linkedList);
sort.sort();
linkedList.print();
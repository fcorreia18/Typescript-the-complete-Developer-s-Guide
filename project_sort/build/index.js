"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sort_1 = require("./Sort");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([0, -2, 293, -17, 4]);
// const sort = new Sort(numbersCollection);
// sort.sort();
// console.log(numbersCollection.data);//Para mostrar o array organizado de forma ascendente
var charactersCollection = new CharactersCollection_1.CharactersCollection('aflkj');
var sort = new Sort_1.Sort(charactersCollection);
sort.sort();
console.log(charactersCollection.data);

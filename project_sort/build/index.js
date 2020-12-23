"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sort_1 = require("./Sort");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([0, -2, 293, -17, 4]);
var sort = new Sort_1.Sort(numbersCollection);
sort.sort();
console.log(numbersCollection.data); //Para mostrar o array organizado de forma ascendente

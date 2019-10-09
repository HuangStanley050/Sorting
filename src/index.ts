import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const array = new NumbersCollection([0, -4, 9, -2]);
const sort = new Sorter(array);
sort.sort();
console.log(sort.collection);

import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";

const array = new NumbersCollection([0, -4, 9, -2]);
const string = new CharactersCollection("Xaacbd");
const sort_string = new Sorter(string);
const sort_number = new Sorter(array);

sort_string.sort();
sort_number.sort();
console.log(sort_string.collection);

import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { LinkList } from "./LinkList";

const array = new NumbersCollection([0, -4, 9, -2]);
const string = new CharactersCollection("hello");
const linkList = new LinkList();
linkList.add(500);
linkList.add(100);
linkList.add(-2);
linkList.sort();
string.sort();
array.sort();
console.log(array.data);
console.log(string.data);
linkList.print();

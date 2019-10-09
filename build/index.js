"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var array = new NumbersCollection_1.NumbersCollection([0, -4, 9, -2]);
var sort = new Sorter_1.Sorter(array);
sort.sort();
console.log(sort.collection);

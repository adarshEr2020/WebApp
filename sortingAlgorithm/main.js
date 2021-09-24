//import {name} from './utility.js';
import {selectionSort,bubbleSort,mergeSort,binarySearch} from './utility.js';
let arr = [1,15,8,12,27,4];
console.log(selectionSort(arr));
console.log(bubbleSort(arr));
console.log(mergeSort(arr));
console.log("value is present index position: "+binarySearch(arr,4));
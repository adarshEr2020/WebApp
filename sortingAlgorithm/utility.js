// sorting algorithm
// selection sort algorithm
export function selectionSort(arr) {
    let lengthArr = arr.length;

    for (let i = 0; i < lengthArr; i++) {
        // finding the smallest value
        let min = i;
        for (let j = i + 1; j < lengthArr; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min != i) {
            // swapping of element
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

// bubble sort algorithm
export function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            //check arr[0] to next index and swap 
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// merge sorting algorithm
export function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
      }
      // divide array in two half  
      const mid = Math.floor(arr.length / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
      return merge(
         mergeSort(left),
         mergeSort(right)
      );
    }

    function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
   
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
         result.push(left[leftIndex]);
         leftIndex++;
      } else {
         result.push(right[rightIndex]);
         rightIndex++;
      }
    }
   
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
   }

   // binary search algorithm
export function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === value) {
            // found the value
            return mid;
        } else if (arr[mid] < value) {
            // continue searching to the right
            start = mid + 1;
        } else {
            // search searching to the left
            end = mid - 1
        }
    }
    // not found
    return -1;
}

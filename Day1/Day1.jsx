function sortArray(array) {
    let low = 0, mid = 0, high = array.length - 1;

    while (mid <= high) {
        if (array[mid] === 0) {
            [array[low], array[mid]] = [array[mid], array[low]];
            low++;
            mid++;
        } else if (array[mid] === 1) {
            mid++;
        } else {
            [array[high], array[mid]] = [array[mid], array[high]];
            high--;
        }
    }
}

let array = [0, 1, 2, 1, 0, 2, 1, 0];
sortArray(array);
console.log(array); 

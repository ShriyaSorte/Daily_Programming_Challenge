// You are given an unsorted array of integers and a positive integer K. Your task is to find the Kth largest element in the array. The Kth largest element is the element that would appear in the Kth position if the array were sorted in descending order.

// You need to implement a function that returns this Kth largest element without explicitly sorting the entire array.

// Example
// arr = [3, 2, 1, 5, 6, 4]
// k = 2
// Output: 5

function Kth_greatest_in_array(arr, k) {
  for (var i = 0; i < k; i++) {
    var max_index = i,
      tmp = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }

    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  return arr[k - 1];
}

// Example usage
console.log(Kth_greatest_in_array([3, 2, 1, 5, 6, 4], 2)); // 4

// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].
function everyOther(array) {
  var index = 0;
  var outputArray = [];
  while (index < array.length) {
    if (index % 2 === 0) {
      outputArray.push(array[index]);
    }
    index++;
  }
  return outputArray;
}
console.log(everyOther(["a", "b", "c", "d", "e", "f"]));


// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.
function greatestNumber(array) {
  var greatest = array[0];
  array.forEach(function (number) {
    if (number > greatest) {
      greatest = number;
    }
  });
  return greatest;
}
console.log(greatestNumber([4, 100, 1, 3, 2, 7]));


// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));


// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.
function reverseArray(array) {
  var index = array.length - 1;
  var outputArray = [];
  array.forEach(function (value) {
    outputArray.unshift(value);
  });
  return outputArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]));


// # Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
function combinationSum(array1, array2) {
  var outputArray = [];
  array1.forEach(function (value1) {
    array2.forEach(function (value2) {
      outputArray.push(value1 + value2);
    });
  });
  return outputArray;
}
console.log(combinationSum([1, 5, 10], [100, 500, 1000]));

// Bubble sort algorithm
function bubbleSort(array) {
  var n = array.length;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    var swapped = false;
    for (var i = 0; (i < array.length - 1); i++) {
      if (array[i] > array[i + 1]) {
        var x = array[i];
        array[i] = array[i + 1];
        array[i + 1] = x;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
}
console.log(bubbleSort([10000, 5, 2, 1, 6, 2, 1, 200, 5000, 12, 15, 20]));
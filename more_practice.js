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
    for (var i = 0; i < array.length - 1; i++) {
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


// Write a function that takes in an array of numbers and returns its sum.
function sumArray(array) {
  return array.reduce((sum, currentValue) => sum += currentValue);
}
console.log(sumArray([4, 6, 5]));


// Write a function that takes in an array of strings and returns the smallest string.
function smallestString(strings) {
  var smallest = strings[0];
  strings.forEach(function (string) {
    if (string.length < smallest.length) {
      smallest = string;
    }
  });
  return smallest;
}
console.log(smallestString(["aa", "bbb", "c", "hellothere"]));


// Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order. Already done, see above (reverseArray function)


// Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
function startsWithA(strings) {
  var count = 0;
  strings.forEach(function (string) {
    if (string[0] === "a") {
      count++;
    }
  });
  return count;
}
console.log(startsWithA(["aaaa", "abcd", "cdaae", "queyiwop", "a"]));


// Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
function addWithCommas(strings) {
  var output = "";
  strings.forEach(function (string) {
    output += string + ",";
  });
  return output;
}
console.log(addWithCommas(["bill", "bob", "sue", "joe", "sally"]));


// Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 
function productOfNumbers(numbers) {
  return numbers.reduce((product, number) => product *= number);
}
console.log(productOfNumbers([4, 3, 2]));


// Write a function that takes in an array of numbers and returns the two smallest numbers.
function twoSmallest(numbers) {
  var smallest = [];
  for (var i = 0; i < 2; i++) {
    smallest.push(numbers[1]);
    var index = 0;
    var deleteAt = index;
    numbers.forEach(function (number) {
      if (number < smallest[i]) {
        smallest[i] = number;
        deleteAt = index;
      }
      index++;
    });
    numbers.splice(deleteAt, 1);
  }
  return smallest;
}
console.log(twoSmallest([1, 5, 2, 3, 1, 7]));


// Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
function numberOfZeros(numbers) {
  return numbers.filter(number => number === 0).length;
}
console.log(numberOfZeros([0, 1, 4, 0, 3, 0]));



// Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
function allMoreThanTen(numbers) {
  var allTrue = true;
  numbers.forEach(function (number) {
    if (number <= 10) {
      allTrue = false;
    }
  });
  return allTrue;
}
console.log(allMoreThanTen([11, 52, 98]));
console.log(allMoreThanTen([1, 43, 2]));



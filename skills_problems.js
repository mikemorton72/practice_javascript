// # 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.
var person = {
  firstName: "Mike",
  lastName: "Morton",
  email: "mike@morton.com"
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);

// # 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.
var people = [{ firstName: "Bill", lastName: "Billson" }, { firstName: "Bob", lastName: "Bobson" }];
console.log(people[0]);

// # 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.
var menuItems = { fries: 5, burger: 8, drink: 2 };
menuItems.shake = 3;
console.log(menuItems);

// # 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.
var book = { title: "Hitchikers Guide", author: "Douglas Adams", pages: 300, language: "english" };
for (var k in book) {
  console.log(book[k]);
}

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].
function numbersTimesThree(array) {
  var outputArray = [];
  array.forEach(function (value) {
    outputArray.push(value * 3);
  })
  return outputArray;
}
console.log(numbersTimesThree([1, 2, 3]));

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].
function upcase(array) {
  return array.map(element => element.toUpperCase());
}
console.log(upcase(["mike", "morton"]));

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].





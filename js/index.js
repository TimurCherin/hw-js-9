// Завдання 1. Для масиву:
// 1) [1, 2, 3] додайте в кінець елементи 4, 5, 6;

const arrayEnd = [1, 2, 3];
arrayEnd.push(4, 5, 6);
console.log(arrayEnd);

// 2) [1, 2, 3] додайте на початок елементи 4, 5, 6;

const arrayStart = [1, 2, 3];
arrayStart.unshift(4, 5, 6);
console.log(arrayStart);

// 3) ['js', 'css', 'jq'] на екрані виведіть перший елемент;

const firstElement = ["js", "css", "jq"];
console.log(firstElement[0]);

// 4) ['js', 'css', 'jq'] виведіть останній елемент на екран;

const lastElement = ["js", "css", "jq"];
console.log(lastElement[2]);

// 5) [1, 2, 3, 4, 5] за допомогою методу slice запишіть нові елементи [1, 2, 3];

const sliceArray = [1, 2, 3, 4, 5];
console.log(sliceArray.slice(0, 3));

// 6) [1, 2, 3, 4, 5] за допомогою методу slice запишіть нові елементи [4, 5].

const secondSliceArray = [1, 2, 3, 4, 5];
console.log(secondSliceArray.slice(3, 5));

//   Завдання 2. Створіть масив фруктів, для якого:

const fruitArray = ["apple", "banana", "kiwi", "avocado", "pear"];

// 1) за допомогою методів масиву видаліть по фрукту з початку та кінця,  на їх місце додати нові фрукти;

fruitArray.splice(0, 1, "peach");
fruitArray.splice(4, 1, "mango");
console.log(fruitArray);

// 2) видалити 3-й елемент, та на його місце вставити декілька інших фруктів використовуючи метод (splice);

fruitArray.splice(2, 1, "plum", "melon", "lime");
console.log(fruitArray);

// 3) із зміненого масиву створіть повідомлення.

const newString = fruitArray.join(", ");
console.log(`I like ${newString}!`);

//Here, both variables arr1 and arr2 are referring to the same array. 
//Hence the change in one variable results in the change in both variables.
let arr1 = [ 1, 2, 3];
let arr2 = arr1;
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]
// append an item to the array
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

// if you want to copy arrays so that they do not refer to the same array, you can use the spread operator
let arr3 = [ 1, 2, 3];
// copy using spread syntax
let arr4 = [...arr3];
console.log(arr3); // [1, 2, 3]
console.log(arr4); // [1, 2, 3]
// append an item to the array
arr3.push(4);
console.log(arr3); // [1, 2, 3, 4]
console.log(arr4); // [1, 2, 3]
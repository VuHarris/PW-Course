// Unary opertors are operators that operate on a single operand. They can be used to perform various operations such as negation, increment, and decrement.

// Negation operator (-) is used to negate a number.
let x = 5;
console.log(-x); // Output: -5

// Unary plus operator (+) is used to convert a value to a number.
let y = "10";
console.log(+y); // Output: 10

//Increment operator (++) is used to increase the value of a variable by 1.
let z = 3;
z++;
console.log(z); // Output: 4    

// Decrement operator (--) is used to decrease the value of a variable by 1.
let w = 7;
w--;
console.log(w); // Output: 6

// Logical NOT operator (!) is used to negate a boolean value.
let isTrue = true;
console.log(!isTrue); // Output: false  

// Typeof operator is used to determine the type of a variable or expression.
console.log(typeof x); // Output: "number"
console.log(typeof y); // Output: "string"
console.log(typeof isTrue); // Output: "boolean"

// Delete operator is used to delete a property from an object.
const myObject = {
    name: "John",
    age: 30
};  
delete myObject.age;
console.log(myObject); // Output: { name: "John" }  

// Void operator is used to evaluate an expression and return undefined.
function myFunction() {
    console.log("Hello, World!");
}   
void myFunction(); // Output: "Hello, World!" and returns undefined

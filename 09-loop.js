for (let i = 0; i < 2; i++) {
    console.log(i);
}

// for in loop
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}   

// for of loop
let numbers = [1, 2, 3, 4, 5];  
for (let number of numbers) {
    console.log(number);
}   

// forEach loop
numbers.forEach(function(number) {
    console.log(number);
}); 

// while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}   
// do while loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// Nested loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("i: " + i + ", j: " + j);
    }   
}

// Loop control statements
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip the rest of the loop when i is 2
    }   
    if (i === 4) {
        break; // Exit the loop when i is 4   
    }
    console.log(i);
}
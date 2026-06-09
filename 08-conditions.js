let hour = 21;
if (hour >= 6 && hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

// Nested if statements
let day = "Monday";
if (day === "Monday") {
    if (hour >= 6 && hour < 12) {
        console.log("Good morning, it's Monday!");
    } else if (hour >= 12 && hour < 18) {
        console.log("Good afternoon, it's Monday!");
    } else {
        console.log("Good evening, it's Monday!");
    }   
} else {
    console.log("It's not Monday.");
}
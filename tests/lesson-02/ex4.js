/* An ideal weight should be: Last digit of height in cm x 9 / 10
Maximum weight should be: Last digit of height in cm
Minimum weight should be: Last digit of height in cm x 8 / 10
Note: Applicable range: This formula only applies to people with a height greater than 100 cm */

const height = 168;
console.log(`If your height is ${height} cm`);
console.log(`Your ideal weight is ${height % 100 * 9 / 10} kg`);
console.log(`Your maximum weight should be ${height % 100} kg`);
console.log(`Your minimum weight should be ${height % 100 * 8 / 10} kg`);
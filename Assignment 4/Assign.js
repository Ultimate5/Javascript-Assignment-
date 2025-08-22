// Assignment 4️⃣

// Q1. 🧾 Datatypes
let name = "Abubakr";     // string
let age = 23;             // number
let isStudent = true;     // boolean

console.log("Q1: Datatypes");
console.log(typeof name);     
console.log(typeof age);      
console.log(typeof isStudent);
console.log("----------------------");

// Q2. 🔄 Loops (Even numbers 1-50)
console.log("Q2: Even Numbers from 1 to 50");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("----------------------");

// Q3. 🧮 Loops (Multiplication table of 5 using while loop)
console.log("Q3: Multiplication Table of 5");
let num = 1;
while (num <= 10) {
    console.log(`5 x ${num} = ${5 * num}`);
    num++;
}
console.log("----------------------");

// Q4. ⚖️ If-Else (Check number positive, negative, zero)
console.log("Q4: Check Positive, Negative, Zero");
let checkNumber = -7; // change this to test
if (checkNumber > 0) {
    console.log("Positive");
} else if (checkNumber < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
console.log("----------------------");

// Q5. 🎓 If-Else Ladder (Marks grading)
console.log("Q5: Grading System");
let marks = 82; // change to test
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
console.log("----------------------");

// Q6. ➕ Functions (Add Numbers)
console.log("Q6: Function addNumbers");
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, 7));
console.log(addNumbers(10, 25));
console.log(addNumbers(-5, 12));
console.log("----------------------");

// Q7. 📏 Functions (Find Max of 3 numbers)
console.log("Q7: Function findMax");
function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(findMax(3, 9, 7));
console.log(findMax(15, 12, 20));
console.log(findMax(-1, -5, -3));
console.log("----------------------");

// Q8. 🔢 Loops + If (FizzBuzz 1-100)
console.log("Q8: FizzBuzz from 1 to 100");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("----------------------");

// Q9. 🔍 Functions + Loops (Check Prime)
console.log("Q9: Function checkPrime");
function checkPrime(n) {
    if (n <= 1) return "Not Prime";
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return "Not Prime";
    }
    return "Prime";
}
console.log("7:", checkPrime(7));
console.log("10:", checkPrime(10));
console.log("23:", checkPrime(23));
console.log("----------------------");

// Q10. 🧮 Array + Loop (Sum of array)
console.log("Q10: Sum of Array");
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Array:", numbers);
console.log("Sum:", sum);
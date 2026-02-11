// My first greetings in TypeScript
const greetings: string = "Hello, World!";
console.log(greetings);

//Learning Basic Types
let isActive: boolean = true;
let hasPermission: boolean = false;
console.log(`Is Active: ${isActive}, Has Permission: ${hasPermission}`);

let count: number = 42;
let price: number = 19.99;
console.log(`Count: ${count}, Price: $${price}`);

let fullName: string = "Joshua Clores";
let email: string = "josh.clores08@gmail.com";
console.log(`Name: ${fullName}, Email: ${email}`);

//Learning Explicit Types
let age: number = 25;
let address: string = "Caloocan City, Philippines";
let isStudent: boolean = true;
console.log(`Age: ${age}, Address: ${address}, Is Student: ${isStudent}`);

//Learning Type Inference
let username = "clo";
let score = 100;
let isLoggedIn = false;
console.log(`Username: ${username}, Score: ${score}, Is Logged In: ${isLoggedIn}`);

//Learning Special Types
let notDefined: undefined = undefined;
let emptyValue: null = null;
console.log(`Not Defined: ${notDefined}, Empty Value: ${emptyValue}`);

let unknownValue: any = "This can be any type";
console.log(`Unknown Value: ${unknownValue}`);
unknownValue = 12345;
console.log(`Unknown Value after reassignment: ${unknownValue}`);

let flexibleValue: unknown = "Initially a string";
console.log(`Flexible Value: ${flexibleValue}`);
flexibleValue = 3.14;
console.log(`Flexible Value after reassignment: ${flexibleValue}`);

function sayHello(): number {
    console.log("Hello from a void function!");
    return 0;
}
sayHello();

// function throwError(message: string): never {
//     throw new Error(message);
// }

// throwError("This is a never type error!");

//Learning Arrays and Tuples
let numbers: readonly number[] = [1, 2, 3, 4, 5];
let tuple: [string, number, string] = ["Hello", 42, "World"];
console.log(`Numbers: ${numbers.join(", ")}`);
console.log(`Tuple: ${tuple[0]}, ${tuple[1]}, ${tuple[2]}`);
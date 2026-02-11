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
console.log(
  `Username: ${username}, Score: ${score}, Is Logged In: ${isLoggedIn}`,
);

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

//Learning Object Types
let person: { name: string; age: number; isEmployed: boolean } = {
  name: "Alice",
  age: 30,
  isEmployed: true,
};

console.log(
  `Person: Name - ${person.name}, Age - ${person.age}, Employed - ${person.isEmployed}`,
);

//Learning Index Signatures
let dictionary: { [key: string]: string } = {
  hello: "A greeting",
  world: "The earth",
};

console.log(`Dictionary: ${JSON.stringify(dictionary)}`);

//Learning Type Aliases
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};
let myCar: Car = {
  year: 2020,
  type: "Sedan",
  model: "Toyota Camry",
};
console.log(`My Car: ${myCar.year} ${myCar.type} ${myCar.model}`);

//Learning Union Types
type studentId = number | string;
let id1: studentId = 12345;
let id2: studentId = "S12345";
console.log(`Student ID 1: ${id1}, Student ID 2: ${id2}`);

type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";
console.log(`User Status: ${userStatus}`);


let cash : number = 500;
let firstName: string = "Muskan";
let isStudent: boolean = true;
let value: null = null;
let nothing: undefined = undefined;

//built-in objects
let now: Date = new Date();

//Array
let fruits: string[] = ["apple", "banana", "cherry"];
let numbers: number[] = [1, 2, 3, 4, 5];
let mixed: (string | number)[] = ["apple", 1, "banana", 2, "cherry", 3];

//classes
class Car {

}

let car: Car = new Car();

//Object literal
let person: {name: string, age: number} = {
    name: "Muskan",
    age: 20
}

//function 
let log: (i: number) => void = (i: number) => {
    console.log(i)
}

//when to use annotations
//1. when a function returns the 'any' type
let json = '{"x": 10, "y": 20}';
let coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

//2. when we declare a variable on one line and initialize it later
let color = ["red", "blue", "green"];
let foundColor: boolean;
for (let i = 0; i < color.length; i++) {
    if (color[i] === "red") {
        foundColor = true;
    }
}

//3. variable whose type cannot be inferred correctly
let number = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
        numberAboveZero = number[i];
    }
}
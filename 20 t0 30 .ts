

// QUESTION NUMBER # 21,

//Class Inheritance: Create a base class Shape with properties name and color. Then, create a subclass Circle that extends Shape with an additional property radius. Implement methods to calculate the area and perimeter of the circle.

//       .......SOLUTION.......,

class shap {
    name:string = ""
    color:string = ""
 constructor(name:string,color:string){
        this.name = name;
        this.color = color;

    }
}

class circle1 extends shap {
    radius:number = 5;
 constructor(radiud:number,name:string,color:string){
      super(name,color);
      this.radius;
    }
     
    calculateArea():number{
        return  Math.PI * this.radius * this.radius;
    }

    calculatePerimeters():number{
        return 2 * Math.PI * this.radius
    }
    
}
const properties = new circle1(5,"square","red");
console.log("area",properties.calculateArea());
console.log("color",properties.color);
console.log("name",properties.name);
console.log("radius",properties.radius);
console.log("perimeters",properties.calculatePerimeters());

// QUESTION NUMBER 22;
//Create a TypeScript function that takes in an array of numbers and returns the sum of all the numbers.

//      .......SOLUTION......;

function sumofalll(numbers:number[]):number {
    let sum:number = 0;
    for (const number1 of numbers) {
        sum += number1;
    }
    return sum;
    
}
const sum1 = sumofalll([1,2,3,4,5])
console.log(sum1);

let sunofall = ((numbers:number[])=>{
for (let sum = 0; sum < numbers.length; sum++) {
    const element = numbers[sum];
    
}

    
    sunofall([1,2,3,4,5])

})
console.log(sunofall)

// QUESTION # 23;
//Write a TypeScript class representing a simple calculator with methods for addition, subtraction, multiplication, and division.;
  
//     ......SOLUTION.....;
 class calculator {
    num1:number = 0;
    num2:number = 0;

    constructor(num1:number,num2:number){
        this.num1 = num1
        this.num2 = num2

    }
    addition():number{
     return this.num1 + this.num2;
    }

    subtraction():number{
        return this.num1 - this.num2;
       }

       multiplication():number{
        return this.num1 * this.num2;
       }

       division():number{
        return this.num1 / this.num2;
       }
 }

 const simplecalculator = new calculator(9,7);
 console.log(simplecalculator.multiplication())
 console.log(simplecalculator.addition())
 console.log(simplecalculator.division())
 console.log(simplecalculator.subtraction())


//  QUESTION 24;
// Implement a TypeScript function that takes in a string and returns the reverse of the string.

//  .....SOLUTION.....,
function myfunction(input:string):string {
    let reversed:string = ""
    for(let i = input.length -1;i >=0; i --){
        reversed += input[i];
    }
    return reversed
}
const orignalstring:string = "hello world"
console.log(myfunction(orignalstring))

// QUESTION NUMBER # 25;
// Create a TypeScript interface representing a car with properties for make, model, and year.

//   ....SOLUTION....,
interface car{
    modle:string;
    year:number;
}

let newcar = {
modle : "civic",
year : 5,
}
console.log(newcar);

// QUESTION NUMBER # 26;
// Write a TypeScript function that takes in an array of strings and returns the longest string in the array.

//   ....SOLUTION.......;
function nwefunction(strings:string[]):string {
    let longest:string = "";
 for (const str of  strings) {
    if(str.length > longest.length){
        longest = str;
    }
    
 }
 return longest
}

 const stringArray:string[] = ["fiza","heer","meeer","bilo"];
 console.log(nwefunction(stringArray))

// QUESTION NUMBER # 27;
// Implement a TypeScript class representing a basic shopping cart. Include methods for adding items, removing items, ancd calculating the total price.
 
//   ....solution....;
class shoppingcart{
    items:{name:string,price:number}[]

    constructor(){
        this.items = [];
    }

    addingItems(name:string,price:number):void{
    this.items.push({name,price});
    }
    removeItems(name:string):void{
    this.items = this.items.filter(item => item.name !== name)
    }

    calculatTotal():number {
     return this.items.reduce((total ,item) => total + item.price, 0)
    }
}

const cart = new shoppingcart();
cart.addingItems("pant",70);
cart.addingItems("boll",123);
cart.addingItems("ink",20);
console.log(cart.calculatTotal());
cart.removeItems("ink");
console.log(cart.calculatTotal());

// QUESTION NUMBER # 28;
//Write a TypeScript function that takes in a number and returns true if it's even and false if it's odd.

//    .....SOLUTION....;
let numberfunction = ((num1:number)=>{
    
    if(num1 % 2 ===  0){
        return true
    }
    else{
        return false
    }
})
 const odd = numberfunction(70);
 console.log(odd);

// QUESTION # 29;
// Create a TypeScript interface representing a geometric shape with properties for type (e.g., circle, square, triangle) and dimensions.

interface geometricshap{
type:string;
dimensions:number;
}

const circle:geometricshap ={
type: "circle",
dimensions : 0,
}

const triangle:geometricshap ={
    type: "rtiangle",
    dimensions : 3,

}
const square:geometricshap = {
    type : "square",
    dimensions : 4,
}
 console.log(circle);
 console.log(triangle);
 console.log(square);

// QUESTION NUMBER # 30;
// Implement a TypeScript function that takes in two numbers and returns their greatest common divisor (GCD).

//   ....SOLUTION...;
function gcd(a: number, b: number): number {
    // Base case: If one of the numbers is 0, return the other number as the GCD
    if (b === 0) {
        return a;
    }

    // Otherwise, recursively call gcd with the remainder of a divided by b
     return gcd(b, a % b);
}

// Example usage:
const num11: number = 24;
const num21: number = 36;
console.log(`GCD of ${num11} and ${num21} is: ${gcd(num11, num21)}`);


/// question number 31;Write a TypeScript class representing a todo list with methods for adding tasks, marking tasks as completed, and displaying all tasks.

//  ... solution,
class todolist{
    lists :{taskname:string,completed:boolean}[]

    constructor(){
        this.lists = []
    }
    addingTask(taskname:string):void{
        this.lists.push({taskname,completed:false});

    }
    markitingTask(taskname:string):void{
const list = this.lists.find(list => list.taskname === taskname);
if(list){
    list.completed = true;
}
    }
    displayingTask(){

    }
}


// 1.higher order and callback function?
// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

// higherOrderFunction(callbackFunction);


// 2. Given a string, reverse each word in the sentence "Welcome to this Javascript Guide!" should be become "emocleW ot siht tpircsavaJ !ediuG"
let x =  "Welcome to this Javascript Guide!";
Output: 321;

function reverseString(str){
   return str.split(' ').map((word)=>{
    return word.split('').reverse().join("")
   }).join(' ')
}
// console.log(reverseString(x));



// 3.how to chcek if an object is an array or not ?
let arraylist=[1,2,3,4,5]
function checkArray(arr) {
    // if (Object.prototype.toString.call(arr) === '[object Array]') {
    //     console.log('this is an array');
    // }

    if (Array.isArray(arr)) {
        console.log('this is an array');
    }
    else{
        console.log('this is not a array')
    }
    
}

// checkArray(arraylist);


// 4.javascript inheritence class statis metthod access?
class Animal {
    constructor(brand) {
        this.carname = brand;
      }
    //normal metthod
    present() {
        return 'I have a ' + this.carname;
      }
    //static method    
    static speak() {
      console.log('Animal speaks');
    }
  }
  
  class Dog extends Animal {

    constructor(brand, mod) {
        super(brand);
        this.model = mod;
      }
      show() {
        return this.present() + ', it is a ' + this.model;
      }
    // static bark() {
    //   console.log('Dog barks');
    //   // Call the static method from the parent class
    //   Animal.speak();
    // }
      subStaticField =Animal.speak();
  }


  
// Call the static method from the child class
// var newdog=new Dog()
// console.log(newdog.subStaticField)



//   5.How to empty an array in javascript?
let array=[1,2,3,4,5]
//  array=[]
let array_list=array;
array_list.length = 0

// console.log(array )


// 6.make this duplicate?
function duplicate(arr){
    return arr.concat(arr)
}
console.log(duplicate([1,2,3,4,5,]))


// 7.mul(2)(3)(4) output showuld be 24?//clouser

function mul(x){
  return function(y){
    return function (z){
      return x * y * z
    }
  }
}
// var res=mul(2)
// var result=res(3)
// console.log(result(4))

// console.log(mul(2)(3)(4))


// 8.write a function that would allow you to?  same as clouser
function addsix(x){
  return function(y){
    return x + y
  }
}
// console.log(addsix(6)(10))

// 9.create a for loop that iterets upto 100 while outputing "fizz" multiple by 3,buzz at multiplise by 5 and "fizzbazz" at multiplies by  3 and 5?
// for (let i = 1; i <= 100; i++) {
 
//   if (i % 3 === 0) {
//       console.log("Fizz");
//   }
//   else if (i % 5 === 0) {
//       console.log("Buzz");
//   }
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
// }
//   else {
//       console.log(i);
//   }
// }

// 2nd solution
for(let i = 1; i <= 100; i++){
  let f= i % 3 == 0 ,
  b= i % 5 == 0
  // console.log( f ?( b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i)
}

// 10.what will be the output?
var z=1
if(function f(){}){
  z+= typeof f
}
// console.log(z)

// (function(){
//  var a = b =5;
// })()

// console.log(b)//b is global scope here so output will bwe 5


// 11.find the output value?
var employment={
  comapny:'xyz'
}

var emp1=Object.create(employment)
delete emp1.comapny
// console.log(emp1.comapny)//protottpr object delete method can not work




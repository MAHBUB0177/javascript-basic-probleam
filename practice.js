
//1.object add new item and distructuring nested object?
// const person={
//     name:'mahbub',
//     age:'24',
//     edu:{
//         class:'bsc',
//         institute:'daffodill'
//     }

// }
// person.address='dhaka'
// const{name,age,address,edu}=person;
// console.log(name,age,address,edu.institute)

//2.array list find last index?
// let item=[]
// item.push('apple','bannana','cherry',4,5,6,'orange','peach',)
// item.unshift("Lemon", "Pineapple");//add 1st index
// let last_indx=item[item.length-1]
// console.log(last_indx)



// 3.push add array last index ,pop remove arr last index (lifo) shift remove arr 1st element(fifo) unshift add arr 1st elemt
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift("bazar");
// console.log(fruits)


//4.find 1st and last elemnt an array?
// let array=[6,7,8,9,4,0]
// const[one,,,,,six]=array;
// console.log(one,five)

// 5.flat map javascript? break the nested loop and convert it flat item
// let list=[1,2,['some','key'],0,9,8,[6,7],[{name:'mahbub',age:'dhaka',},{name:'mahbub',age:'dhaka',},{name:'mahbub',age:'dhaka',}]]
//  list=list.flatMap((item)=>item)
//  console.log(list)

//6.array concat
// let arr1=[1,2,3,4,6,7,8]
// let arr2=[2,3,5,7,9]
// let arr=[...new Set(arr1.concat(arr2))]
// let res=arr.sort((a,b)=>{
//     return a-b
// })
// console.log(res[res.length-1])

//7.entries method
// const array1 = ['a', 'b', 'c'];
// let arr2=array1.entries()
// console.log(arr2.next().value)
// console.log(arr2.next().value)
// console.log(arr2.next().value)


//8.every method?always return a true or false bollien value and check whole array list not only a elemnt
// function isBigEnough(Element,index,Array){
//     return Element >=10
// }

// let arr=[10,20,30,40,50]
// console.log(arr.every(isBigEnough))



// function subset(arr1,arr2){

//     return arr1.every((element)=>arr2.includes(element))
// }

// console.log(subset([1,2,3,4,,5],[5,6,7,8])) 

//9.find methud return the 1st satisfived value?
// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);
// console.log(found)

//10.findindex method?
// let arr=[10,23,15,67,88]
// let dom=arr.findIndex((elm)=>elm>13)
// console.log(dom)

//11.findlast methid?find the value in reverse order
// const array1 = [5, 12, 50, 130, 44];
// let dom=array1.findLast((elm)=>elm>45)
// console.log(dom)

//12.join method?
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join(' '))

//13.replace method?
// let num='mahbub alam is a job holder'
// num=num.replace('mahbub','mr')
// console.log(num)


//14.array some method? check each elemnt and return true false value:array some method jeta korbe se array er potekta elemnet
//  check korbe jotkhon porjpnto "true" value na pai .er pro jdi 
//  aktaw true value na pai tahole se ''false'' return korbe ar jdi chek korar time aktaw ''true"
//   value pai tahole se "true" return korbe ebong function er vitor theke ber hoie jabe er check korbe na
// const fruits = ["apple", "banana", "mango", "guava"];

// function checkAvailability(arr, val) {
//   return arr.some((arrVal) => val === arrVal);
// }

// checkAvailability(fruits, "kela"); // false
// checkAvailability(fruits, "banana"); // true


// 15.objects key method?
// let person={
//     name:'mahbub',
//     age:23,
//     address:'dhaka'
// }
// console.log(Object.keys(person).length === 3 ? true:false)


// 16.class and inheretence?
// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   let myCar = new Model("Ford",'volvo');
//   console.log(myCar.show())

// 17.js metod override function?
// class Calculator{
//     constructor(a,b){
//         this.num1=a
//         this.num2=b
//     }
//     sum(){
//          let res= this.num1 + this.num2
//          return res;
//     }
// }
// class supercalculetor extends Calculator {
// constructor(a,b,x){
//     super(a,b)
//     this.num3=x
// }
// sum(a,b,x){
//     let res=a+b+x
//     return res;
// }
// }

// var result= new supercalculetor()
// console.log(result.sum(6,7,8))

// 18.array sort?
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return  b-a});//desecending(a-b)//assending
// console.log(points)


// 19.find the array heighest or lowest ement in the list?
// const points= [40, 100, 1, 5, 25, 10];
// points.sort(function(a,b){
//     return a-b;
// })
// console.log(points[points.length-1])//heighest value


// 20.argument function?
// function getName(fname,lname){
//     console.log(fname,lname);
//     let fullNmae='';
//     for(var i=0;i<arguments.length;i++){
//       var name=arguments[i];

//       fullNmae=fullNmae + ' ' + name;


//     }
//     return fullNmae;
//   }

//   let res=getName('mahbub','alam','mithin','lopper')
//  console.log(res)

// 21.callback function?

// function fullname(fname,callback){
//     callback(fname)
// }

// function getname(name){
//     console.log('firstname is ' + " "+ name)
// }

// console.log(fullname('mahbub',getname))

// 22.promise function?
// let persons=[
//     {firstname:"mahbub",lastname:"alam"},
//     {firstname:"rahim",lastname:"molla"}
// ]

// function createPerson(person){
//    let promp=new Promise(function(resolve,reject){
//        persons.push(person);
//        let error=false;
//        if(!error){
//         resolve();

//        }
//        else{
//            reject("error!something missing");
//        }
  
//    });
//    return promp;
// }
// createPerson({firstname:"mahon",lastname:"molaa"})
// console.log(persons)


//23.promise javascript?
// let promise1 = new Promise((resolve,reject)=>{
//     let completedrpromise=true;
//     if(completedrpromise){
//         resolve('promise 1 is completed')
//     }
//     else{
//         reject('promise 1 is not completed')
//     }
// })

// console.log(promise1)//allproperty of promise function
// promise1.then((res)=>console.log(res)).catch((err)=>console.log(err.message))
//resolve hle .then block e dhokbo ar rejcet hle .catch() block e dhokbo


// 24.Array reduce function?
// const myarr=[90,6,9,8,6,5,3,2]
// const result= myarr.reduce((prevalue,currentvalue,currentindex,arr)=>{
//     console.log(currentindex,arr)
//     return prevalue + currentvalue;
    
// },0)
// console.log(result,'0000')


// 25.Let's say we have an array of objects representing orders, and each order has an id, 
// date, status, and items property. We want to find the total 
// revenue generated by each status, for a given date range. 
// The revenue is calculated by summing the price of each item in an order.

// const orders = [
//     { id: 1, date: '2022-04-01', status: 'completed', items: [{ name: 'Item 1', price: 10 }, { name: 'Item 2', price: 20 }] },
//     { id: 2, date: '2022-04-01', status: 'completed', items: [{ name: 'Item 3', price: 30 }, { name: 'Item 4', price: 40 }] },
//     { id: 3, date: '2022-04-02', status: 'pending', items: [{ name: 'Item 5', price: 50 }, { name: 'Item 6', price: 60 }] },
//     { id: 4, date: '2022-04-03', status: 'completed', items: [{ name: 'Item 7', price: 70 }, { name: 'Item 8', price: 80 }] },
//     { id: 5, date: '2022-04-04', status: 'completed', items: [{ name: 'Item 9', price: 90 }, { name: 'Item 10', price: 100 }] },
//   ];
  
//   const startDate = '2022-04-01';
//   const endDate = '2022-04-03';

  
//   const revenueByStatus = orders.filter(order => order.date >= startDate && order.date <= endDate)
//     .reduce((accumulator, currentValue) => {
//       const status = currentValue.status;
//       const revenue = currentValue.items.reduce((total, item) => total + item.price, 0);
//       console.log(revenue)
//       if (!accumulator[status]) {
//         accumulator[status] = revenue;
//       } else {
//         accumulator[status] += revenue;
//       }
//       return accumulator;
    
//     }, {});
  
//   console.log(revenueByStatus);
  


//javascript object mapping ways:
const person={
    bame:'name',
    age:'89',
    address:'dhaka'
}

// for (const key in person){
//     // console.log(person[key])
//     if(person[key] !== null){
//         // let total=0
//       console.log( 'ok')
//     }
// }

// for(const [key,value] of Object.entries(person)){
//     // console.log(value)
//     if(value){
//         console.log('ok')
//     }
// }

// Object.keys(person).map((key)=>{
//     // console.log(item)
//     if(person[key]){
//         console.log('ok')
//     }
// })


// 26.javascript event propagation function?
{/* 
<div onClick={() => console.log('outer div')}>
  <div onClick={() => console.log('middle div')}>
    <div onClick={() => console.log('innermost div')}>
      Click me!
    </div>
  </div>
</div>

Event propagation: bubbles without the champagne.
Console log for event propagation example:
innermost div
middle div
outer div render if we stop this then use the innermost onclick function e.stopPropagation() */}


// 27.difference between useEffect,useMemo and UseCallback function?
// useEffect:
// 1.Purpose: useEffect is used for handling side effects in functional components. 
// Side effects can include data fetching, setting up subscriptions, manually changing the DOM, and more.
// When it
// 2.runs: useEffect is executed after the component has rendered (mounted).
//  It also runs after every subsequent re-render of the component, by default.

// 3.Dependencies: You can specify a dependency array as the second argument to useEffect.
//  The effect will only run when the values in the dependency array change.
//  If no dependency array is provided, the effect runs on every render.


// useMemo:

// 1.Purpose: useMemo is used for memoizing values to prevent unnecessary recalculations of expensive
// computations or calculations that depend on props or state.
// When it 
// 2.runs: useMemo is executed during the render phase of a component, not after rendering like useEffect.
// 3.Dependencies: useMemo also takes a dependency array as the second argument. It will recompute the memoized value when any of the dependencies change.
// const memoizedValue = useMemo(() => {
//     // Expensive calculation or value generation
//     return someValue;
//   }, [dependency1, dependency2]);

// useCallback:
// 1.Purpose: useCallback is used for memoizing callback functions to optimize performance and prevent unnecessary re-rendering of child components that depend on these callbacks.
// 2.When it runs: useCallback runs during the render phase of a component.
// Dependencies: You provide a dependency array as the second argument to useCallback, and it will recreate the memoized callback only when any of the dependencies change.
// Typical use cases: Memoizing event handlers or callbacks passed to child components to prevent them from re-rendering when the parent component re-renders.
// const memoizedCallback = useCallback(() => {
//     // Callback code goes here
//   }, [dependency1, dependency2]);


// 27.how to check 2 objects are same or not?

let a = {
  name: 'mahbub',
  age: 23,
  phone:'5678'
};

let b = {
  name: 'tamim',
  age: 23,
  address: 'dhaka',
};
  function findDiffernce(obj1,obj2){
    let object1=Object.keys(obj1);
    let object2=Object.keys(obj2)

    if(object1.length !== object2.length){
        return false
    }
    
//check key are same or not/*+++++++++++++++++++-
    for (const key of object1) {
      if (!object2.includes(key)) {
        return false;
      }
    }
    // for(const [key,value] of Object.entries(obj1)){
    //     if (obj1[key] !== obj2[key]){
    //         return false
    //     }
    // }
    // check value are same or not
    // for (const [key, value] of Object.entries(obj1)) {
    //     if (value !== Object.keys(obj2).map((key)=>{return obj2[key]})){
    //         return false
    //     }
    //   }
    return true

  }

  let resulst=findDiffernce(a,b)
  console.log(resulst,'290-')
  
  const persons = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
    },
  };
  
  function countProperties(obj) {
    let count = 0;
    // for (let key in obj) {
    //   if (obj.hasOwnProperty(key)) {
    //     count++;
    //     if (typeof obj[key] == "object" && obj[key] !== null) {
    //       count += countProperties(obj[key]); //recersivly called the function again
    //     }
    //   }
    // }

    Object.keys(obj).map((key)=>
    {
      if(obj.hasOwnProperty(key)){
      count++;
    }
    if(typeof obj[key] === 'object' && obj[key] !== null){
      count += countProperties(obj[key])
    }
    }

    )
    return count;
  }
  
  // console.log(countProperties(persons),'0000000000');


// function hosting(){
//   a=10; // a is global instance
//   let x=20;
// }
// hosting()
//   console.log(a)
//   console.log(x,'999999999999')


function task1(){
  console.log('this is task1')
  task3()
}

function task2(){
  console.log('this is task2')
}

function task3(){
  console.log(' this is task3')
}

task1()


const fisrt=()=>{
  console.log('this is first')
  third()
}

const second=()=>{
  console.log('this is second')
}

const third=()=>{
  console.log('this is third')
}

// fisrt()

//promise request handeling
const [isRequestPending, setIsRequestPending] = useState(false);

// const getTicketingList = async () => {
//   // Check if a request is already pending
//   if (isRequestPending) return;

//   try {
//     setIsRequestPending(true); // Set the pending state to true
//     setLoading(true);

//     const response = await getBookingData(
//       {
//         agentId: sessionStorage.getItem("agentId") ?? 0,
//         status: status,
//         ...filterData,
//       },
//       currentPageNumber,
//       pageSize
//     );

//     setTicketingList(response.data.data);
//     setPageCount(response.data.totalPages);
//   } catch (error) {
//     console.error("Error fetching ticketing list:", error);
//   } finally {
//     setIsRequestPending(false); // Reset the pending state
//     setLoading(false);
//   }
// };



// ==Write a JavaScript program to calculate the factorial of a given number. with recursion===
function factorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
//alternative solution
function factorial(num){
    let res=1;
    for(let i=2; i<=num; i++){
        res=res*i
    }
    return res;
    
}

console.log(factorial(7))

// === Write a JavaScript function to check if a given number is prime. ===
function isPrime(num) { 
  if (num <= 1) return false; 
  for (let i = 2; i < num; i++) { 
    if (num % i === 0) return console.log('is not a prime number'); 
  } 
  return console.log(` is  a prime number`); 
} 
console.log(isPrime(15))

// ===Write a JavaScript program to find the largest element in a nested array. ===
function findLargestInNestedArray(arr) {
  const flatArray = arr.flat(arr); // Flattens deeply nested array
  console.log(flatArray)
  return Math.max(...flatArray);
}


const nestedArray = [1, [3, 5], [2, [10, [6, 99]], 4], 7];
const largest = findLargestInNestedArray(nestedArray);
// console.log(largest); // Output: 99


// Write a Program to convert Celsius to Fahrenheit in JavaScript?
function celsiusToFahrenheit(celsius) {
    // find the conversion from Celsius to
    // Fahrenheit Fahrenheit=(Celsius×9/5)+32
    return (celsius * 9 / 5) + 32;

}

console.log(celsiusToFahrenheit(20));

//farenhite to celcius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(68));

// 28. Find the Union of Two Arrays in JavaScript?
function arrayUnion(arr1, arr2) {
    // merges two arrays then removes duplicates
    // and returns the output as a new array.
    return [...new Set([...arr1, ...arr2])];
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4]));

//29. Find the maximum difference between two numbers in an array in JavaScript?
function maxDifference(arr) {
  if (arr.length < 2) return 0; // not enough elements
  const maxVal = Math.max(...arr);
  const minVal = Math.min(...arr);
  return maxVal - minVal;
}

console.log(maxDifference([2, 10, 1, 7])); // 9 (10 - 1)

// sum values of string input
const ab = "5";
const bc = "10";

// Problem: "5" + "10" = "510"  (string concatenation)
console.log(ab + bc);

// Fix: Convert to number
console.log(Number(ab) + Number(bc)); // 15

//null and undefined error handeling
const arr = [10, null, undefined, "20", NaN];

const sum = arr.reduce((acc, val) => acc + (Number(val) || 0), 0);
console.log(sum); // 30

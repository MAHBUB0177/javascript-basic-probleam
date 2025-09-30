// console.log("first");
const myarr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function pushToRows(arr, value) {
  return arr.map((item) => [...item, 10]);
}

// console.log(pushToRows(myarr));

// 3..subset?
// const array = [4, -1, 2, 1];
// function findMaxSum(array) {}

// const getAllSubsets = (Array) =>
//   Array.reduce(
//     (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
//     [[]]
//   );

// console.log(getAllSubsets(array));

// function findMaxSum(arr) {
//   const n = arr.length;
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return arr[0];
//   }

//   // Initialize variables to store the previous and current maximum sums
//   let prevMax = arr[0];
//   console.log(prevMax);
//   let currMax = Math.max(arr[0], arr[1]);
//   console.log(currMax);

//   // Iterate through the array starting from the third element
//   for (let i = 2; i < n; i++) {
//     // Calculate the maximum sum considering the current element
//     // and the sum excluding the adjacent element
//     const temp = Math.max(currMax, prevMax + arr[i]);

//     // Update the previous and current maximum sums
//     prevMax = currMax;
//     currMax = temp;
//   }

//   // The current maximum sum will contain the maximum sum
//   return currMax;
// }

// const arr = [4, -1, 2, 1];
// const maxSum = findMaxSum(arr);
// console.log("Maximum sum:", maxSum);

//subset of an array?
// var getAllSubsets = (nums) => {
//   const subsets = [[]];
//   for (n of nums) {
//     subsets.map((el) => {
//       console.log(el);
//       subsets.push([...el, n]);
//     });
//   }
//   return subsets;
// };

// console.log(getAllSubsets([1, 2, 3]));

//count the object properties
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
      if (typeof obj[key] == "object" && obj[key] !== null) {
        count += countProperties(obj[key]); //recersivly called the function again
      }
    }
  }

  return count;
}

// console.log(countProperties(person),'0000000000');

//return unique value and sort the array?

let Array_list = [1, 2, 3, 4, 5, 2, 3, 4];
let res = [...new Set(Array_list)];
res.sort((a, b) => {
  return a - b;
});
// console.log(res[res.length - 1]);

//javascript array entries method?
const array = ["a", "b", "c", 4, 5, 6, 7, 8, (name = { age: "24" })];
for (let [index, element] of array.entries()) {
  if (typeof element === "object") {
    // console.log("first");
  }
}

//findindex method?
const array1 = [5, 12, 8, 130, 44];
function indexfind(array) {
  return array.findIndex((item, i) => {
    // console.log(item);
    return item > 13;
  });
}
// console.log(indexfind(array1));

//findlast method?
const array_list = [5, 12, 50, 130, 44];
const found = array_list.findLast((element) => element > 45);
// console.log(found);

//flat method of array
const arr = [1, , 3, ["a", , "c"]];
// console.log(arr.flat());
//flatmap method?
const arr3 = [1, 2, [4, 5, [3, [0]]], 6, 7, [8]];
function ArryOk(arr3) {
  return arr3.flatMap((item, index) => {
    return item;
  });
}
// console.log(ArryOk(arr3));

//javascript objects method

//1.entries method use we can work for map in a object:
const person1 = {
  a: "somestring",
  b: {
    data: "ai",
    code: 12,
  },
  c: {
    data: 2,
    name: "op",
  },
};

for (const [key, value] of Object.entries(person1)) {
  if (value !== "" && typeof value == "object") {
    // console.log(value?.data);
  }
  // console.log(key, value);
}

// Summary of Object Looping Types:
// 1.for..in
const myobj = { name: "John", age: 30, city: "Dhaka" };
for (let key in myobj) {
  console.log(key, myobj[key]);
}
// 2.for..of
for (const [key, value] of Object.entries(myobj)) {
  console.log(key, value);
}
// 3.object.entries
Object.entries(myobj).forEach(([key, value]) => {
  console.log(key, value);
});
// 4.object.keys()
Object.keys(myobj).forEach(key => {
  console.log(key, person[key]);
});
// 5.object.values()
Object.values(myobj).forEach(key => {
  console.log(key, person[key]);
});

//javascript complex object problem
const columns = [
  {
    header: "Flight Season Name",
    accessorKey: "flightSeasonName",
    id: "flightSeasonName",
    columnDefType: "data",
  },
  {
    header: "Flight Date",
    accessorKey: "flightDate",
    id: "flightDate",
    columnDefType: "data",
  },
  {
    header: "Standard Departure Time",
    accessorKey: "standardDepartureTime",
    size: 200,
    id: "standardDepartureTime",
    columnDefType: "data",
  },
  {
    header: "Standard Arrival Time",
    accessorKey: "standardArrivalTime",
    id: "standardArrivalTime",
    columnDefType: "data",
  },
  {
    header: "Actual Departure Time",
    accessorKey: "actualDepartureTime",
    id: "actualDepartureTime",
    columnDefType: "data",
  },
  {
    header: "Actual Arrival Time",
    accessorKey: "actualArrivalTime",
    id: "actualArrivalTime",
    columnDefType: "data",
  },
  {
    header: "Leg",
    accessorKey: "leg",
    id: "leg",
    columnDefType: "data",
  },
  {
    header: "Duration (H:M)",
    accessorKey: "duration",
    id: "duration",
    columnDefType: "data",
  },
  {
    header: "Flight Type",
    accessorKey: "flightType",
    id: "flightType",
    columnDefType: "data",
  },
  {
    header: "Status",
    accessorKey: "flightStatus",
    id: "flightStatus",
    columnDefType: "data",
  },
  {
    header: "Layover",
    accessorKey: "isLayover",
    id: "isLayover",
    columnDefType: "data",
  },
  {
    header: "Actions",
    accessorKey: "action",
    id: "action",
    columnDefType: "data",
  },
];

const data = [
  {
    id: 2504,
    flightNo: "BS 606",
    standardDepartureTime: "23:00",
    standardArrivalTime: "2023-05-01 23:50:00",
    duration: "00:50",
    aircraftId: null,
    aircraftName: "Not Assigned",
    airportPairId: 14,
    leg: "JSR - DAC",
    flightDate: "2023-05-01",
    flightType: "DOMESTIC",
    flightStatus: "PENDING",
    flightSeasonId: 1,
    flightSeasonName: "Summer 2023",
    actualDepartureTime: "23:00",
    actualArrivalTime: "2023-05-01 23:50:00",
    isLayover: false,
    key: 2504,
  },
  {
    id: 2503,
    flightNo: "BS 606",
    standardDepartureTime: "23:00",
    standardArrivalTime: "2023-05-02 23:50:00",
    duration: "00:50",
    aircraftId: null,
    aircraftName: "Not Assigned",
    airportPairId: 14,
    leg: "JSR - DAC",
    flightDate: "2023-05-02",
    flightType: "DOMESTIC",
    flightStatus: "PENDING",
    flightSeasonId: 1,
    flightSeasonName: "Summer 2023",
    actualDepartureTime: "23:00",
    actualArrivalTime: "2023-05-02 23:50:00",
    isLayover: false,
    key: 2503,
  },
  {
    id: 2502,
    flightNo: "BS 606",
    standardDepartureTime: "23:00",
    standardArrivalTime: "2023-05-03 23:50:00",
    duration: "00:50",
    aircraftId: null,
    aircraftName: "Not Assigned",
    airportPairId: 14,
    leg: "JSR - DAC",
    flightDate: "2023-05-03",
    flightType: "DOMESTIC",
    flightStatus: "PENDING",
    flightSeasonId: 1,
    flightSeasonName: "Summer 2023",
    actualDepartureTime: "23:00",
    actualArrivalTime: "2023-05-03 23:50:00",
    isLayover: false,
    key: 2502,
  },
  {
    id: 2501,
    flightNo: "BS 606",
    standardDepartureTime: "23:00",
    standardArrivalTime: "2023-05-04 23:50:00",
    duration: "00:50",
    aircraftId: null,
    aircraftName: "Not Assigned",
    airportPairId: 14,
    leg: "JSR - DAC",
    flightDate: "2023-05-04",
    flightType: "DOMESTIC",
    flightStatus: "PENDING",
    flightSeasonId: 1,
    flightSeasonName: "Summer 2023",
    actualDepartureTime: "23:00",
    actualArrivalTime: "2023-05-04 23:50:00",
    isLayover: false,
    key: 2501,
  },
  {
    id: 2500,
    flightNo: "BS 606",
    standardDepartureTime: "23:00",
    standardArrivalTime: "2023-05-05 23:50:00",
    duration: "00:50",
    aircraftId: null,
    aircraftName: "Not Assigned",
    airportPairId: 14,
    leg: "JSR - DAC",
    flightDate: "2023-05-05",
    flightType: "DOMESTIC",
    flightStatus: "PENDING",
    flightSeasonId: 1,
    flightSeasonName: "Summer 2023",
    actualDepartureTime: "23:00",
    actualArrivalTime: "2023-05-05 23:50:00",
    isLayover: false,
    key: 2500,
  },
  {
    id: 2499,
    flightNo: "BS 606",
    standardDepartureTime: "23:00",
    standardArrivalTime: "2023-05-06 23:50:00",
    duration: "00:50",
    aircraftId: null,
    aircraftName: "Not Assigned",
    airportPairId: 14,
    leg: "JSR - DAC",
    flightDate: "2023-05-06",
    flightType: "DOMESTIC",
    flightStatus: "PENDING",
    flightSeasonId: 1,
    flightSeasonName: "Summer 2023",
    actualDepartureTime: "23:00",
    actualArrivalTime: "2023-05-06 23:50:00",
    isLayover: false,
    key: 2499,
  },
  {
    id: 2498,
    flightNo: "BS 606",
    standardDepartureTime: "23:00",
    standardArrivalTime: "2023-05-07 23:50:00",
    duration: "00:50",
    aircraftId: null,
    aircraftName: "Not Assigned",
    airportPairId: 14,
    leg: "JSR - DAC",
    flightDate: "2023-05-07",
    flightType: "DOMESTIC",
    flightStatus: "PENDING",
    flightSeasonId: 1,
    flightSeasonName: "Summer 2023",
    actualDepartureTime: "23:00",
    actualArrivalTime: "2023-05-07 23:50:00",
    isLayover: false,
    key: 2498,
  },
  {
    id: 2497,
    flightNo: "BS 606",
    standardDepartureTime: "23:00",
    standardArrivalTime: "2023-05-08 23:50:00",
    duration: "00:50",
    aircraftId: null,
    aircraftName: "Not Assigned",
    airportPairId: 14,
    leg: "JSR - DAC",
    flightDate: "2023-05-08",
    flightType: "DOMESTIC",
    flightStatus: "PENDING",
    flightSeasonId: 1,
    flightSeasonName: "Summer 2023",
    actualDepartureTime: "23:00",
    actualArrivalTime: "2023-05-08 23:50:00",
    isLayover: false,
    key: 2497,
  },
  {
    id: 2496,
    flightNo: "BS 606",
    standardDepartureTime: "23:00",
    standardArrivalTime: "2023-05-09 23:50:00",
    duration: "00:50",
    aircraftId: null,
    aircraftName: "Not Assigned",
    airportPairId: 14,
    leg: "JSR - DAC",
    flightDate: "2023-05-09",
    flightType: "DOMESTIC",
    flightStatus: "PENDING",
    flightSeasonId: 1,
    flightSeasonName: "Summer 2023",
    actualDepartureTime: "23:00",
    actualArrivalTime: "2023-05-09 23:50:00",
    isLayover: false,
    key: 2496,
  },
  {
    id: 2495,
    flightNo: "BS 606",
    standardDepartureTime: "23:00",
    standardArrivalTime: "2023-05-10 23:50:00",
    duration: "00:50",
    aircraftId: null,
    aircraftName: "Not Assigned",
    airportPairId: 14,
    leg: "JSR - DAC",
    flightDate: "2023-05-10",
    flightType: "DOMESTIC",
    flightStatus: "PENDING",
    flightSeasonId: 1,
    flightSeasonName: "Summer 2023",
    actualDepartureTime: "23:00",
    actualArrivalTime: "2023-05-10 23:50:00",
    isLayover: false,
    key: 2495,
  },
];

function newObject(columns) {
  return columns.map((item) => {
    for (const key in item) {
      if (key === "accessorKey") {
        return item[key];
      }
    }
  });
}

const list = newObject(columns);
// console.log(list);

function updateObject(data, list) {
  return data.map((item) => {
    const newObj = {};
    for (const key in item) {
      if (list.includes(key)) {
        Object.assign(newObj, { [key]: item[key] });
      }
    }
    return newObj;
  });
}

// console.log(updateObject(data, list));


// reverse string in javascript?
let x = "bangladesh is a country";
Output: 321;
function reverseString(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
// console.log(reverseString(x));

//reverse a integer number
function reverseString1(num) {
  let str = num.toString();
  let res = str.split("").reverse().join("");
  return parseInt(res);
}

// console.log(reverseString1(123));

//javascript median value return
const medianValue = (arr) => {
  const mid = Math.floor(arr.length / 2);
  let nums = arr.sort(function (a, b) {
    return a - b;
  });
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

// const medianValue = (arr) => { //normal solution
//   const mid = Math.floor(arr.length / 2);
//   return arr.length % 2 !== 0 ? arr[mid] : (arr[mid ] + arr[mid -1 ]) / 2;
// };

// console.log(medianValue([1, 5, 3, 10, 9]));

// var myAtoi = function (s) {
//   let num = s.match(/\d+/);
//   // let data = " mum";
//   // console.log(data.trim());

//   //   console.log(num,'0000')
//   if (num) {
//     return (num = parseInt(num[0]));
//   }
// };

// console.log(myAtoi("      -4193"));
const str = " -987";
const number = parseInt(str.match(/\d+/g)?.[0]) || 0;

// console.log(number); // Output: 0

var myAtoi = function (s) {
  let num = s.match(/\-?\d+/);
  let number = parseInt(num)
  if(isNaN(number)){
   return 0;
}
  if (num) {
    return (num = parseInt(num[0]));
  }
};

// console.log(myAtoi("   how this number -4193"));


//duplicate value check ?
// Input: 
let num = [1, 2, 3, 1];
// Output: true;
function duplicateReturn(number){
  const set =new Set()
  for(let i=0;i<number.length;i++){
    if (set.has(number[i])){
      return true
    }
    set.add(number[i]);
  }
  return false
 

}

// console.log(duplicateReturn(num))


//what is promise:
// `promises are a fundamental JavaScript feature used for handling asynchronous operations. 
// Promises are commonly used in React applications (and in JavaScript in general) to manage asynchronous tasks,
// such as fetching data from a server,
//  making API calls, or handling other time-consuming operations without blocking the main thread`


//  clusers
// `a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.`
// exam:
// clousure besicaly akta function jekhane amra outer function er kono kisoke inner function er vitore access korte pari
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

//if payload has a empty property then remove this property in payload object?
const payload ={
  status:'All',
  upcomingDayCount:'800',
  airlinecode:'upi',
  uniqueTransID: "",
}

Object.entries(payload).map(
      ([key, value], i) => {
        if (!value) {
          delete payload[key]
        }
      }
    )

//javascript call,applay,and bind method?
const info={
  firstname:'mahbub',
  lastname:'alam'
}

const listdata={
  firstname:'mahbub',
  lastname:'alam'
}
const printfullname=function(hometown,state){
  console.log(this.firstname + " " + this.lastname + " " + 'from' + ' '+  hometown + ',' + state)
}
// printfullname.call(info,'dhaka','dhanmondi')//call method takes 1st argument as which item we call then other argument pass individualy
// printfullname.apply(listdata,['dhaka','dhanmondi'])//apply method takes 1st argument as which item we applay then other argument pass an array list
const printname=printfullname.bind(info,'dhaka','dhanmondi')//bind method takes 1st argument as which item we bind then other argument pass individualy but it can not directly invoke a function it return a function then call it as like function


// Synchronous and Asynchronous 
// javascript Synchronous : Synchronous code moves slowly and only does one task at a time.JavaScript is synchronous, 
// blocking and single-threaded. This means that the JavaScript engine executes our program sequentially,
//  one line at a time from top to bottom in the exact order of the statements.

// javascript Asynchronous: Asynchronous moves fast and does multiple task at a time.
// Asynchronous is multithread ,non-blocking programimng
// so that at a time multiple action can execute and it can not depend other action

// exmaple:Synchronous

const task1=()=>{
  console.log('task1')
}

const task2=()=>{
  console.log('task2')
}

//javascript default bahviour hsse se jokn  kno Asynchronous/time consuming  task pabe jar jnno take wait korte hbe 
// tkn se oi kajta nije na kore web Api e uthai die baki kaj gula korte thake multitasking vabe erpor callstack free hle web api theke oi 
// Asynchronous task complete hle  nie kaj korbe

//amara jdi Synchronous way te kortam tahle task3 te 4ms wait korte hoto oi time se ar kno kj kortona aita 4ms por
//  execute hobar por nicher baki kaj korto aijnno amra etake Asynchronous way te kori jate wait na korte hoi
const task3=()=>{
 setTimeout(()=>{
  console.log('task3')
 },4000)
}
const task4=()=>{
  console.log('task4')
}
const task5=()=>{
  console.log('task5')
}

// task1()
// task2()
// task3()
// task4()
// task5()

// ##Is JavaScript asynchronous or synchronous medium?
 "Javascript is the synchronous single-threaded language but with the help of event-loop and promises.JavaScript is used to do asynchronous programming"
 "It's single-threaded like synchronous but also non-blocking like asynchronous. Although it's synchronous by nature, JavaScript benefits from an asynchronous process"


 //function execution in preirity base in javascript?
//  1st prirety synchoronus then promise fun priority then set-timeout

// console.log("Start"); // Synchronous code

setTimeout(() => {
  // console.log("setTimeout callback"); // Asynchronous code
}, 0);

function task(){
    console.log('hello')
}
// task()
const promise = new Promise((resolve, reject) => {
  // console.log("Promise executor"); // Asynchronous code
  resolve("Promise resolved");
});

// console.log("End"); // Synchronous 


//  ##How to reverse a string in JavaScript using recursion?
//recursion function onk beshi memory khai onk vari..amra for loop use korar try korbo.
function reverse(stri) {
  if(stri == '') { 
    return '';
  }
  else {  
  lastIndex= stri.length-1;
  return stri[lastIndex]+ reverse(stri.substring(0,lastIndex));
  }
}
let stri = 'test'
let result = reverse(stri);
// console.log('result', result); //output:  tset

// ## Write a code to display which character is coming how many times in a given string?
const countOccurences =(str)=>{
    let exists={};
    
    for (let char of str){
        exists[char] = (exists[char] || 0) +1
    }
    
    for(char in exists){
        console.log(`Occurence of ${char} is : ${exists[char]}`)
    }
}

countOccurences('malayalam')

//##Write a function to check whether a string is a palindrome or not with time complexity of the code ?
const isPalindrome=(str)=>{
  let reverse=str.split("").reverse().join('')
  console.log(reverse,'reverse')
  if(str === reverse ){
  return true
  }
  else{
    return false
  }
  }
  
  // console.log(isPalindrome('malayalam'))

  //write an anargam function ?
  const isAnagram = (str1, str2) => {
    let sortedStr1 = str1.split('').sort().join('');
    console.log(sortedStr1)
    let sortedStr2 = str2.split('').sort().join('');
      console.log(sortedStr2)
    return sortedStr1 === sortedStr2;
}
// console.log(isAnagram('listen', 'silent')); 
// console.log(isAnagram('hello', 'world'));

// difference between normal and arrow function??

  // 1.Normal functions: Defined using the function keyword but arrow function can not use function keyword.
  // 2.Normal functions: Have their own this context,the function is invoked (e.g., as a method, with apply, call, or bind methods).use constructutre
  // Do not have their own this context. (i.e., the enclosing scope where the arrow function is defined).can not use constructutre
  // 3.Normal functions: Have access to the arguments object, which is an array-like object containing all the arguments passed to the function.
  // Arrow functions: Do not have their own arguments object. Instead, they inherit the arguments object from the containing non-arrow function.

//object reference?

// javascript e function bescicaly akta object .and when react componnet is render then always create a new object reference 
// in each time.that's why when component is rendered then function reference is changed


// ##what is pure function?

// function calculateGST(productPrice) {
//   return productPrice * 0.05;
// }
// console.log(calculateGST(15)) pure function same set of input return same set of output and can not depend external things

// let tax = 20;
// function calculateGST(productPrice) {
//     return productPrice * (tax / 100) + productPrice;
// }
// console.log(calculateGST(15)) not a pure function beacuse in depend external tax variable

//what is the differnce between javascript and typescript?
// 1.javascript dynamically typed but typescript staticaly typed.
// 2.javascript can directly executed in browser but typescript compiled into javascript before run/executed.
// 3.javascript throw runtime error line by line executed then when error found throw it but typescript throw compiled time error.


//getServerSideProps:
// getServerSideProps is used to fetch data at request time, which means the data is fetched on the server for every request. 
// This is useful when you need to fetch data that changes frequently or is specific to a particular user.

export async function getServerSideProps(context) {
  // Fetch data from an API, database, etc.
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const Page = ({ data }) => {
  return (
    <div>
      <h1>Data fetched with getServerSideProps</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page;

// When to use getServerSideProps:
// When you need to fetch data that changes frequently.
// When you need to fetch data specific to the incoming request.
// When you need to ensure the data is always up-to-date.

//getStaticProps
// getStaticProps is used to fetch data at build time, which means the data is fetched when the application is built.
//  This is useful for pages that have data that does not change often and can be statically generated.

 export async function getStaticProps() {
  // Fetch data from an API, database, etc.
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const Page1 = ({ data }) => {
  return (
    <div>
      <h1>Data fetched with getStaticProps</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

// export default Page;
// ***When to use getStaticProps:

// When you need to fetch data at build time.
// When the data does not change frequently or is static.
// When you want to pre-render pages for better performance and SEO.

//react use oneway or two way data binding?

// React primarily uses one-way data binding, which means data flows in a single direction,
//  from parent components to child components through props.
//  This approach helps maintain a clear data flow, making debugging and tracking changes easier.

// However, while React enforces one-way data binding,
//  you can still achieve two-way binding by manually managing both the state and the input,
//   especially for form elements.
//   for example:
//   simple input newa and state die value show kora


// ***some majoer changes of ES5 and ES6+ ?
// 1.Variable Declarations (let and const)
// ES5
var t = 10;//use only var declarations

// ES6 //use let and const declarations
let y = 20;
const z = 30;

// 2. Arrow Functions?
// ES5 //Functions are declared using the function keyword, and this context depends on how the function is called.
var sum = function(a, b) {
  return a + b;
};

// ES6 Introduced arrow functions (=>), which have a concise syntax and lexically bind this, meaning they inherit the this value from the surrounding code.
const sum = (a, b) => a + b;

// 3. Destructuring Assignment?
// ES5 Extracting values from arrays or objects requires manual assignment.
var persons = { name: "John", age: 30 };
var name = person.name;
var age = person.age;

// ES6 Destructuring allows easy extraction of values from arrays or objects into variables
const { name, age } = person;
// 5. Default Parameters,
// 6. Rest and Spread Operators

// 7. Classes
// 8. Promises
// ES5: Asynchronous operations are handled using callbacks, which can lead to "callback hell."
// ES6: Introduced Promise, which makes handling asynchronous code cleaner and easier with then() and catch() methods.

// 9. Modules (Import/Export)
// ES5 (CommonJS)
var module = require('module');

import { Domain } from 'domain';
// ES6
import { myFunction } from './myModule';
export const myFunction = () => {}

// 10. Block-scoped Functions
// ES5: Functions are not block-scoped, which can lead to scope-related issues.
// ES6: Functions declared inside a block are scoped to that block
// ES6
{
  function myFunction() { /* ... */ }
}
// myFunction is only available inside this block

//HTML5 new advance features
// 1.Semantic Elements: MediaStreamAudioDestinationNode,articale,nav,table,header,footer
// 2.canvas,audio,video,svg,Web Storage(local and session storage),websocket,Drag & Drop


// ************css3 new properties*****************
// 1.flexBox:one dimensional ,grid :two dimensional row and column, resize:none, both, horizontal, verticale
// Outline-Offset,Animation,Transition,Transforms,Background-Size:auto, cover, contain
// Box-Sizing,Box-Shadow,Opacity
//media-query




   




// ********difference between array map,filter and forEach function ********************
// ===== map ====
// Purpose: Transforms each element in an array and returns a new array.

// Returns: A new array with the same length.

// Use case: When you want to modify or convert the elements.
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2, 4, 6]

// ====filter====
// Purpose: Filters elements based on a condition and returns a new array.

// Returns: A new array with only matching elements.

// Use case: When you want to keep only elements that match a condition.
const nums1 = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0); // [2, 4]

// ===feorEach=====
// Purpose: Executes a function on each array element.

// Returns: Nothing (undefined).

// Use case: When you want to perform side effects (e.g., logging, updating external state), not create a new array.
const nums3 = [1, 2, 3];
nums.forEach(n => console.log(n)); // logs 1, 2, 3




// ====differnce between div and fragment====
// ==div==
// an standered HTML element .that show in browser Tree
// renderd on DOM

// ==<></>===
// it is a just concept of react
// can not rendered on Dom
//used to wrap multiple sx element.


//concept of async/await
// If you make a blocking (synchronous) API call in JavaScript (which is rare, but possible using things like XMLHttpRequest with false), it will:
//  Freeze the UI
// The browser cannot do anything else (like render, scroll, or respond to user input).

// It feels like the browser "hangs" until the call finishes.

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", false); // ⚠️ false = synchronous
xhr.send(); // ⛔ UI freezes here until request finishes

console.log(xhr.responseText);
//  Never use synchronous XHR calls in the browser — they freeze the UI.

// Using fetch with async/await (or .then()), the UI stays smooth:
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}
// Non-blocking — UI remains responsive while waiting.
// she pura jinstake block kore raktesena just jotokhon promise resolve/reject na 
// hoi totokhon execution take pause kore rakhe kno kiso return kore na.



// **suppose i have a form and a write some validation use javascript and then if i close javascript in browser then the form validation is work or not?
// If you disable JavaScript in your browser, then JavaScript-based form validation will not work.
// Here's why:
// JavaScript runs on the client side (in the browser).
// If you use JavaScript to validate form fields (e.g., checking if an input is empty or email is valid), those scripts won’t execute if JavaScript is turned off

// What will still work?
// HTML5 built-in validation (like required, type="email", minlength, etc.) still works unless the browser disables it or it’s overridden.


//******what is code splitting ?
// Code Splitting is a technique in modern JavaScript applications (especially in frameworks like React, Next.js, etc.) 
// to split your code into smaller chunks so that they can be loaded on demand, rather than loading the entire app bundle at once.

// Why Code Splitting?
// Imagine your React app has 100 components. If you bundle all 100 components into one giant file (like bundle.js),
//  the browser has to download everything upfront, even if the user only visits the home page.
// With code splitting, the app only loads the code needed for the current page or feature, improving:
// ✅ Initial load time
// ✅ App performance
// ✅ User experience
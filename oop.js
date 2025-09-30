
// 1.what is class?
// a class is user-defined layout/blueprint  of an objects that that describes what a specifis kind of object look like.
// a class contains various types of object.a class description consists of two things 1.attributes/member variables 2. methods
// Classes do not use memory.
// example:
// Example 1:
// Class: Expensive Cars
// Objects: Mercedes, BMW, Toyota
// Data Member: Price, Speed, Wheels, Mileage, Model, Colour
// Member Function: brakes(), speed(), start(), stop(), etc

// 2.Class: Animal
// Object: Cat, Dog, Lion


// **javascript oop concepts:
// 1.What is Inheritance?
// Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows one
//  class (child class) to inherit the properties and methods of another class (parent class). 
//  This promotes code reusability and hierarchical relationships between classes.
example
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: "Buddy barks."

// What is Encapsulation?
// Encapsulation is an Object-Oriented Programming (OOP) concept that bundles data (variables) and methods (functions) 
// into a single unit (class) and restricts direct access to them. It helps in data protection, abstraction, and code modularity.

// Encapsulation means hiding internal details and only exposing necessary parts to the outside world —
//  like a protective wrapper around data and methods.
//  Encapsulated Object: ATM Machine
// The ATM exposes only specific functionalities like:
// Insert card,
// Enter PIN,
// Withdraw money,
// Check balance
// But how it actually works internally — like verifying PIN, accessing bank servers, updating account balance — is hidden from the user.

// 🔹 What is Polymorphism?
// Polymorphism is an Object-Oriented Programming (OOP) concept that allows a single interface to be used for different data types or objects.
// It enables objects from different classes to be treated as objects of a common base class.

// describe real world example:
// Polymorphism means “many forms” .You have a base class Animal and several derived classes like Dog, Cat, and Cow.
// Each animal can makeSound(), but the way they actually make a sound is different.
// **********types of Polymorphism:
// Compile Time Polymorphism
// Runtime Polymorphism

// Polymorphism in JavaScript can be implemented using:

// Method Overriding (Runtime Polymorphism)
// Method Overloading,operator overloading (Compile Time Polymorphism)

// 🔹 What is Abstraction?
// Abstraction is an Object-Oriented Programming (OOP) concept that hides implementation details and only exposes the essential features of an object.
// real world example:
// TV Remote: You press a button to change the channel — no idea how the circuit works.
// Mobile Phone: You use apps — unaware of how they interact with the OS and hardware.

// 🔹 It helps in reducing complexity and increasing code reusability.
// 🔹 It is commonly implemented using:

// Classes & Methods (Public & Private)
// JavaScript Closures
// Abstract Classes & Interfaces (In TypeScript)


//************* */ interface:
// 1.can only have abstract method.(already implemented method)
// 2.it support multiple interfaces.
// 3.an interface we can't create a object or constructor.
// 4.fully abstract
// 5.All properties and methods in an interface are implicitly public—you don't specify public, protected, or private.
// ex:
// interface Animal {
//   protected name: string; // ❌ Error: 'protected' modifier cannot appear on a type member
// }

// interface Animal {
//   name: string; // implicitly public
//   makeSound(): void;
// }

// example of interface==>
//   interface MyInterface {
//     method_1(): void;
//     method_2(): string;
//  }//all method are implemented or abstarct.


//  *************Abstract Classes
// 1.an abstract class can have both abstract and non-abstract methods.(iplemented or not-implemented)
// 2.it support  Only one abstract class.
// 3.an abstract class  we can create a object or constructor.
// 4.partial abstract.
// 5.an abstract class can have protected and public members.
// example of abstract class:
// abstract class MyClass {
//   abstract method_1() // a method with no implementation

//   method_2() { // a method with implementation
//      // do something
//   }
// }



// *************Different Types of Inheritance*******************

// 1.Single Inheritance:One class inherits from one base (parent) class.
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

// 2. Multilevel Inheritance:A class inherits from a derived class which in turn inherits from another class.
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

class Puppy extends Dog {
  weep() {
    console.log("Weeping...");
  }
}

// 3. Multiple Inheritance (❌ Not supported directly in TypeScript or JavaScript classes):
// In multiple inheritance, a class inherits from more than one parent class.


// 4.Hierarchical Inheritance:Multiple classes inherit from a single parent class.
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Meowing...");
  }
}

// 5. Hybrid Inheritance (Combination of two or more types):It’s a mix of single, multilevel, and hierarchical inheritance.


// 21. Is it always necessary to create objects from class?
// No. If the base class includes non-static methods, an object must be constructed.
//  But no objects need to be generated if the class includes static methods.
//  In this instance, you can use the class name to directly call those static methods.

// 22. What is the difference between a structure and a class in C++?
// The structure is also a user-defined datatype in C++ similar to the class with the following differences:

// The major difference between a structure and a class is that in a structure, the members are set to public by default 
// while in a class, members are private by default.
// The other difference is that we use struct for declaring structure and class for declaring a class in C++.


// 24. What are the various types of constructors in C++?
// The most common classification of constructors includes:

// Default Constructor
// class Car {
//     brand: string;

//     constructor() {
//         this.brand = "Toyota";
//     }
// }

// Non-Parameterized Constructor/default constructor
class Car {
  constructor() {
    this.brand = "Toyota";
    this.model = "Corolla";
  }

  display() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

// Create an object using the non-parameterized constructor
const myCar = new Car();
myCar.display(); // Output: Brand: Toyota, Model: Corolla

// Parameterized Constructor
class Car {
    constructor(brand) {
        this.brand = brand;
    }
}

// Copy Constructor
//static constructor and also privet constructor


// 25.What is a destructor?
// A destructor is a method that is automatically called when the object goes out of scope or destroyed.

// 26. Can we overload the constructor in a class?
// Yes We can overload the constructor in a class in Java,c++ but not directly in JavaScript
// . Constructor Overloading is done when we want constructor with different constructor with different parameter (Number and Type).

// 27. Can we overload the destructor in a class?
// No, a destructor cannot be overloaded in a class. There can only be one destructor present in a class.

// 28.what is a constructure?
// a constructure is a special type of method that has the same name as the class.
// and is used to initialize a objctes of the class.

//  ***Key Features of a Constructor:
// It has the same name as the class.
// It does not return any value (not even void in some languages like Java, C++).
// It runs automatically when you create a new object of the class.

example:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice, and I am 30 years old.


// memory lickage nie porasuna korte hbe ?
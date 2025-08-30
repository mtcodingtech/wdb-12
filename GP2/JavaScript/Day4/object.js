const user = {
  name: "John",
  age: 20,
  parent: {
    fatherName: "Jobs",
    motherName: "Rose",
  },
};

console.log(user.name, user.parent.fatherName)

delete user.age;
console.log(user);

// ********************************

// let user = new Object();
// user.name = "John";
// user.age = 20;
// console.log(user)

// *******************************

// const user = {
//     name: "MT"
// }


// user.name = "John";
// console.log(user)

// ******************************

let a = {};
let b = {};


console.log("a", a)
console.log("b", b)
console.log(a === b)

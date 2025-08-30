for(let i = 0; i < 10; i++){
    console.log(i, "hello")
}

// *************************************

const user = {
  name: "John",
  age: 20,
  city: "ygn",
  color: "white"
};

console.log(user["name"], user["age"], user["city"]);

for(let result in user){
    // console.log(result)
    // console.log(user["name"])
    // console.log(user["age"])
    // console.log(user["city"])
    console.log(user[result])
}

// *************************************

const fruits = ["apple", "orange", "mango", "pineapple", "kiwi"];
// console.log(fruit[0])
// console.log(fruit[1])
// console.log(fruit[2])
// console.log(fruit[3])

for(let fruit of fruits ){
    console.log(fruit)
}

// *************************************
// let username = "John";
// for(let str of username){
//     console.log(str)
// }


// ******************************
for(let i = 0; i < 10; i++){
    // if(i === 3) break;
    if(i === 3) continue;
    console.log(i)
}

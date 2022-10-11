//Types of function

// const a = function (b, c) {
//   return b + "hello" + c;
// };

// console.log(a(1, 2));

// function calage(birthyear) {
//     return birthyear;
// }

// const calage = birthyear => birthyear;

//*****literal arrays

// const friends = ["May", "Luka", "John", "Lily"];
// console.log(friends);

// const years = new Array(1234, 2389, 9089, 8293);
// console.log(years);

// console.log(friends[1]);

// console.log(friends.length);
// console.log(years.length);
// console.log(friends[friends.length - 1]);
// console.log(years[years.length - 1]);

// const name = "Feb";
// const feb = [name, 12 - 2, friends];

// console.log(feb.length);

//array methods

// const friends = ["Micheal", "Steven", "Peter"];

// //add elements
// const newlength = friends.push("Jay");
// console.log(newlength);

// friends.unshift("John");

// //remove element

// friends.pop(); //last

// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// console.log(friends.indexOf("Bod"));

// console.log(friends.includes("bob"));

//objects

/*
Arrays 
- for ordered data

Objects 
- for unordered and indexed data

*/

const mave = {
  firstName: "Mave",
  lastName: "Simson",
  age: 2037 - 1991,
  job: "Robotics",
};

// console.log(mave);
// console.log(mave.lastName);
// console.log(mave.lastName);

// const name = "Name";
// console.log(mave["first" + name]);
// console.log(mave["last" + name]);
// console.log(mave.'last' + name);

// const interest = 'interestedin';
// //bracket and dot notation
// //wrong
// console.log(friends.interest);

// //correct
// console.log(friends[interest]);

mave.map = "google map";

mave.phone = "Pixel 7 pro";

console.log(mave);

console.log(`${mave.firstName} has ${mave.phone}`);

const may = {
  firstName: "Mave",
  lastName: "Simson",
  age: 2037 - 1991,
  birthyear: 1991,
  job: "Robotics",
  friends: ["Charlie", "Rob", "Bob"],
  calcAge: (birthyear) => 2034 - birthyear,
  calcuAge: function () {
    return 2045 - this.birthyear;
  },
  // calcuAge: function (birthyear) {
  //   return 2045 - birthyear;
  // },
};

console.log(may.calcAge(1991));
console.log(may["calcAge"](1991));
// console.log(may.calcuAge(1992));

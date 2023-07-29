//objects

// const person: {
//   name: string;
//   age: number;
// } = {
// const person = {
//   name: "Dima",
//   age: 35,
// };

// console.log(person.name, person.age);

//arrays

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
  
// } = {
//   name: "Dima",
//   age: 35,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
    admin, read_onplay, author
};

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Dima",
  age: 35,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin");
// person.role[1] = "10";

// let favoriteActivities: string[];
// favoriteActivities = person.hobbies;

// console.log(person.hobbies);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toLocaleUpperCase());
// }

console.log(person);

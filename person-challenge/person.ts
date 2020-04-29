export class person {
  firstName: string;
  lastName: string;
  age: number;
  isAlive: boolean;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    isAlive: boolean = true
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAlive = isAlive;
  }
}

// function Person(firstName, lastName, age, isAlive) {
//   this.firstName = firstName;
//   this.lastName = lastN;e;
// }

export let humanoidA = new person("Marcelo", "Azevedo", 33);

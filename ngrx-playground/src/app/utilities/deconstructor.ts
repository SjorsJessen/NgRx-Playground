import {Person} from "../interfaces/person";

///This class is merely an example.
class Deconstructor{
  private readonly person: Person;

  constructor() {
    this.person = {
      name: 'Henry',
      age: 35,
      gender: 'male',
      address: {
        street: 'Lane 123',
        city: 'London',
        postalCode: '45AB'
      }
    };

    this.deconstruct();
  }

  //Deconstructing of Object example
  public deconstruct(): void {
    const { name, age, address: { city } } = this.person;
    console.log(`${name} is ${age} years old and lives in ${city}.`);
  }
}

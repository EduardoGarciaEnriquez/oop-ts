export abstract class Animal {
  constructor(public name: string) {}

  greeting(): string {
    return `Hello my name is ${this.name}`;
  }
}

export class Dog extends Animal {
  //name no tiene acceso y lo encapsulamos en super porque pertenece a la clase de la que hereda
  //no queremos definir una propiedad interna, solamente pasar el valor la constructor de la herencia
  constructor(name: string, public owner: string) {
    super(name);
  }

  bark(times: number):void {
    for (let i = 0; i < times; i++) {
      console.log("barf");
    }
  }
}

const chester = new Dog('chester', 'Edgar')
chester.greeting()
console.log(chester.owner)
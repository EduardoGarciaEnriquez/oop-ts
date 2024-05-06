export class Animal {
  //el acceso protected nos permite seguir utilizando la propiedad o el método dentro de las clases heredadas
  //pero no fuera de ninguna de las clases padre o hijos.
  constructor(protected name: string) {}

  greeting(): string {
    return `Hello my name is ${this.name}`;
  }

  protected move() {
    console.log("moving along");
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  bark(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log("barf");
    }
  }

  //podemos nombrar un método propio igual que uno heredado
  //pero para ejecutar el método heredados usamos el prefix super. al igual que en el constructor
  move() {
    console.log("moving as a dog");
    super.move();
  }
}

const chester = new Dog("chester", "Edgar");
// chester.name //error, no se puede acceder a la propiedad de acceso protected fuera de la clase padre o hijos
chester.move()

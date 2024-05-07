export class MyService {
  //instancia estática para saber si previamente ya se ha creado una instancia de esta clase
  static instance: MyService | null = null;

  //el construtctor privado evita que se pueda acceder a él desde fuera solo desde dentro de la clase
  private constructor(private _name: string = "") {}
  get name() {
    return this._name;
  }

  //en el método estático create vamos a recibir lo que deberíamos pasarle al constructor al crear la instancia
  static create(_name: string) {
    //si la instancia estática es null creo una instancia, sino vuelvo a retornar la misma instancia.
    if (!MyService.instance) {
      MyService.instance = new MyService(_name);
    }
    return MyService.instance;
  }
}

const myService = MyService.create("servicio 1");
const myService2 = MyService.create("servicio 2");
console.log(myService === myService2); // true: myService y myService2 son objetos de la misma instancia

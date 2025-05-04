//estilo moderno # indica que es privado
class Persona {
  #edad;
  #nombre;

  constructor(nombre, edad) {
    this.#edad = edad;
    this.#nombre = nombre;
  }
  
  getEdad() {
    return this.#edad;
  }

  presentarse() {
    console.log(`hola soy ${this.#nombre}, tengo ${this.#edad} años`);
  }
}

const edad = 30;
const nombre = 'Juan';
const juan = new Persona(nombre, edad);

juan.presentarse()

//Operador Rest, sacar determinada parte de un array u objeto
const numbers = [1, 2, 3, 4];
const [first, ...others] = numbers;
console.log(first); // 1
console.log(others); // [2, 3, 4]
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(rest); // { b: 2, c: 3 }


//uso tradicional de objetos
class Pasajero {
  constructor(nombre, dni) {
    this.nombre = nombre;
    this.dni = dni;
  }

  pedirTransporte(direccion) {
    console.log('enviando transporte a', direccion, 'para', this.nombre);
  }
}

class Conductor extends Pasajero {
  constructor(nombre, dni, licencia) {
    super(nombre, dni)
    this.licencia = licencia
  }

  mostrarIdentidad() {
    console.log(`Conductor ${this.nombre} licencia ${this.licencia}`);
  }
}

const pasajero1 = new Pasajero('Juan', 12345);
pasajero1.pedirTransporte('rivadavia 20000');

const conductor1 = new Conductor('Pedro', 12345, 9999);
conductor1.mostrarIdentidad();
conductor1.pedirTransporte('riv 15');
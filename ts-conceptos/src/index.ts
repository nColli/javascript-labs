//tipos basicos
let nombre: string = "Juan";
let edad: number = 30;
let estado: boolean = true;
let numeros: number[] = [1, 2, 3, 4, 5];
let tupla: [string, number] = ["nivel", 22];
let desconocido: any = "cualq tipo de dato";

let fechaAct: Date = new Date('2025-05-04');

let tiempoAhora: Date = new Date();

console.log('fecha act', fechaAct);

console.log('tiempo:', tiempoAhora);

//interfaces - definir los datos que tiene que tener un objeto y sus tipos
interface Usuario {
  id: number,
  nombre: string,
  correo: string
}

const nuevoUsuario: Usuario = {
  id: 1,
  nombre: 'Juan',
  correo: 'test@test.com'
};

console.log('nuevo usuario', nuevoUsuario);

//clases en TS - incluye private 
class Persona {
  private nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola, soy ${this.nombre}`);
  }

  darAnioNacimiento(): number {
    return new Date().getFullYear() - this.edad;
  }
}

const persona1 = new Persona('Juan', 30);
persona1.saludar();
console.log('posible año de nacimiento', persona1.darAnioNacimiento());

//generics: escribir funciones y clases que fnan con cualq tipo
function identidad<T>(valor: T) {
  return valor;
}

let numero = identidad<number>(100);
let palabra = identidad<string>('palabra');

//ejemplo GENERICS con clases
class Caja<T> { //T lo defino cuando creo la casa - es un tipo generico que debo respetar
  contenido: T;

  constructor(valor: T) {
    this.contenido = valor;
  }

  mostrarContenido(): void {
    console.log('contenido de la caja:', this.contenido);
  }
}

const cajaNumero = new Caja<number>(333);
cajaNumero.mostrarContenido()

interface ObjetoCaja {
  nombre: string,
  stock: number
}

const objeto: ObjetoCaja = {
  nombre: 'cajas',
  stock: 23
}

const cajaDeCajas = new Caja<ObjetoCaja>(objeto);
cajaDeCajas.mostrarContenido();

/*
Ejemplo:
Crear una función genérica llamada duplicarValor que:
Recibe un valor de cualquier tipo T.
Devuelve un array que contiene dos veces ese valor.
*/

//con <T> defino tipo generico T
//valor : T defino que el tipo de dato de valor es T
//: T[] defino que devuelve un array de Ts
function duplicarValor<T>(valor: T): T[] {
  return [valor, valor];
} 

const duplicado1 = duplicarValor(5);
console.log('duplicado1', duplicado1);

const duplicado2 = duplicarValor('test');
console.log('duplicado2', duplicado2);


//enums: definir conjuntos de constantes con nombre
enum Rol {
  Administrador = "ADMIN",
  Usuario = "USER",
  Invitado = "GUEST"
}

function asignarRol(rol: Rol) {
  if (rol === Rol.Administrador) {
    console.log('acceso total');
  }
}

let nuevoAdministrador = Rol.Administrador
console.log('nuevo admin', nuevoAdministrador);
asignarRol(nuevoAdministrador);

//funciones definiendo tipos para parametros y valor de retorno
function textoEjemplo(nombre: string): string {
  return `hola ${nombre}`;
}

function mostrarTextoEjemplo(): void {
  console.log(textoEjemplo('juan'));
}

mostrarTextoEjemplo()

//funciones con parametros opcionales
function registrarUsuario(nombre: string, email?: string) { //EMAIL OPCIONAL
  console.log('usuario', nombre);
  if (email) { console.log('email', email); }
}

registrarUsuario('juan', 'juan@test.com');
registrarUsuario('luis');

//tipos avanzados
let resultado: string | number; //resultado puede ser string O number
resultado = "Aprobado";
resultado = 10;

type ID = number | string; //tipo personalizado
let userId: ID = "abc-123";
let orderId: ID = 111;

interface Config {
  color?: string;
  size: number;
}
const config = { size: 10 }


//EJERCICIO BANCO
class CuentaBancaria {
  protected saldo: number;
  public titular: string;

  constructor(titular: string, saldo: number) {
    this.saldo = saldo;
    this.titular = titular;
  }

  private registrarTransaccion(saldo: number): void {
    this.saldo += saldo;
  }

  public consultarSaldo(): void {
    console.log(`saldo actual: ${this.saldo}`);
  }
}

class CuentaPremium extends CuentaBancaria {
  public bonificarSaldo(): void {
    this.saldo *= 1.05;
  }
}

const prem = new CuentaPremium("Juan", 20000);
prem.consultarSaldo();
prem.bonificarSaldo();
prem.consultarSaldo();
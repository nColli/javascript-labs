"use strict";
//tipos basicos
let nombre = "Juan";
let edad = 30;
let estado = true;
let numeros = [1, 2, 3, 4, 5];
let tupla = ["nivel", 22];
let desconocido = "cualq tipo de dato";
let fechaAct = new Date('2025-05-04');
let tiempoAhora = new Date();
console.log('fecha act', fechaAct);
console.log('tiempo:', tiempoAhora);
const nuevoUsuario = {
    id: 1,
    nombre: 'Juan',
    correo: 'test@test.com'
};
console.log('nuevo usuario', nuevoUsuario);
//clases en TS - incluye private 
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
    darAnioNacimiento() {
        return new Date().getFullYear() - this.edad;
    }
}
const persona1 = new Persona('Juan', 30);
persona1.saludar();
console.log('posible año de nacimiento', persona1.darAnioNacimiento());
//generics: escribir funciones y clases que fnan con cualq tipo
function identidad(valor) {
    return valor;
}
let numero = identidad(100);
let palabra = identidad('palabra');
//ejemplo GENERICS con clases
class Caja {
    constructor(valor) {
        this.contenido = valor;
    }
    mostrarContenido() {
        console.log('contenido de la caja:', this.contenido);
    }
}
const cajaNumero = new Caja(333);
cajaNumero.mostrarContenido();
const objeto = {
    nombre: 'cajas',
    stock: 23
};
const cajaDeCajas = new Caja(objeto);
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
function duplicarValor(valor) {
    return [valor, valor];
}
const duplicado1 = duplicarValor(5);
console.log('duplicado1', duplicado1);
const duplicado2 = duplicarValor('test');
console.log('duplicado2', duplicado2);
//enums: definir conjuntos de constantes con nombre
var Rol;
(function (Rol) {
    Rol["Administrador"] = "ADMIN";
    Rol["Usuario"] = "USER";
    Rol["Invitado"] = "GUEST";
})(Rol || (Rol = {}));
function asignarRol(rol) {
    if (rol === Rol.Administrador) {
        console.log('acceso total');
    }
}
let nuevoAdministrador = Rol.Administrador;
console.log('nuevo admin', nuevoAdministrador);
asignarRol(nuevoAdministrador);
//funciones definiendo tipos para parametros y valor de retorno
function textoEjemplo(nombre) {
    return `hola ${nombre}`;
}
function mostrarTextoEjemplo() {
    console.log(textoEjemplo('juan'));
}
mostrarTextoEjemplo();
//funciones con parametros opcionales
function registrarUsuario(nombre, email) {
    console.log('usuario', nombre);
    if (email) {
        console.log('email', email);
    }
}
registrarUsuario('juan', 'juan@test.com');
registrarUsuario('luis');
//tipos avanzados
let resultado; //resultado puede ser string O number
resultado = "Aprobado";
resultado = 10;
let userId = "abc-123";
let orderId = 111;
const config = { size: 10 };
//EJERCICIO BANCO
class CuentaBancaria {
    constructor(titular, saldo) {
        this.saldo = saldo;
        this.titular = titular;
    }
    registrarTransaccion(saldo) {
        this.saldo += saldo;
    }
    consultarSaldo() {
        console.log(`saldo actual: ${this.saldo}`);
    }
}
class CuentaPremium extends CuentaBancaria {
    bonificarSaldo() {
        this.saldo *= 1.05;
    }
}
const prem = new CuentaPremium("Juan", 20000);
prem.consultarSaldo();
prem.bonificarSaldo();
prem.consultarSaldo();

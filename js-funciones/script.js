//tipos de funciones

/*
  declaradas
    - ideal para fns reutilizadas a nivel global
    - se "eleva" - hoisting: se puede USAR ANTES DE SER DECLARADA
*/

function saludar(nombre) {
  return `hola ${nombre}`
}

console.log(saludar('juan'));

console.log('suma 1 + 2 =', sumar(1,2));

function sumar(a, b) {
  return a + b
}

/*
  expresiones
    - se guarda en una variable
    - NO se eleva
    - util para funciones internas o callbacks
    - permite funciones ANONIMAS
*/

const despedir = function(nombre) {
  return `chau ${nombre}`
}

console.log(despedir('juan'));

/*
  flecha - arrow
    - guarda en una variable
    - ES6
    - sintaxis corta y sin function
    - no tiene su propio this
    - ideal para fns o CALLBACKS
*/

const sumarFlecha = (a, b) => a + b;

console.log('suma flecha 3 + 9 =', sumarFlecha(3,9));

const saludarC = nombre => `hola ${nombre}`

console.log(saludarC('juan perez'));

/*
  anonimas
    - no tienen nombre
    - se usan como CALLBACKS o fn internas
    - practicas en usos TEMPORALES
    - pueden ser declarativas o arrow functions
*/

setTimeout(function() {
  console.log('hola luego de 1 seg');
}, 1000)

setTimeout(() => {
  console.log('hola dsp de 2 seg');
}, 2000)

/*
  fns en metodos de objs
    - def dentro del objeto
    - accede a this correctamente - en modo obj
    - UTIL para estructurar logica dentro de objetos
*/

const persona = {
  nombre: 'Juan',
  edad: 30,
  saludar() {
    console.log('hola', this.nombre);
  },
  subirEdad() {
    this.edad++
  },
  describir() {
    console.log('Datos de', this.nombre);
    console.log('edad', this.edad);
  }
}

persona.saludar()

persona.describir()
console.log('dsp de subir edad');
persona.subirEdad()
persona.describir()


/*
HOISTING (o elevamiento): comportamiento de JS, DECLARACIONES DE VARIABLES Y FUNCIONES se mueven al inicio del scope antes que el codigo se ejecute

SOLO SE ELEVAN LAS DECLARACIONES}
*/

console.log('declaracion', noDeclaracion);

sumarH(4, 5)

//sumarD(3, 1) NO FUNCIONA - NO SE ELEVA

function sumarH(a, b) {
  console.log(`PRUEBA HOISTING, suma ${a} + ${b} = ${a + b}`);
}

var noDeclaracion = "esto NO es una declaracion"

const sumarD = (a, b) => {
  sumarH(a, b)
}


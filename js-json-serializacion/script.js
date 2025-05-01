/*
  JSON: formato de intercambio de datos
*/

const producto = {
  nombre: 'botella de agua',
  id: '00001',
  stock: '104',
  precio: '$1200'
}

console.log('Tipo', typeof producto);

//serializacion: convertir objeto javascript a una cadena JSON
const productoString = JSON.stringify(producto)

console.log(productoString);

//deserialización: convertir cadena JSON a objeto JavaScript
let productoRepeat = {}
try { //Buena practica poner parse dentro de try-catch
  productoRepeat = JSON.parse(productoString)
} catch (error) {
  console.log('error');
}


console.log(productoRepeat);
console.log('nombre producto', productoRepeat.nombre);

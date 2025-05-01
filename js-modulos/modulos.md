# Módulos
Unidad de código reutilizable que encapsula fns, clases o variables rel en un solo o conj de archivos
PARA organizar código, mejorar mantenibilidad, evitar conflictos entre var y fns en proyectos grandes

## Modulos en JS
Archivo que exporta partes de su codigo para que puedan ser usados en otros archivos.

### Tipos de modulos 

#### Diferencias
**REQUIRE**: backend

**IMPORT**: frontend

#### ECMAScript (ES6) Module System
Admite importaciones estáticas y dinámicas, 
las dinámicas son utilizadas para cargar modulos en tiempo de ejecución, mejorando uso de memoria
y tiempos de arranque más cortos

##### Exportar
```js
// en math.js
export const add = (x, y) => x + y;
export const subtract = (x, y) => x - y;
```
##### Importar
En HTML:
```html
<script type="module" src="filename.js"> 
```
En JavaScript de forma estática:
```js
import { add } from './math.js';
console.log(add(2, 3));
```
En Javascript de forma dinámica
```js
async function loadModule() {
 const module = await import('./myModule.js');
 // Hacer algo con el módulo..
}
loadModule();
```

#### CommonJS Module System
Estandar para modularizar JS, diseñado para lado del SERVIDOR (Node.js)
Modulos se cargan sincronicamente, uno tras otro, puede generar cuellos de botella con grandes cant

##### Exportar
```js
const saludar = function(n) {
  //....
}

module.exports = saludar
```
##### Importar
```js
const saludar = require('./saludos.js')
loadModule();
```
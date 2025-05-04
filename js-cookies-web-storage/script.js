/*let userInfo = document.querySelector('div[data-user-id]');

// Access the data attribute
let userId = userInfo.getAttribute('data-user-id');
console.log(userId); // Output: 12345*/
const contador = document.getElementById("contador");
const input = document.getElementById("inputCronometro");
const textoError = document.getElementById("textoError");
const cronometros = document.getElementById("cronometros");

document.body.addEventListener('click', btnHandler);

function btnHandler(event) {
  if (event.target.tagName === 'BUTTON') {
    const accion = event.target.dataset.accion;

    console.log('accion', accion);
    
    //const funcionBoton = acciones[accion]; //acciones es la instancia de obj comando donde estan todas las funciones
  
    //funcionBoton()

    //acciones[accion]();

    if (acciones[accion]) {
      if (accion === 'iniciarCronometro' || accion === 'borrarCronometro') {
        acciones[accion](event);
      } else {
        acciones[accion]();
      }
    }
  }
}

class CommandHandler {
  sumar() {
    const numContador = Number(contador.innerHTML)
    contador.innerHTML = numContador + 1;
  }

  restar() {
    const numContador = Number(contador.innerHTML)
    contador.innerHTML = numContador - 1;
  }

  agregar() {
    const time = input.value;
    console.log('time', time);

    if (!Number(time)) {
      console.log('this', this);
      this.agregarTextoError();
      return
    } else {
      this.resetearTextoError();
    }

    const value = Number(time)

    const index = this.getIndexCronometro();
    
    localStorage.setItem(index, value); //key: 'time'    value: time
    this.crearCronometro(index, value);
  }

  getIndexCronometro() {
    let max = 0;
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      console.log('key', key);
      
      if (key > max) { max = key }
    }
    
    console.log('max', max);

    return Number(max) + 1;
  }

  agregarTextoError() {
    console.log('error text');
    textoError.style.color = 'red';
    textoError.innerHTML = 'Ingresa un numero';
  }

  resetearTextoError() {
    textoError.style.color = 'black';
    textoError.innerHTML = '';
  }

  crearCronometro(index, value) {
    const nuevoCronometro = document.createElement("p");
    nuevoCronometro.innerHTML = `cronometro ${index}, tiempo: ${value}`;
    const botonCronometroIniciar = document.createElement("button");
    botonCronometroIniciar.innerHTML = 'iniciar'
    botonCronometroIniciar.dataset.id = index;
    botonCronometroIniciar.dataset.accion = 'iniciarCronometro';

    const botonCronometroBorrar = document.createElement("button");
    botonCronometroBorrar.innerHTML = 'borrar'
    botonCronometroBorrar.dataset.id = index;
    botonCronometroBorrar.dataset.accion = 'borrarCronometro';

    cronometros.appendChild(nuevoCronometro);
    cronometros.appendChild(botonCronometroIniciar);
    cronometros.appendChild(botonCronometroBorrar);
  }

  cargarCronometros() {
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);

      const value = localStorage.getItem(key);
      
      console.log('cronometro', key, value);
      this.crearCronometro(key, value)
    }
  }

  iniciarCronometro(event) {
    //console.log('iniciar cronometro', event);
    
    const idCronometro = event.target.dataset.id;
    console.log('id del cronometro', idCronometro);
    
    const tiempoCronometro = localStorage.getItem(idCronometro);

    console.log('tiempo cronometro', tiempoCronometro);
    
    //fn iniciar cronometro con tal valor
    const elemCronometro = document.getElementById("cronometro");
    console.log('cron', elemCronometro);
    
    const cronometro = document.createElement("p");
    elemCronometro.appendChild(cronometro);

    let counter = tiempoCronometro;

    const intervalo = setInterval(() => {
      cronometro.innerHTML = counter;

      if (counter === 0) {
        clearInterval(intervalo);
        cronometro.remove();
      }

      counter = counter - 1;
    }, 1000)
  }

  borrarCronometro(event) {
    console.log('borrar cronometro');
    
    const index = event.target.dataset.id;

    console.log('index cronometro a borrar', index);
    
    localStorage.removeItem(index);
  }

  init(valor) {
		console.log('this', this);
	
		input.value = valor;

    //localStorage.clear();

    this.cargarCronometros();
	}

}

const acciones = new CommandHandler();
// IIFE, Immediately Invoked Function Expression
(function() {
  acciones.init("100");
})();
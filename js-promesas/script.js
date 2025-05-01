/*
  Promesa: obj que representa un valor que puede estar disponible ahora, en el futuro o nunca.

  ESTADOS DE UNA PROMESA:
    - Pending
    - Fullfilled
    - Rejected
*/

//promesa
const promesa = new Promise((resolve, reject) => {
  const todoBien = true

  if (todoBien) {
    setTimeout(() => {
      const datos = { nombre: "Juan", edad: 30 }
      resolve(datos)
    }, 2000) //simula llamada a api
  } else {
    reject("Error")
  }
});

function resolverPromesa() {
  return promesa
}

//consumir promesa
resolverPromesa()
  .then((data) => {
    console.log('datos', data);
  })
  .catch((error) => {
    console.error(error)
  })

//consumir promesa con async/await
//PARA EVITAR CALLBACK HELL - PROMESAS ANIDADAS CON .then()
async function mostrarDatos() {
  try {
    const datos = await resolverPromesa()
    console.log('datos con async/await', datos);
  } catch (error) {
    console.error('Error async/await', error);
  }
}

mostrarDatos()
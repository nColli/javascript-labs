//registrar eventos con funcion anonima
const boton = document.getElementById("idBoton");
const texto = document.getElementById("texto");

console.log('idBoton', boton);

boton.addEventListener("click", function(event) {
  console.log('evento', event.type);

  texto.style.backgroundColor = "yellow"
});

const resaltar = (event) => {
  console.log('resaltar');

  texto.style.backgroundColor = "yellow"
};

const sacarResaltado = (event) => {
  texto.style.backgroundColor = "white"
}

document.getElementById("texto").addEventListener("mouseover", resaltar);
document.getElementById("texto").addEventListener("mouseleave", sacarResaltado)
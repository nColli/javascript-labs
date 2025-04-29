

function clickButton() {
  console.log('botón clickeado');

  let newElement = document.createElement('div');
  newElement.textContent = 'Nuevo elemento creado en js';

  newElement.classList.add("javascriptElement");
  newElement.style.color = "black";

  let referenceElement = document.getElementById('referenceElement');
  referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

function highlightText() {
  let words = document.querySelectorAll("#text > b");

  words.forEach(w => {
    w.style.backgroundColor = "yellow";
  });
}

function reset() {
  let words = document.querySelectorAll("#text > b");

  for (let i = 0; i < words.length; i++) {
    words[i].style.backgroundColor = "white";
  }
}

function deleteElem() {
  //estructura $(selector).action()
  //eliminar elementos con clase javascriptElement
  $(".javascriptElement").remove();
}

function delText() {
  $("#text > b").css({backgroundColor: "black"})
}
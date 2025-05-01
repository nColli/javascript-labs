const a = 20 //constante no se puede modificar

try {
  //a = 30

  JSON.parse("{invalido: json}");
  console.log('variable a =', a);

} catch (error) {
  
  diagnosticarError(error)

} finally {
  console.log('valor final de a =', a);
}

function diagnosticarError(error) {
  if (error instanceof SyntaxError) {
    console.error("Error de sintaxis al parsear JSON:", error.message);
  } else if (error instanceof TypeError) {
    console.error("Error de tipo:", error.message);
  } else {
    console.error("Otro error inesperado:", error.message);
    console.error( error instanceof MiErrorPersonalizado );
  }    
}
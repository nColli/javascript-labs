let intervalo = null

function startClock() {
  console.log('clock started');

  let counter = 0;

  intervalo = setInterval(() => {
    counter++

    document.getElementById('clock').innerHTML = counter

  }, 1000)
}

function stopClock() {
  console.log('clock stopped');

  clearInterval(intervalo)
}




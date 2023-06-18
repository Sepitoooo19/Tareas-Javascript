// Secuencia de Fibonacci
function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  console.log("Secuencia de Fibonacci:");
  for (let i = 0; fibonacci(i) <= 1000; i++) {
    console.log(fibonacci(i));
  }
  
  // Números pares
  function numerosPares(n) {
    if (n === 0) {
      return;
    } else {
      if (n % 2 === 0) {
        console.log(n);
      }
      numerosPares(n - 1);
    }
  }
  
  console.log("Números pares:");
  numerosPares(1000);
  
  // Números impares
  function numerosImpares(n) {
    if (n === 0) {
      return;
    } else {
      if (n % 2 !== 0) {
        console.log(n);
      }
      numerosImpares(n - 1);
    }
  }
  
  console.log("Números impares:");
  numerosImpares(1000);




// Definimos el arreglo de notas con const (no va a cambiar el arreglo)
const notas = [6, 8, 9, 2, 5, 10];


//Definimos una funcion la cual recibe el arreglo como parametro de entrada

function obtenerSumaNotas(notas) {
  let suma = 0;                                     //Declaramos una variable llamada suma que irá cambiando en cada iteracion del For
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];   // se suma a la variable suma el elemento que se encuentra en la posicion i del arreglo
  }
  return suma;  //retorna la variable suma con los elementos ya sumados
}

//Definimos una funcion que recibe al arreglo como parametro de entrada

function obtenerPromedioNotas(notas) {

    //Cabe destacar que se puede usar el mismo nombre de variable ya que, al estar dentro de la funcion, son variables locales, entonces no afecta el llamado en otra funcion
    const suma = obtenerSumaNotas(notas);   //Se declara una variable  llamada suma que no va a cambiar, se usa para guardar el retorno de la funcion anterior
    const promedio = suma / notas.length;   // se divide la variable suma con el largo del arreglo
    return promedio;       //se retorna el promedio
  }
  

// se muestran por pantalla ambos valores
const sumaNotas = obtenerSumaNotas(notas);
console.log("Suma de notas:", sumaNotas);

const promedioNotas = obtenerPromedioNotas(notas);
console.log("Promedio de notas:", promedioNotas);
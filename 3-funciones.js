// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
function despedir() {
    console.log("Adios")
}
despedir()

// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
function multiplicarPorDos(numero){
    let doble = numero * 2
    return doble
}
console.log( multiplicarPorDos(2))


// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
function esMayorDeEdad(numero){
    return numero >= 18
}
console.log( esMayorDeEdad(18))


// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
function multiplicar(num1, num2){
    const resultado = num1 * num2
    return resultado;
}
console.log(multiplicar(2,4))

// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
function saludarPersonalizado(nombre, apellido){
    console.log("Hola", nombre,  apellido)
}
saludarPersonalizado('Rolando', 'Alvarez')

// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
function calcularPotencia(base, exponente){
    resultado = base ** exponente
    return resultado
}
console.log(calcularPotencia(4,2))

// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
function restar(num1, num2){
    resta = num1 - num2
    return resta
}
console.log(restar(10,5))
// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
function dividir(num1, num2){
    division = num1 / num2
    return division
}
console.log(dividir(10,5))

// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `multiplicarDOS`.
multiplicarDOS = function(num1, num2){
    return num1 * num2
}
console.log(multiplicarDOS(2,2))

// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
saludar = function(nombre){
    console.log("Hola", nombre)
}
saludar('Rolando')

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
let esPar = function(numero){
    return numero % 2 === 0;
 }
 console.log(esPar(6))

// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
multiplicarFlecha = (a, b) =>{
    return a * b
}
console.log(multiplicarFlecha(2,2))

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
saludarFlecha = (nombre) =>{
    console.log("Hola", nombre)
}
saludarFlecha()
// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = radio => {

    let A = 3.14 * radio ** 2
    return A
};
console.log(calcularArea(2))

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    if (n <= 0) {
        return 0; 
    } else {
        return n + suma(n - 1); 
    }
}
console.log(suma(4))
// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
    if (n <= 0) {
        return 0; 
    } else if (n === 1) {
        return 1; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); 
    }
}
console.log(fibonacci(4))
// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    if (  n <= 1) { 
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(4))
// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    if (exponente === 0) {
            return 1;
        } else {
            return base * potencia(base, exponente - 1); 
        }
    }

const result = potencia(2, 3)
console.log(result)   

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};

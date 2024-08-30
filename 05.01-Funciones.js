function miFuncion(a,b){
    return a + b;
}

//Se puede utilizar funciones en variables
let resultado = miFuncion(2,3);
console.log(resultado);

//Las funciones pueden ser asignadas a una variable para
//Utilizarse mas facil 

//Funcion tipo Expresion
let sumar = function(a,b){return a + b};

resultado = sumar(1,3);

console.log(resultado);

//Una funcion que se llama asi sola y solo es utiizada una vez
(function(a, b){
    console.log('Ejecutando la funcion: ' + (a + b));
})(3,6);



const lista = [1,2,3,4,5,6,7,8,9,10]

const multiplicados = lista.map(n => n*2);

console.log(multiplicados)

const multiplicar = (a, b) => {
    return a * b    
}

console.log(multiplicar(4,3))

resultado = multiplicar(6)

console.log(resultado)
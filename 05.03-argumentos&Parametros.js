let sumar = function(a= 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);

    return a + b + arguments[2]
}

resultado = sumar(1,2,3)
console.log(resultado)
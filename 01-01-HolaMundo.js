function numeroPar(numero){
    if(numero % 2 == 0){
        console.log("Este numero es par")
    }else{
        console.log("Este numero es impar")
    }
}
numeroPar(10);

function and (valor, valorMax, valorMin){
    if (valor >= valorMin && valor<=valorMax ){

        console.log("Esta dentro del rango")
    }else{
        console.log("No esta dentro del Rango")
    }
}

and(8, 10, 20)

function numeroMayor(numero1, numero2){
    if (numero1 >= numero2){
        console.log("El numero mayor es: " + numero1)
    }else{
        console.log("El numero mayor es: " + numero2)
    }
}
numeroMayor(988, 80)

let resultado = (7>2) ? "Verdadero" : "Falsooo"

console.log(resultado)
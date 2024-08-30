function estadoDelDia(hora){
    if (hora > 6 && hora <=11){
        console.log('BUENOS DIAS CRIATURITAS DEL SENIOR')
    }
    else if(hora >= 12 && hora <=18){
        console.log('BUENAS TARDESSS')
    }
    else if(hora >= 19 && hora <= 24){
        console.log('BUENAS NOCHES MI REY')
    }
    else if(hora >=0 && hora<= 6){
        console.log('DEJE DORMIR SAPO')
    }
    else{
        console.log('INGRESE UNA HORA CORRECTA')
    }
}

estadoDelDia(12)

let contador = 0;

do{
    console.log(contador);
    contador++
}while(contador<3);

console.log('Fin del ciclo  ')




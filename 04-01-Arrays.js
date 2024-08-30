
function soloNumeroPares(arrayy, arrayNumeroPares){
    for(i = 0; i< arrayy.length; i++){
        if(arrayy[i] % 2 == 0){
            arrayNumeroPares.push(arrayy[i])
        }
    }
    return arrayNumeroPares;
}

let array = [1,2,3,4,5,6,7,8,9,10]
let numerosPares = [];
soloNumeroPares(array,numerosPares);
console.log(numerosPares)


const numbers = [1,2,3,4,5];

numbers.forEach(number => {
    console.log(number)
})

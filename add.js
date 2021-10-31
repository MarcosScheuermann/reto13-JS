// Challenge 13 - par o impar

let dato = Number (prompt("Ingrese su numero"));

if (!isNaN (dato)) {
    
if (dato%2 == 0) {
    console.log("el numero es par");
}else{
    console.log("el numero es impar");
}


let resultado = (dato%2 == 0)? "par" : "impar";

console.log(`El resultado es ${resultado}...`);

} else console.log("INGRESE SOLO NUMEROS");

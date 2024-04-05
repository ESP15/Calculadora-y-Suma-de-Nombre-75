/*Calculadora, que solo suma*/

let numero1 = (Math.floor(Math.random()*10))
console.log (numero1)
let numero2 = (Math.floor(Math.random()*10))
console.log (numero2)
let numero3 = (Math.floor(Math.random()*10))
console.log (numero3)

function suma(numero1, numero2, numero3){
    let resultado = numero1 + numero2 + numero3;
    return (resultado);
};
console.log (suma(numero1, numero2, numero3))

/*Concatena el nombre y el apellido*/

function nombrecompleto(nombre, apellido, apellido2){
    return nombre + " " + apellido + " " + apellido2;
}
console.log (nombrecompleto("Eric", "Sanz", "Peiri"))
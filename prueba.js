function holaMundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}
var nombre = "Vicent Catala";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//Variables y tipos
var nombretwo = "Vicent Catala";
var edad = 22;
var programador = true;
var lengs = ["PHP", "JavaScript", "CSS"];
etiqueta.innerHTML = nombretwo + " - " + edad;
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    b = 1;
    console.log("Dentro del IF: " + a_1 + " - " + b);
}
console.log("Fuera del IF: " + a + " - " + b);
//Funciones y tipado
function devuelveNumero(num) {
    return "Número devuelto: " + num;
}
function devuelveString(texto) {
    if (texto === "hola") {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("hola"));

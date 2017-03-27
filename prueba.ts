function holaMundo(nombre) {
	return "Hola Mundo!! Soy " + nombre;
}

var nombre = "Vicent Catala";
var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement> document.getElementById("container");
etiqueta.innerHTML = resultado;


//Variables y tipos
var nombretwo:string = "Vicent Catala";
var edad:number = 22;
var programador:boolean = true;
var lengs: Array<string> = ["PHP","JavaScript","CSS"];

etiqueta.innerHTML = nombretwo+ " - "+edad;


var a = 7;
var b = 12;

if (a === 7) {
	let a = 4;
	b = 1;

	console.log("Dentro del IF: " + a + " - " + b);
}

console.log("Fuera del IF: " + a + " - " + b);


//Funciones y tipado

function devuelveNumero(num:number):string {
	return "Número devuelto: "+num;
}
 
 function devuelveString(texto:string):boolean {
 	if(texto === "hola") {
 		var num = true;
 	} else {
 		var num = false;
 	}

 	return num;
 }

alert(devuelveNumero(34));
alert(devuelveString("hola"));

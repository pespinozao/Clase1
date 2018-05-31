
var rango;
var anioNac = 2017;

function edad(anioNac){
	return 2018 - anioNac;	
}

if(edad(anioNac) <= 17) {
	rango = "Es menor de edad";
}else{
	rango = "Es mayor de edad";
}

console.log(rango);
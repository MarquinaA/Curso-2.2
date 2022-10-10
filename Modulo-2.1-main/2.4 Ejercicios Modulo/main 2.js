//Ejercico 5
let a =7,
  b = 6,
  c = 5;

if (a > b && a > c ) {
	console.log("El mayor es el número a.");
}else{
	if (b > c && b > a ) {
		console.log("El mayor es el número b.");
	}else{
		if (c > b && c > b ) {
			console.log("El mayor es el número c.");
		}
	}
}
//Ejercicio 8
for(let i=1; i<=50 ; i++){
	if(i!=50)
		console.log(i+", ");
	else
		console.log(i);
}

//Ejercicio 9: 
for(let i=0; i<=10; i++){
	console.log(i+" x 5 = "+(i*5));
}

//Ejercicio 10
let valor1 = prompt("Dame el valor 1",0);
for(let i=1; i<=10; i++){
	console.log(valor1 + " -Mostrado por pantalla " + i +" veces." );
}

//Ejercicio 11
let valor2 = prompt("Dame el valor 1",0);

for(let i=valor2; i>=0; i--){
	if(i!==0){
		console.log(i + ", ");
	}
	else{
		console.log(i);
	}
}

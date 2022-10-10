console.log(4.3>=4)
console.log()
//Ejericios 2
let a = 2,
    b = 3,
    c = 5,
    d = 7;
let suma1 = a + b;
let suma2 = c + d;

if (suma1 > suma2) {
  console.log("La suma de a+b es mayor que la suma de c+d");
}
else{
  console.log("La suma de c+d es mayor que la suma de a+b");
}

//Ejercicio 3
let angulo1 = 90,
  angulo2 = 45,
  angulo3 = 45;

let angulos = (angulo1+angulo2+angulo3);

if (angulos===180) {
  console.log("La suma de los angulos es 180º es un triangulo válido");
}
else{
  console.log("La suma de los angulos NO es 180º por lo tanto NO es un triangulo válido");
}

//Ejercicio 4: 
let e = 45;
if(e%2===0)
	console.log("El número " + e + " es par." );
else
	console.log("El número " + e + " es impar." );
	

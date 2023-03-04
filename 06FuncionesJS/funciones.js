/*
Las bariables que se ocupan dentro de javaScript son 3:

var -> que actualmente esta en sustitución.
let -> Variable "protegida" ya que solo funciona dentro de una función o metodo declarado en un fragmento de código.
const -> la cual es el valor constante en todo el documento y no puede ccambiar su estado.
*/
let x ="x";
if(true)
{
    //declaramos una constante
    const x= "y";
    console.log(x); 

}
/*
Diferencia entre una función y una función flecha
//por ejemplo vamos a sumar dos números
*/
//la comilla al reves se ocupa para cuando queremos modificar el comportamiento de un html o incrustar en JS código de html
function sumaFuncionNormal(n1,n2)
{
 return n1+n2;
}
console.log(`la suma de (3, 4): ${sumaFuncionNormal(3,4)}`);
/* Una función flecha tiene como estructura:
"cadena" -> id, clase, name, atributo
*/

const sumaFuncionFlecha=(n1,n2) => n1+n2;
console.log(`la suma de (5, 6): ${sumaFuncionFlecha(5,6)}`);

//ARRAY
const razasDePerros=[
    "Gran Danes",
    "Pastor Aleman",
    "Chihuahua",
    "Pitbull",
    "Dalmata",
    "San Bernardo"
];
//con un for normal
for(let indice =0; indice < razasDePerros.length; indice++)
{
    console.log(razasDePerros[indice]);
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
/*
FOR OF

for(const raza of razasDePerros){
    console.log(raza);
}
*/
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
/*
for(const indice in razasDePerros)
{
    console.log(razasDePerros[indice]);
}
*/
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//FOR EACH: es poder iterar sobre elementos del arreglo que no devuelven nada
razasDePerros.forEach(raza, indice, arregloOriginal=>
{
   console.log(raza);
})
//metodo find
//metodo indexof
//metodo map
//metodo sort
//---ESTUDIAR---
function validarn(e)
{
    var teclado=(document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron =/[0-9\d.]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
   
}
function validarL(e) {
    var teclado2 = event.keyCode;
    if ((teclado2  > 64 && teclado2  < 91) || (teclado2  > 96 && teclado2  < 123) || teclado2  == 8  )
      return true;
    else return false;
  }
//Primer Problema:
function interes()
{
    var letras=/\D\./;
    var valor= document.getElementById("cantidad").value;
    if(letras.test(valor)){
        alert("Ingresa números, no se admiten letras");
        return false;
    }
    else{
      //var letras=/\D\.[0-9]/;
        var resul= parseFloat(valor);
    if(( resul>0)&&(resul<=1000000000000000)) {
        var interes= resul* 0.082;
        var total = resul + interes;
        document.getElementById("cantidadi").value= "$"+ total; 
        var total2 = total*36;
        document.getElementById("cantidadt").value= "$"+ total2;
}
else{
    alert("Favor de ingresar una cantidad válida");
    formulario.cantidad.focus();}
}
}
function borrar()
{
document.getElementById("cantidad").value="";
document.getElementById("cantidadi").value="";
document.getElementById("cantidadt").value="";
}
//-----------------------------------------------//
//Segundo Problema:
function interes2()
{
    var letras=/\D\./;
    var valor= document.getElementById("cantidadp2").value;
    var valor1= document.getElementById("venta1").value;
    var valor2= document.getElementById("venta2").value;
    var valor3= document.getElementById("venta3").value;
    var valor4= document.getElementById("venta4").value;
    var valor5= document.getElementById("venta5").value;

    if(letras.test(valor)|| letras.test(valor1)||letras.test(valor2)|| letras.test(valor3)||letras.test(valor4)|| letras.test(valor5)){
        alert("Ingresa números, no se admiten letras");
        formulario2.cantidadp2.focus();
        return false;
    }
    else{
        var resul= parseInt(valor);
        var resul1= parseInt(valor1);
        var resul2= parseInt(valor2);
        var resul3= parseInt(valor3);
        var resul4= parseInt(valor4);
        var resul5= parseInt(valor5);
    if(( resul>0)&&(resul<=1000000000000000000)&&( resul1>0)&&(resul1<=1000000000000000000)&&( resul2>0)&&(resul2<=1000000000000000000)
    &&( resul3>0)&&(resul3<=1000000000000000000)&&( resul4>0)&&(resul4<=1000000000000000000)&&( resul5>0)&&(resul5<=1000000000000000000)) 
    {
        var sumaV1=resul1 * 0.35;
        var sumaV2=resul2 * 0.35;
        var sumaV3=resul3 * 0.35;
        var sumaV4=resul4 * 0.35;
        var sumaV5=resul5 * 0.35;
        var totalV= sumaV1+sumaV2+sumaV3+sumaV4+sumaV5;
        var descuento=totalV*0.12;
        var totalp2 = resul+totalV-descuento;
        document.getElementById("cantidadt2").value= "$"+ totalp2;
}
else{
    alert("Llena todos los campos con una cantidad válida.");
    formulario.cantidad.focus();}
}
}
function borrar2()
{
document.getElementById("cantidadp2").value="";
document.getElementById("cantidadt2").value="";
document.getElementById("venta1").value="";
document.getElementById("venta2").value="";
document.getElementById("venta3").value="";
document.getElementById("venta4").value="";
document.getElementById("venta5").value="";
}
//-----------------------------------------------//
//Tercer Problema:
function borrar3()
{
document.getElementById("Nproduct").value="";
document.getElementById("Mproduct").value="";
document.getElementById("Tproduct").value="";
document.getElementById("Precioss").value="";
document.getElementById("total").value="";
}
function validarp3()
{
    var nombre= document.getElementById("Nproduct").value;
    var marca= document.getElementById("Mproduct").value;
    var tipo= document.getElementById("Tproduct").value;
    var precio= document.getElementById("Precioss").value;
    var Evitarletras= /\D\./;
    var Enumeros = /\d/;
  if ( Evitarletras.test(precio) || Enumeros.test(nombre) ||  Enumeros.test(marca) || Enumeros.test(tipo) )
   {
    alert("Llena todos los campos con una cantidad válida (Checa que no haya letras o numeros donde no se pidan).");
    formulario3.Nproduct.focus();
        return false;
  } else {
    nombre = String(nombre);
    marca = String(marca);
    tipo = String(tipo);
    precio= parseInt(precio);
    if ((precio> 0 && precio <=1000000000000000000000000) && (nombre != "") && (marca != "")&&(tipo != ""))
     {
        if ( nombre.length < 50 && marca.length < 50 && tipo.length < 50) 
        {
          var precioF;
          var descuento;
          switch (tipo) {
            case "Papa":
              descuento = precio * 0.02;
              precioF = precio - descuento;
              document.getElementById("total").value="$"+ precioF; 
              alert("El producto tiene un descuento de 2%");
              break;
            case "Pastelito":
              descuento = precio * 0.1;
              precioF = precio - descuento;
              document.getElementById("total").value="$"+ precioF; 
              alert("El producto tiene un descuento de 10%");
              break;
            case "Lacteo":
              descuento = precio* 0.075;
              precioF = precio - descuento;
              document.getElementById("total").value="$"+ precioF; 
              alert("El producto tiene un descuento de 7.5%");
              break;
            default:
              precioF = precio;
              document.getElementById("total").value="$"+ precioF; 
          } 
        } else {
          alert("Ingresa informacion válida");
          return false;
        }
      } else {
        alert("No dejes en blanco los campos.");
        return false;
      }
    } 
}
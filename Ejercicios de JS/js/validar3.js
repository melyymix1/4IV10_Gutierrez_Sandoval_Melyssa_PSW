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
function borrar7()
 {
    document.getElementById("Numero1").value="";
    document.getElementById("Numero2").value="";
    document.getElementById("operacion").value="";
}
function validar7()
 {
    var letras=/\D/;
    var primernumero= document.getElementById("Numero1").value;
    var segundonumero= document.getElementById("Numero2").value;
  
    if(letras.test(primernumero)|| letras.test(segundonumero)){
        alert("Ingresa números enteros, no negativos, no letras ni decimales");
        return false;
      }else{
          var resul1= parseInt(primernumero);
          var resul2= parseInt(segundonumero);
if((resul1>0)&&(resul1<=1000)&&(resul2>0)&&(resul2<=1000))
{
  if(resul1==resul2) 
  {
    var operacion= resul1*resul2;
    alert("Como son iguales se van a multiplicar");
    document.getElementById("operacion").value= operacion;
  }else{
    if(resul1>resul2)
    {
       var operacion= Math.pow(resul1, resul2);
       alert("Como el primero es mayor que el segundo, se hace una potencia");
        document.getElementById("operacion").value= operacion;
    }else{
        if(resul1<resul2)
        {
            var operacion= resul2/resul1;
            alert("Como el segundo es mayor que el primero, se dividen");
            document.getElementById("operacion").value= operacion;
        }
    }
  }
}
else{
    alert("Llena todos los campos, checa que no haya un número mayor a 1000 o igual a 0");}}
}
function borrar8()
{
    document.getElementById("1Numero").value="";
    document.getElementById("2Numero").value="";
    document.getElementById("3Numero").value="";
    document.getElementById("resultado").value="";

}
function validar8()
{
    
    var letras=/\D\./;
    var primernumero= document.getElementById("1Numero").value;
    var segundonumero= document.getElementById("2Numero").value;
    var tercernumero= document.getElementById("3Numero").value;
  
    if(letras.test(primernumero)|| letras.test(segundonumero)||letras.test(tercernumero)){
        alert("Ingresa números, no se admiten letras");
        return false;
      }else{
          var resul1= parseFloat(primernumero);
          var resul2= parseFloat(segundonumero);
          var resul3= parseFloat(tercernumero);
if((resul1>=0)&&(resul1<=1000)&&(resul2>=0)&&(resul2<=1000)&&(resul3>=0)&&(resul3<=1000))
{
    if (resul1 > resul2) {
		var mayor = resul1;
	}else{
		mayor = resul2;
	}
	if (mayor > resul3) {
		mayor = mayor;
	}else{
		mayor = resul3;
	}
	document.getElementById("resultado").value=mayor;
}
else{
    alert("Llena todos los campos, checa que no haya un número mayor a 1000");}}
}
function borrar9()
{
    document.getElementById("Dinero").value="";
    document.getElementById("Horas").value="";
    document.getElementById("total").value="";
}
function validar9()
{
    
    var letras=/\D\./;
    var primernumero= document.getElementById("Dinero").value;
    var segundonumero= document.getElementById("Horas").value;

if(letras.test(primernumero)|| letras.test(segundonumero)){
        alert("Ingresa números, no se admiten letras");
        return false;
      }else{
          var dinero= parseFloat(primernumero);
          var horas= parseFloat(segundonumero);
if((dinero>=0)&&(dinero<=168)&&(horas>=0)&&(horas<=168))
{
   if(horas==40||horas<40)
   {
    var resul= horas*dinero;
    alert("Al no haber horas extra, se pagan normal");
    document.getElementById("total").value="$"+ resul;
   }
   if((horas>40)&&(horas<=48))
   {
    resta=horas-40;
    multi=resta*(2*dinero);
    resul=40*dinero + multi;
    alert("Al estar en el rango de 40-48 se pagan las horas extra al doble");
    document.getElementById("total").value="$"+ resul;
   }
   if(horas>=49)
   {
    resta=horas-48;
    multi=8*(2*dinero);
    multi2=resta*(3*dinero);
    resul=(multi)+(40*dinero)+multi2;
    alert("Al ser mas de 48 horas trabajadas se pagan 8 horas al doble y el resto al triple");
    document.getElementById("total").value="$"+ resul;
   }
}
else{
    alert("Llena todos los campos, checa que no haya un número mayor a 168 en el campo horas");}}
}
function borrar10()
{
    document.getElementById("Salario").value="";
    document.getElementById("anos").value="";
    document.getElementById("resultado1").value="";
}
function validar10()
{
    
    var letras=/\D\./;
    var primernumero= document.getElementById("Salario").value;
    var segundonumero= document.getElementById("anos").value;

if(letras.test(primernumero)|| letras.test(segundonumero)){
        alert("Ingresa números, no se admiten letras");
        return false;
      }else{
          var salario= parseFloat(primernumero);
          var anos= parseFloat(segundonumero);
if((salario>=0)&&(salario<=100000000000000000)&&(anos>=0)&&(anos<=100))
{
   if(anos<1)
   {
    var resul=salario*0.05;
    document.getElementById("resultado1").value="$"+ resul;
   }
   if((anos>=1)&&(anos<2))
   {
    resul=salario*0.07;
    document.getElementById("resultado1").value="$"+ resul;
   }
   if((anos>=2)&&(anos<5))
   {
    resul=salario*0.10;
    document.getElementById("resultado1").value="$"+ resul;
   }
   if((anos>=5)&&(anos<10))
   {
    resul=salario*0.15;
    document.getElementById("resultado1").value="$"+ resul;
   }
   if(anos>=10)
   {
    resul=salario*0.20;
    document.getElementById("resultado1").value="$"+ resul;
   }
 
}
else{
    alert("Llena todos los campos, checa que no haya un número mayor a 100 en el años");}}
}
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
//-----------------------------------------------//
//Cuarto Problema:
 function borrar4()
 {
document.getElementById("1Parcial").value="";
document.getElementById("2Parcial").value="";
document.getElementById("3Parcial").value="";
document.getElementById("Efinal").value="";
document.getElementById("Tfinal").value="";
document.getElementById("Calificacion").value="";
}
 function validar4()
 {
  var letras=/\D\./;
  var cal1= document.getElementById("1Parcial").value;
  var cal2= document.getElementById("2Parcial").value;
  var cal3= document.getElementById("3Parcial").value;
  var calE= document.getElementById("Efinal").value;
  var calT= document.getElementById("Tfinal").value;

  if(letras.test(cal1)|| letras.test(cal2)||letras.test(cal3)|| letras.test(calE)||letras.test(calT)){
      alert("Ingresa números, no se admiten letras");
      return false;
    }else{
        var resul1= parseFloat(cal1);
        var resul2= parseFloat(cal2);
        var resul3= parseFloat(cal3);
        var resul4= parseFloat(calE);
        var resul5= parseFloat(calT);
if(( resul1>=0)&&(resul1<=10)&&(resul2>=0)&&(resul2<=10)&&( resul3>=0)&&(resul3<=10)&&( resul4>=0)&&(resul4<=10)&&( resul5>=0)&&(resul5<=10)) 
{
  var promedio = (resul1+resul2+resul3)/3;
  var porcentajePromedio = promedio*0.55;
  var porcExamen= resul4*0.30;
  var porcTrabajo= resul5*0.15;
  var calificionFinal= porcentajePromedio+porcExamen+porcTrabajo;
  document.getElementById("Calificacion").value= calificionFinal;
}
else{
    alert("Llena todos los campos con una calificación válida (0-10).");
}
}
}
//-----------------------------------------------//
//Quinto Problema:
function borrar5() 
{
  document.getElementById("hombres").value="";
document.getElementById("porcentajeH").value="";
document.getElementById("mujeres").value="";
document.getElementById("porcentajeM").value="";
document.getElementById("porcentajeF").value="";
document.getElementById("total").value="";
}
function validar5()
{
  var letras=/\D/;
  var hombres= document.getElementById("hombres").value;
  var mujeres= document.getElementById("mujeres").value;

  if(letras.test(hombres)|| letras.test(mujeres)){
      alert("Ingresa números enteros, no se admiten letras ni decimales");
      return false;
    }else{
        var resul1= parseInt(hombres);
        var resul2= parseInt(mujeres);
if((resul1>=0)&&(resul1<=100)&&(resul2>=0)&&(resul2<=100)) 
{
  var suma = resul1+resul2;
  var hombres= (resul1/suma)*100;
  var mujeres= (resul2/suma)*100;
  document.getElementById("total").value= suma;
  document.getElementById("porcentajeF").value= "100%";
  document.getElementById("porcentajeH").value= hombres+"%";
  document.getElementById("porcentajeM").value= mujeres+"%";
}
else{
    alert("Llena todos los campos o checa que no haya mas de 100 alumnos.");
}
}
}
//-----------------------------------------------//
//Sexto Problema:
function borrar6()
{
document.getElementById("miento").value="";
document.getElementById("Edad").value="";
}
function validar6()
{
  var fecha = new Date(formulario6.fecha.value);
    var hoy = new Date();
    var mes = fecha.getMonth()+1;
    var dia = fecha.getDate();

    if(fecha > hoy){
        alert("Fecha inválida");
        formulario.fecha.focus();
        return false;
    }

    if((dia<1) || (dia>31)){
        alert("Favor de ingresar un día válido, no exiten meses con 0 o 32 días...")
        formulario.fecha.focus();
        return false;
    }

    if((mes == 2) && (dia > 29)){
        alert("Febrero solo cuenta con 28 días (29 días si es bisiseto), checa que la fecha este bien")
        formulario.fecha.focus();
        return false;
    }
    if((mes == 4) && (dia > 30)){
        alert("Abril solo cuenta con 30 días")
        formulario.fecha.focus();
        return false;
    }
    if((mes == 6) && (dia > 30)){
        alert("Junio solo cuenta con 30 días")
        formulario.fecha.focus();
        return false;
    }
    if((mes == 9) && (dia > 30)){
        alert("Septiembre solo cuenta con 30 días")
        formulario.fecha.focus();
        return false;
    }
    if((mes == 11) && (dia > 30)){
        alert("Noviembre solo cuenta con 30 días")
        formulario.fecha.focus();
        return false;
    }

    var fechaInicio = hoy.getTime();
    var fechaFin = fecha.getTime();
    let dife = fechaInicio - fechaFin;
    var difeanios = dife / (1000*60*60*24*365);
    difeanios= Math.trunc(difeanios);

    document.getElementById("Edad").value = (difeanios);
}
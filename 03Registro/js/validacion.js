/*
JavaScript es un lenguaje que posee un paradigma
orientado a objetos, a funciones y a eventos  
por tal motivo presenta una particularidad que es:

No tipado
No existe int, float, string, ni char, ni nada

Todo es var -> variable
de acuerdo al estandar ES6 se manejan 3 tipos de variables:

VAR
LET es una variable de tipo "Protected"
CONST es un valor constante 

*/
function validar(formulario){

    if(formulario.nombre.value.length <= 3)
    {
        alert("Favor de ingresar mas de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var checarABC ="qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    var cadenanombre = formulario.nombre.value;
    //alert(cadenanombre);
    var todoesvalido=true;

    for(var i=0; i < cadenanombre.length; i++)
    {
        var caracteres = cadenanombre.charAt(i);
        for( var j = 0; j < checarABC.length; j++)
        {
            if(caracteres == checarABC.charAt(j))
            {
                break;
            }
        }
        if(j==checarABC.length)
        {
            todoesvalido= false;
            break;
        }
    }
    if(!todoesvalido)
    {
        alert("Ingresa solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var edad = parseInt(formulario.edad.value);
    //alert(edad);
    if((edad < 0) || (edad>=99))
    {
        alert("Favor de ingresar una edad valida de entre 01 y 99 años");
        formulario.edad.focus();
        return false;
    }

    var checarABC ="0123456789"
    var cadenanombre = formulario.edad.value;
    //alert(cadenanombre);
    var todoesvalido=true;

    for(var i=0; i < cadenanombre.length; i++)
    {
        var caracteres = cadenanombre.charAt(i);
        for( var j = 0; j < checarABC.length; j++)
        {
            if(caracteres == checarABC.charAt(j))
            {
                break;
            }
        }
        if(j==checarABC.length)
        {
            todoesvalido= false;
            break;
        }
    }
    if(!todoesvalido)
    {
        alert("Ingresa solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }


//Validar fecha en el caso de que jimmy quierea trollear
    var fecha = new Date(formulario.fecha.value);
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
    //Validar Tel
    var telefono= formulario.tel.value;
    var letras=/\D/;
    if(letras.test(telefono)){
        alert("Ingresa números, no se admiten letras en el campo celular");
        formulario.tel.focus();
        return false;
    }
    var email = formulario.correo.value;
    //Validar correo
    //Vamos a crear una expresión regular
        var prueba = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
        alert("E-mail "+(prueba.test(email) ? " " : "no ") + "válido")
}
        /*var telefono= formulario.tel.value;
        var expresion="^[0-9]\{7}+$";
        alert("Celular "+(expresion.test(telefono)?" ": "no ")+ "válido")
        return prueba.test, expresion.test;*/
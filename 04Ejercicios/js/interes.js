function validarn(e)
{
    var teclado=(document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron =/[0-9\d.]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
   
}
function interes()
{
    var valor= document.getElementById("cantidad").value;
    var resul= parseInt(valor);
    if(( resul>0)&&(resul< 1000000000000000000000)) {
        var interes= resul* 0.02;
        var total = resul + interes;
        document.getElementById("cantidadi").value= "$"+ total;
}
else{
    alert("Favor de ingresar una cantidad válida");
    formulario.cantidad.focus();}
}
function borrar()
{
document.getElementById("cantidad").value="";
document.getElementById("cantidadi").value="";
}

 

function validarn(e) {
  var teclado = document.all ? e.keyCode : e.which;
  if (teclado == 8) return true;
  var patron = /[0-9\d.]/;
  var codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}
function calculoT() {
  var letras = /\D\./;
  var valor = document.querySelector("#cantidad").value;
  var anos = document.querySelector("#años").value;
  if (letras.test(valor)) {
    alert("Ingresa números, no se admiten letras");
    return false;
  } else {
    valor = parseInt(valor);
    anos = parseInt(anos);
    var tasa = 0.3; //ANUAl
    var tasaM = tasa / 12;
    var mesest = anos * 12;
    var calculo = valor / mesest;
    var contador = valor;
    var salida;
    var ImprimirSal = "";
    var totalI = 0,
      totalP = 0,
      totalC = 0;
    var imprimir = "";
    var imprimirM = "";
    var imprimirC = "";
    var imprimirI = "";
    var nopagos = "";
    var intereses;
    var saldo='';
    var cuotas;

    if (valor > 5000 && valor <= 3000000) {
      for (var i = 0; i < mesest; i++) {
        intereses = contador* tasaM;
        cuotas = intereses + calculo;

        imprimir += contador.toFixed(2) + "\n";
        nopagos += i + 1 + "\n";
        imprimirM += calculo.toFixed(2) + "\n";
        imprimirC += cuotas.toFixed(2) + "\n";
        imprimirI += intereses.toFixed(2) + "\n";

        contador = valor - calculo;
        valor = contador;
        salida = contador;
        ImprimirSal += salida.toFixed() + "\n";

        totalI += intereses;
        totalP = calculo * mesest;
        totalC += cuotas;
        saldo+=Math.abs(contador.toFixed(2))+'\n'
      }

      document.querySelector("#rPago").textContent = nopagos;
      document.querySelector("#rcapital").textContent = imprimir;
      document.querySelector("#rinteres").textContent = imprimirI;
      document.querySelector("#rcuotas").textContent = imprimirC;
      document.querySelector("#rabono").textContent = imprimirM;
      document.querySelector("#rsaldo").textContent=saldo
      document.querySelector("#totalIntereses").textContent =
        "$" + totalI.toFixed(2);
      document.querySelector("#totalAmortizacion").textContent =
        "$" + totalP.toFixed(2);
      document.querySelector("#totalCuota").textContent =
        "$" + totalC.toFixed(2);
    } else {
      alert("Favor de ingresar una cantidad válida (5000-3000000)");
      return false;
    }
  }
}
function borrar() {
  document.getElementById("cantidad").value = "";
  document.querySelector("#rPago").textContent = "";
  document.querySelector("#rcapital").textContent = "";
  document.querySelector("#rabono").textContent = "";
  document.querySelector("#rinteres").textContent = "";
  document.querySelector("#rcuotas").textContent = "";
  document.querySelector("#totalIntereses").textContent = "";
  document.querySelector("#totalAmortizacion").textContent = "";
  document.querySelector("#totalCuota").textContent = "";
}

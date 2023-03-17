/**************
INICIO
***************/
function instruccion()
{
    var resultado = window.confirm('Felicidades jugador 1 haz pasado al siguiente semestre, la temática es: BESOSO DULCES, atrapa el mayor número de besos dulces antes de que el veneno llegue a chawder, si llegas a 300 podrás pasar al siguiente nivel, BUENA SUERTE');
    if (resultado === true){
        window.alert('ES IMPORTANTE QUE LOS BESOS TOQUEN SOLO LA CANASTITA, sin mas que decir, que la suerte este de tu lado, el juego empieza en 3,2,1..');
    } else { 
        window.alert('Si no entendiste, básicamente tienes que ir atrapando los cuadritos morados con la canastia<3');
    }
}
function siguiente()
{
	if(puntos>350)
	{
	window.alert('FELICIDADES, puedes pasar al siguiente nivel');
	sig.style.display='block';
	regresar.style.display='block';
	}
}
window.onload = function () {
	sig.style.display='none';
	regresar.style.display='none';
	instruccion();
	canvas = document.getElementById("miCanvas");
	if (canvas && canvas.getContext) {
		ctx = canvas.getContext("2d");
		if (ctx) {
			x = canvas.width / 2;
			mensaje("Start");
			imgNave = new Image();
			imgOvni = new Image();
			imgOvni.src = "images/veneno.png";
			imgNave.src = "images/chawder2.png";
			imgNave.onload = function () {
				nave = new nave(0);
			}
			imgOvni.onload = function () {
				for (var i = 0; i < 5; i++) {
					for (var j = 0; j < 10; j++) {
						ovnis_array.push(new Enemigo(150 + 40 * j, 30 + 45 * i));
					}
				}
				setTimeout(anima, 2000);
				disparoEnemigo = setTimeout(disparaEnemigo, tiempoDisparo);
			}
		} else {
			alert("Error al crear tu contexto");
		}
	}
}
/*************
LISTENER
**************/
document.addEventListener("keydown", function (e) {
	teclaPulsada = e.keyCode;
	tecla[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
	tecla[e.keyCode] = false;
});
/*******************
VARIABLES
********************/
var canvas, ctx;
var x = 100;
var y = 100;
var teclaIzquierda = 37;
var teclaDerecha = 39;
var imgNave, imgOvni;
var ultimos = new Array();
var imgAni = 0;
var imgAni2 = 0;
var tiempoBala = true ;
var teclaPulsada = null;
var tecla = [];
var balas_array = new Array();
var ovnis_array = new Array();
var balasEnemigas_array = new Array();
var endGame = false;
var disparoEnemigo;
var tiempoDisparo = 1000;
var puntos = 0;
/*****************
OBJETOS
******************/
function Bala(x, y, w) {
	this.x = x;
	this.y = 5;
	this.w = 10;
	this.dispara = function () {
		ctx.save();
		ctx.fillStyle = "#800080";
		ctx.fillRect(this.x, this.y, this.w, this.w);
		this.y = this.y + 2;
		ctx.restore();
	};
}
function nave(x) {
	this.x = x;
	this.y = 450;
	this.w = 30;
	this.h = 15;
	this.dibuja = function (x) {
		this.x = x;
		if(imgAni2 < 5){
            ctx.drawImage(imgNave,this.x,this.y, 100, 90);
			imgAni2 = imgAni2 + 1;
			imgAni = imgAni + 1;
		} else {
            ctx.drawImage(imgNave,this.x,this.y, 100, 90);
			imgAni2 = 0;
		}
		
	};
}
function Enemigo(x, y) {
	this.x = x;
	this.y = y;
	this.w = 3;
	this.veces = 0;
	this.dx = 5;
	this.ciclos = 0;
	this.num = 20;
	this.figura = true;
	this.vive = true;
	this.dibuja = function () {
		//Retraso
		if (this.ciclos > 17) {
			//saltitos
			if (this.veces > this.num) {
				this.dx *= -1;
				this.veces = 0;
				this.num = 28;
				this.y += 40;
				this.dx = (this.dx > 0) ? this.dx++ : this.dx--;
			} else {
				this.x += this.dx;
			}
			this.veces++;
			this.ciclos = 0;
			this.figura = !this.figura;
		} else {
			this.ciclos++;
		}
		if (this.vive) {
			if (imgAni < 4)  {
				ctx.drawImage(imgOvni, 32, 0, 32, 32, this.x, this.y, 35, 35);
			} else if(imgAni < 12) {
				ctx.drawImage(imgOvni, 64, 0, 32, 32, this.x, this.y, 35, 35);
			} else if(imgAni > 11) {
				ctx.drawImage(imgOvni, 0, 0, 32, 32, this.x, this.y, 35, 35);
				imgAni = 0;
			}
		} 

	};
}
/*****************
FUNCIONES
******************/
function anima() {
	if (endGame == false) {
		requestAnimationFrame(anima);
		verifica();
		pinta();
		colisiones();
	}
}
function mensaje(cadena) {
	var lon = (canvas.width - (50 * cadena.length)) / 2;
	ctx.fillStyle = "Black";
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = "bold 75px Arial";
	ctx.fillText(cadena, (lon == 0 ? 40 : lon ), 220);
}
function colisiones() {
	for (var i = 0; i < ovnis_array.length; i++) {
		for (var j = 0; j < balas_array.length; j++) {
			enemigo = ovnis_array[i];
			bala = balas_array[j];
			if (enemigo != null && bala != null) {
				if ((bala.x > enemigo.x) &&
					(bala.x < enemigo.x + enemigo.w) &&
					(bala.y > enemigo.y) &&
					(bala.y < enemigo.y + enemigo.w)) {
					enemigo.vive = false;
					ovnis_array[i] = null;
					balas_array[j] = null;
				}
			}
		}
	}
	for (var j = 0; j < balasEnemigas_array.length; j++) {
		bala = balasEnemigas_array[j];
		if (bala != null) {
			if ((bala.x > nave.x) &&
				(bala.x < nave.x + nave.w) &&
				(bala.y > nave.y) &&
				(bala.y < nave.y + nave.h)) 
                {
                    puntos += 2;
					score();
			    }
		}
	}
}
function gameOver() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	balas_array = [];
	balasEnemigas_array = [];
	if( enemigosVivos == 0 ){
		mensaje("GANASTE");
	}
    siguiente();
	endGame = true;
	clearTimeout(disparoEnemigo);
}
function score() {
	ctx.save();
	ctx.fillStyle = "Black";
	ctx.clearRect(0, 0, canvas.width, 20);
	ctx.font = "bold 15px Courier";
	ctx.fillText("SCORE: " + puntos, 10, 20);
	ctx.restore();
}
function verifica(boton=false, codigo=0) {
	if(boton){
		teclaPulsada = codigo;
		tecla[codigo] = true;
	}
	if (tecla[teclaDerecha]) x += 5;
	if (tecla[teclaIzquierda]) x -= 5;
	//Verifica cañon
	if (x > canvas.width - 20) x = canvas.width - 20;
	if (x < 0) x = 0;}
function pinta() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	score();
	nave.dibuja(x);

	//Balas Enemigas
	for (var i = 0; i < balasEnemigas_array.length; i++) {
		if (balasEnemigas_array[i] != null) {
			balasEnemigas_array[i].dispara();
			if (balasEnemigas_array[i].y > canvas.height) balasEnemigas_array[i] = null;
		}
	}
	//Enemigos
	numEnemigos = 0;
	for (var i = 0; i < ovnis_array.length; i++) {
		if (ovnis_array[i] != null) {
			ovnis_array[i].dibuja();
			if (ovnis_array[i].y == nave.y) {
					mensaje("No more time");
					
			}
			numEnemigos++;
		}
	}
	if(puntos>=300)
	{
	sig.style.display='block';
	regresar.style.display='block';
	}
	if (numEnemigos == 0) gameOver();
}
function disparaEnemigo() {
	for (var i = ovnis_array.length - 1; i > 0; i--) {
		if (ovnis_array[i] != null) {
			ultimos.push(i);
		}
		if (ultimos.length >= 10) break;
	}
	Array.prototype.clean = function(deleteValue) { 
		for (var i = 0; i < this.length; i++) {
				if (this[i] == deleteValue) { 
					this.splice(i, 1); i--; 
				} 
			} return this; 
		}; 
	ovnis_array.clean(undefined);
	d = ultimos[Math.floor(Math.random() * ovnis_array.length)];
	if(ovnis_array[d] == null || d == null){
		ovnis_array.clean(undefined);
		d = Math.floor(Math.random() * ovnis_array.length);
	}
	balasEnemigas_array.push(new Bala(ovnis_array[d].x + ovnis_array[d].w / 2, ovnis_array[d].y, 5));
	clearTimeout(disparoEnemigo);
	disparoEnemigo = setTimeout(disparaEnemigo, tiempoDisparo);
}
function reiniciar(){
	location.reload();
}
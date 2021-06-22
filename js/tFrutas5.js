	// var canvas = document.querySelector('canvas');
	// var ctx = canvas.getContext('2d');

///////////zindex by devmunchies.com

			function getHighestZIndexElement(){
		    	const domNodes = document.getElementsByTagName("*");
		    	var higestZIndex = null;
		    	var element = null;
		    	console.log("bajando");
				for (var i = 0;  i < domNodes.length; i++) {
     				const zIndex = parseInt(
     					getComputedStyle(domNodes[i], null).getPropertyValue('z-index')
     					);

					if (higestZIndex === null && typeof zIndex === 'number' && !isNaN(zIndex)){
						higestZIndex = zIndex;
						element = domNodes[i];
					}else if(!isNaN(zIndex) && zIndex > higestZIndex) {
						higestZIndex = zIndex;
						element = domNodes[i];
					}
					}
					return element;
					console.log(element);
					}

//////////////
var wSize = document.documentElement.clientWidth;
var hSize = document.documentElement.clientHeight;

var x = "algo"
var date = new Date();


var radius = 50; // for example

theMonth = date.getMonth();




function fruta (exist, nombre, meses, foto, sizeCircle, colorCircle, posCircle) {
	this.exist = exist;
	this.nombre = nombre;
	this.meses = meses;
	this.foto = foto;
	
	this.colorCircle = colorCircle;
	this.posCircle = posCircle;

	var animGrow = setInterval(frame, 5);

	nivelTemporada = this.meses.indexOf(theMonth)+1;
	tamanoMes = 200/meses.length;
	tamanoCirculo = 2;

	function frame(){
		if(nivelTemporada < 1){
			tamanoCirculo = 0.1;
			
		}else if(meses.length > 10){
			tamanoCirculo = 1.7;

		}else if(meses[0] == theMonth){
			tamanoCirculo = 2;		

		
		

		}else{
			
			tamanoCirculo = ((meses.length - nivelTemporada) * tamanoMes)/100;
		}
		
			if(tamanoCirculo > .1 && tamanoCirculo < .6){
			tamanoCirculo = 1;
			}else if(nivelTemporada == meses.length) {
				tamanoCirculo = .5;
			}	

		this.sizeCircle = tamanoCirculo;
	//	tamanoCirculo = (meses.length/100*(meses.length-nivelTemporada)*2)*10;
		// console.log("entre " + tamanoCirculo);
		//console.log(nombre + " " + (nivelTemporada+1 * meses.length) + " " + tamanoCirculo );
	//console.log(nombre + " " + tamanoCirculo + " " + " " + nivelTemporada + " " + (((meses.length - nivelTemporada) * tamanoMes)/100) )
	console.log(nombre + " " + tamanoCirculo)
	}
}
fruta.prototype.myExistencia = function(){
	for (var i = 0; i < 36; i++) {
		var existo = this.exist; 
		console.log("te escucho " + this.nombre);
		if(existo == 1){
			

			var circleFruit = document.createElement("div");
			var posx = 0;
			var posy = 0;
			var getSelfPosition = this.posCircle;
			var selfSize = this.sizeCircle;
			var ownSize = circleFruit.offsetWidth;
			var colorFruit = this.colorCircle;
			var nameFruit = this.nombre;

			circleFruit.className = "styleCircle";
			circleFruit.style.backgroundColor = colorFruit;
			circleFruit.innerHTML = "<p>"+ nameFruit + "</p>";

			circleFruit.style.transform = "scale(" + selfSize + ", " + selfSize + ")";
			circleFruit.onclick = function() {
		    	console.log("pressed " + nameFruit);
		    	getHighestZIndexElement()	
    		};

			document.getElementById("leFruit").appendChild(circleFruit);

			break;
		}else{
			console.log("Ya no hay frutas en el mundo " + this.meses[i]);

console.log("estoy mal " + this.meses[i]);
		}

		}
}


fruta.prototype.myTemporada = function() {

	for (var i = 0; i < this.meses.length; i++) {
		var testMonth = this.meses[i]; 
		if(theMonth == testMonth){

			///aqui lo que va a modificar las escala por el mes en el que estemos
	};

}
}



var frutaCoco = new fruta(1, "Coco", [0, 1, 2], "coco.png", .1, "#F7F5E8", 100);
var frutaPina = new fruta(1, "Piña", [0, 1, 2, 3, 4, 5, 6], "pina.png", .7, "#FCDD62", 10);
var frutaMelon = new fruta(1, "Melón", [1, 2, 3, 4, 5, 6, 7, 8], "melon.png", 1, "#F6891E", 40);
var frutaGuanabana = new fruta(1, "Guanabana", [1, 2, 3], "guanabana.png", .1, "#E6E8DE", 80);
var frutaMango = new fruta(1, "Mango", [2, 3, 4, 5, 6], "mango.png", 1, "#EBA829", 60);
var frutaMamey = new fruta(1, "Mamey", [2, 3, 4, 5], "mamey.png", .5, "#D94027", 80);
var frutaSandia = new fruta (1, "Sandía", [01, 02, 03, 04, 05, 06, 07], "sandia.png", 1, "#BE2326", 55);
var frutaCereza = new fruta(1, "Cereza", [3, 4, 5, 6], "cereza.png", .8, "#8B181A", 40);
var frutaKiwi = new fruta(1, "Kiwi", [3, 4, 5], "kiwi.png", 1, "#A4A737", 25);
var frutaLichi = new fruta(1, "Lichi", [4, 5, 6], "lichi.png", 2, "#D9243D", 10);
var frutaCiruela = new fruta(1, "Ciruela", [4, 5, 6, 7], "ciruela.png", 2, "#461926", 40);
var frutaHigo = new fruta(1, "Higo", [4, 5, 6, 7], "higo.png", 2, "#33191D", 60);
var frutaPera = new fruta (1, "Pera", [4, 5, 6, 7, 8, 9, 10, 11], "pera.png", 2, "#92A23A", 80);
var frutaDurazno = new fruta(1, "Durazno", [5, 6, 7, 8, 9], "durazno.png", .1, "#EE6B2F", 90);
var frutaUva = new fruta(1, "Uva", [5, 6, 7, 8, 9], "uva.png", .1, "#5A0B2A", 70);
var frutaFrambuesa = new fruta(1, "Frambuesa", [5, 6, 7, 8], "frambuesa.png", .1, "#B92125", 60);
var frutaGranadaRoja = new fruta(1, "Granada Roja", [5, 6, 7, 8], "granadaroja.png", .1, "#DA1F28", 50);
var frutaMora = new fruta(1, "Mora", [5, 6, 7, 8], "mora.png", .1, "#21142D", 40);
var frutaTuna = new fruta(1, "Tuna", [6, 7, 8], "tuna.png", .1, "#85AF40", 30);
var frutaManzana = new fruta(1, "Manzana", [6, 7, 8, 9], "manzana.png", .1, "#61070E", 40);
var frutaGuayaba = new fruta(1, "Guayaba", [7, 8, 9, 10, 11, 0, 1], "guayaba.png", .1, "#EDD215", 50);
var frutaGrocella = new fruta(1, "Grocella", [7, 8], "grocella.png", .1, "#C92026", 60);
var frutaLima = new fruta(1, "Lima", [8, 9, 10, 11], "lima.png", .1, "#C6D92D", 70);
var frutaToronja = new fruta(1, "Toronja", [8, 9, 10, 11, 0, 1, 2, 3], "toronja.png", .1, "#E04132", 80);
var frutaNaranja = new fruta(1, "Naranja", [9, 10, 11, 0, 1, 2, 3], "naranja.png", .1, "#EE6322", 90);
var frutaAguacate = new fruta(1, "Aguacate", [9, 10, 11, 0, 1, 2], "aguacate.png", .1, "#8EAD3D", 100);
var frutaMandarina = new fruta(1, "Mandarina", [9, 10, 11, 0, 1], "mandarina.png", .1, "#DF4A26", 120);
var frutaChicozapote = new fruta(1, "Chicozapote", [9, 10, 11, 0], "chicozapote.png", .1, "#DD5337", 130);
var frutaTejocote = new fruta(1, "Tejocote", [9, 10, 11, 0], "tejocote.png", .1, "#D9882F", 100);
var frutaZapote = new fruta(1, "Zapote", [10, 11, 0], "zapote.png", .1, "#CC5A27", 90);
var frutaGranadaChina = new fruta (1, "Granada China", [10, 11, 0, 1], "granadachina.png", .1, "#DC7E27", 120);
var frutaTamarindo = new fruta(1, "Tamarindo", [11, 0, 1, 2, 3], "tamarindo.png", .1, "#944825", 130);
var frutaFresa = new fruta(1, "Fresa", [11, 0, 1, 2, 3], "fresa.png", .1, "#D22028", 150);
var frutaPapaya = new fruta(1, "Papaya", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "papaya.png", 2, "#EF4623", 50);
var frutaLimon = new fruta (1, "Limón", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "limon.png", 2, "#4E7B38", 40);
var frutaPlatano = new fruta (1, "Plátano", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "platano.png", 2, "#F8BB2B", 30);




frutaCoco.myTemporada();
frutaPina.myTemporada();
frutaMelon.myTemporada();
frutaGuanabana.myTemporada();
frutaMango.myTemporada();
frutaMamey.myTemporada();
frutaSandia.myTemporada();
frutaCereza.myTemporada();
frutaKiwi.myTemporada();
frutaLichi.myTemporada();
frutaCiruela.myTemporada();
frutaHigo.myTemporada();
frutaPera.myTemporada();
frutaDurazno.myTemporada();
frutaUva.myTemporada();
frutaFrambuesa.myTemporada();
frutaGranadaRoja.myTemporada();
frutaMora.myTemporada();
frutaTuna.myTemporada();
frutaManzana.myTemporada();
frutaGuayaba.myTemporada();
frutaGrocella.myTemporada();
frutaLima.myTemporada();
frutaToronja.myTemporada();
frutaNaranja.myTemporada();
frutaAguacate.myTemporada();
frutaMandarina.myTemporada();
frutaChicozapote.myTemporada();
frutaTejocote.myTemporada();
frutaZapote.myTemporada();
frutaGranadaChina.myTemporada();
frutaTamarindo.myTemporada();
frutaFresa.myTemporada();
frutaPapaya.myTemporada();
frutaLimon.myTemporada();
frutaPlatano.myTemporada();

frutaCoco.myExistencia();
frutaPina.myExistencia();
frutaMelon.myExistencia();
frutaGuanabana.myExistencia();
frutaMango.myExistencia();
frutaMamey.myExistencia();
frutaSandia.myExistencia();
frutaCereza.myExistencia();
frutaKiwi.myExistencia();
frutaLichi.myExistencia();
frutaCiruela.myExistencia();
frutaHigo.myExistencia();
frutaPera.myExistencia();
frutaDurazno.myExistencia();
frutaUva.myExistencia();
frutaFrambuesa.myExistencia();
frutaGranadaRoja.myExistencia();
frutaMora.myExistencia();
frutaTuna.myExistencia();
frutaManzana.myExistencia();
frutaGuayaba.myExistencia();
frutaGrocella.myExistencia();
frutaLima.myExistencia();
frutaToronja.myExistencia();
frutaNaranja.myExistencia();
frutaAguacate.myExistencia();
frutaMandarina.myExistencia();
frutaChicozapote.myExistencia();
frutaTejocote.myExistencia();
frutaZapote.myExistencia();
frutaGranadaChina.myExistencia();
frutaTamarindo.myExistencia();
frutaFresa.myExistencia();
frutaPapaya.myExistencia();
frutaLimon.myExistencia();
frutaPlatano.myExistencia();



// var allFruits = document.getElementById("leFruit");

// allFruits.onclick = function(){
// 	if (this.style.transform = "scale(" + 2 + ")"){
// 		this.style.transform = "scale(" + 1 + ")";
// 	}else{
// 		this.style.transform = "scale(" + 1 + ")";
// 	}
// }


var x = document.getElementsByClassName("unaClase");
x.innerHTML = "aqui se acaba todo";



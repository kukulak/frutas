var x = "algo"
var date = new Date();
theMonth = date.getMonth();




function fruta (nombre, meses, foto, sizeCircle, colorCircle) {
	this.nombre = nombre;
	this.meses = meses;
	this.foto = foto;
	this.sizeCircle = sizeCircle;
	this.colorCircle = colorCircle;
} 

    // document.getElementById("myDIV").style.WebkitTransform = "rotate(20deg)"; 
    // // Code for IE9
    // document.getElementById("myDIV").style.msTransform = "rotate(20deg)"; 
    // // Standard syntax
    // document.getElementById("myDIV").style.transform = "rotate(20deg)"; 

fruta.prototype.myTemporada = function() {

	for (var i = 0; i < this.meses.length; i++) {
		var testMonth = this.meses[i]; 
		if(theMonth == testMonth){
			var circleFruit = document.createElement("div");
			circleFruit.className = "styleCircle";
			circleFruit.style.backgroundColor = this.colorCircle;

			circleFruit.innerHTML = this.nombre;
			circleFruit.style.transform = "scale(" + this.sizeCircle + ", " + this.sizeCircle + ")";
			// circleFruit.style.transform = "scale(" + this.sizeCircle + ", " + this.sizeCircle + ")" + "rotate(-11deg)";
			document.body.appendChild(circleFruit);

			console.log("es el mes de la " + this.nombre + this.meses[i]);
			break;
		}else{
			console.log("Ya no hay frutas en el mundo " + this.meses[i]);

console.log("estoy mal " + this.meses[i]);
		}



	};

}

var unArray = [1, 2, 3, 5, 6, 7, 8, 9] ;


var frutaCoco = new fruta("Coco", [0, 1, 2], "coco.png", 0.3, "#F7F5E8");
var frutaPina = new fruta("Piña", [0, 1, 2, 3, 4, 5, 6], "pina.png", 0.25, "#FCDD62");
var frutaMelon = new fruta("Melón", [1, 2, 3, 4, 5, 6, 7, 8], "melon.png", 0.50, "#F6891E");
var frutaGuanabana = new fruta("Guanabana", [1, 2, 3], "guanabana.png", 0.60, "#E6E8DE");
var frutaMango = new fruta("Mango", [2, 3, 4, 5, 6], "mango.png", 0.55, "#EBA829");
var frutaMamey = new fruta("Mamey", [2, 3, 4, 5], "mamey.png", 0.20, "#D94027");
var frutaSandia = new fruta ("Sandía", [01, 02, 03, 04, 05, 06, 07], "sandia.png", 0.50, "#BE2326");
var frutaCereza = new fruta("Cereza", [3, 4, 5, 6], "cereza.png", 0.90, "#8B181A");
var frutaKiwi = new fruta("Kiwi", [3, 4, 5], "kiwi.png", 0.500, "#A4A737");
var frutaLichi = new fruta("Lichi", [4, 5, 6], "lichi.png", 1, "#D9243D");
var frutaCiruela = new fruta("Ciruela", [4, 5, 6, 7], "ciruela.png", 1, "#461926");
var frutaHigo = new fruta("Higo", [4, 5, 6, 7], "higo.png", 1, "#33191D");
var frutaPera = new fruta ("Pera", [4, 5, 6, 7, 8, 9, 10, 11], "pera.png", 1, "#92A23A");
var frutaDurazno = new fruta("Durazno", [5, 6, 7, 8, 9], "durazno.png", 0.70, "#EE6B2F");
var frutaUva = new fruta("Uva", [5, 6, 7, 8, 9], "uva.png", 100, "#5A0B2A");
var frutaFrambuesa = new fruta("Frambuesa", [5, 6, 7, 8], "frambuesa.png", 100, "#B92125");
var frutaGranadaRoja = new fruta("Granada Roja", [5, 6, 7, 8], "granadaroja.png", 100, "#DA1F28");
var frutaMora = new fruta("Mora", [5, 6, 7, 8], "mora.png", 100, "#21142D");
var frutaTuna = new fruta("Tuna", [6, 7, 8], "tuna.png", 100, "#885AF40");
var frutaManzana = new fruta("Manzana", [6, 7, 8, 9], "manzana.png", 100, "#61070E");
var frutaGuayaba = new fruta("Guayaba", [0, 1, 7, 8, 9, 10, 11], "guayaba.png", 100, "#EDD215");
var frutaGrocella = new fruta("Grocella", [7, 8], "grocella.png", 100, "#C92026");
var frutaLima = new fruta("Lima", [8, 9, 10, 11], "lima.png", 100, "#C6D92D");
var frutaToronja = new fruta("Toronja", [0, 1, 2, 3, 8, 9, 10, 11], "toronja.png", 100, "#E04132");
var frutaNaranja = new fruta("Naranja", [0, 1, 2, 3, 9, 10, 11], "naranja.png", 100, "#EE6322");
var frutaAguacate = new fruta("Aguacate", [0, 1, 2, 9, 10, 11], "aguacate.png", 100, "#8EAD3D");
var frutaMandarina = new fruta("Mandarina", [0, 1, 9, 10, 11], "mandarina.png", 100, "#DF4A26");
var frutaChicozapote = new fruta("Chicozapote", [0, 9, 10, 11], "chicozapote.png", 100, "#DD5337");
var frutaTejocote = new fruta("Tejocote", [0, 9, 10, 11], "tejocote.png", 100, "#D9882F");
var frutaZapote = new fruta("Zapote", [0, 10, 11], "zapote.png", 100, "#CC5A27");
var frutaGranadaChina = new fruta ("Granada China", [10, 11, 0, 1], "granadachina.png", 100, "#DC7E27");
var frutaTamarindo = new fruta("Tamarindo", [0, 1, 2, 3, 11], "tamarindo.png", 100, "#944825");
var frutaFresa = new fruta("Fresa", [0, 1, 2, 3, 11], "fresa.png", 100, "#D22028");
var frutaPapaya = new fruta("Papaya", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "papaya.png", 1, "#EF4623");
var frutaLimon = new fruta ("Limón", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "limon.png", 1, "#4E7B38");
var frutaPlatano = new fruta ("Plátano", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "platano.png", 1, "#F8BB2B");


// frutaPera.myTemporada();
// frutaSandia.myTemporada();
// frutaGranadaChina.myTemporada();




///////

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

//////////

document.getElementById("date").innerHTML = Date();

document.getElementById("date2").innerHTML = date.getMonth();

document.getElementById("unaSuma").innerHTML = theMonth + 13;




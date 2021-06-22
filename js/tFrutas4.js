	// var canvas = document.querySelector('canvas');
	// var ctx = canvas.getContext('2d');


var wSize = document.documentElement.clientWidth;
var hSize = document.documentElement.clientHeight;

var x = "algo"
var date = new Date();


var radius = 50; // for example

theMonth = date.getMonth();




function fruta (nombre, meses, foto, sizeCircle, colorCircle, posCircle) {
	this.nombre = nombre;
	this.meses = meses;
	this.foto = foto;
	this.sizeCircle = sizeCircle;
	this.colorCircle = colorCircle;
	this.posCircle = posCircle;
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

			/////////////canvasHere

			//////////////////

			//var showFruit = setInterval(elemenTxt, 50);


			var circleFruit = document.createElement("div");

			var posx = 0;
			var posy = 0;
			var id = setInterval(frame, 1);

			var getSelfPosition = this.posCircle;
			var selfSize = this.sizeCircle;

			var ownSize = circleFruit.offsetWidth;

			var colorFruit = this.colorCircle;

			var nameFruit = this.nombre;

			//function elemenTxt(){
			circleFruit.className = "styleCircle";
			circleFruit.style.backgroundColor = colorFruit;

			circleFruit.innerHTML = nameFruit;
			// circleFruit.style.height = selfSize * 100 + "px";
			// circleFruit.style.width = selfSize * 100 + "px";
			circleFruit.style.transform = "scale(" + selfSize * 1.5 + ", " + selfSize * 1.5 + ")";

			// circleFruit.style.transform = "scale(" + this.sizeCircle + ", " + this.sizeCircle + ")" + "rotate(-11deg)";
			document.getElementById("leFruit").appendChild(circleFruit);

			//}
			//console.log("es el mes de la " + this.nombre + this.meses[i]);


			/////traing animation//////


			

			function frame(){


				//hSize += ownSize*100;
				if(posy + selfSize*600 == hSize+140) {
					
					clearInterval(id);
					console.log("parece que nunca llegare " + ownSize);
				}else {
					posx++
					posy++;
				circleFruit.style.left = getSelfPosition *5.1  + 'px';
				circleFruit.style.top = posy  + 'px';
  				console.log("sepatelo no hay nada aqui ");
  			
  				
  				}



				// if(posx == 190) {
				// 	clearInterval(id);
				// 	console.log("parece que nunca llegare ala X " + posx);
				// }else {
				// 	posx++;
				// 	getSelfPosition++;
				// circleFruit.style.left = posx + getSelfPosition/32 +'px';
  		// 		console.log("sepatelo no hay nada aqui pero sigo  " + posx);
  				
  		// 		}





			}

			// var idS = setInterval(frameP, 1);

			// function frameP(){
			// 	if(posy == 650) {
			// 		clearInterval(idS);
			// 		console.log("parece que nunca llegare " + posy);
			// 	}else {
					
			// 		posy++;
			// 	circleFruit.style.top = posy + getSelfPosition + 'px';
  	// 			console.log("sepatelo no hay nada aqui " + posy);
  	// 			//this.style.top = y_pos+'px';
  				
  	// 			}
			// }


// } else if (posx == 660 - selfSize){

// 				} 




			break;
		}else{
			console.log("Ya no hay frutas en el mundo " + this.meses[i]);

console.log("estoy mal " + this.meses[i]);
		}



	};

}

var unArray = [1, 2, 3, 5, 6, 7, 8, 9] ;




//////////

// document.getElementById("date").innerHTML = Date();

// document.getElementById("date2").innerHTML = date.getMonth();

// document.getElementById("unaSuma").innerHTML = theMonth + 13;


/////////////////////////////////////////  test     ////////////////////////////
//////////////////////////////	///		  canvas    //////////////////////////
/////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////







//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////esperemos no se rompa////////////////////
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


// var canvas = document.getElementById("canvas");

// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.rect(40, 40, 150, 100);
// ctx.stroke();
// ctx.fillStyle = "blue";
// ctx.fill();


///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////











var frutaCoco = new fruta("Coco", [0, 1, 2], "coco.png", 1.4, "#F7F5E8", 100);
var frutaPina = new fruta("Piña", [0, 1, 2, 3, 4, 5, 6], "pina.png", .9, "#FCDD62", 10);
var frutaMelon = new fruta("Melón", [1, 2, 3, 4, 5, 6, 7, 8], "melon.png", 0.95, "#F6891E", 40);
var frutaGuanabana = new fruta("Guanabana", [1, 2, 3], "guanabana.png", 0.90, "#E6E8DE", 80);
var frutaMango = new fruta("Mango", [2, 3, 4, 5, 6], "mango.png", 0.90, "#EBA829", 60);
var frutaMamey = new fruta("Mamey", [2, 3, 4, 5], "mamey.png", 0.80, "#D94027", 80);
var frutaSandia = new fruta ("Sandía", [01, 02, 03, 04, 05, 06, 07], "sandia.png", 0.75, "#BE2326", 55);
var frutaCereza = new fruta("Cereza", [3, 4, 5, 6], "cereza.png", 0.70, "#8B181A", 40);
var frutaKiwi = new fruta("Kiwi", [3, 4, 5], "kiwi.png", 0.65, "#A4A737", 25);
var frutaLichi = new fruta("Lichi", [4, 5, 6], "lichi.png", 0.62, "#D9243D", 10);
var frutaCiruela = new fruta("Ciruela", [4, 5, 6, 7], "ciruela.png", 0.6, "#461926", 40);
var frutaHigo = new fruta("Higo", [4, 5, 6, 7], "higo.png", 0.58, "#33191D", 60);
var frutaPera = new fruta ("Pera", [4, 5, 6, 7, 8, 9, 10, 11], "pera.png", 0.65, "#92A23A", 80);
var frutaDurazno = new fruta("Durazno", [5, 6, 7, 8, 9], "durazno.png", 0.53, "#EE6B2F", 90);
var frutaUva = new fruta("Uva", [5, 6, 7, 8, 9], "uva.png", 100, "#5A0B2A", 70);
var frutaFrambuesa = new fruta("Frambuesa", [5, 6, 7, 8], "frambuesa.png", 100, "#B92125", 60);
var frutaGranadaRoja = new fruta("Granada Roja", [5, 6, 7, 8], "granadaroja.png", 100, "#DA1F28", 50);
var frutaMora = new fruta("Mora", [5, 6, 7, 8], "mora.png", 100, "#21142D", 40);
var frutaTuna = new fruta("Tuna", [6, 7, 8], "tuna.png", 100, "#885AF40", 30);
var frutaManzana = new fruta("Manzana", [6, 7, 8, 9], "manzana.png", 100, "#61070E", 40);
var frutaGuayaba = new fruta("Guayaba", [0, 1, 7, 8, 9, 10, 11], "guayaba.png", 100, "#EDD215", 50);
var frutaGrocella = new fruta("Grocella", [7, 8], "grocella.png", 100, "#C92026", 60);
var frutaLima = new fruta("Lima", [8, 9, 10, 11], "lima.png", 100, "#C6D92D", 70);
var frutaToronja = new fruta("Toronja", [0, 1, 2, 3, 8, 9, 10, 11], "toronja.png", 100, "#E04132", 80);
var frutaNaranja = new fruta("Naranja", [0, 1, 2, 3, 9, 10, 11], "naranja.png", 100, "#EE6322", 90);
var frutaAguacate = new fruta("Aguacate", [0, 1, 2, 9, 10, 11], "aguacate.png", 100, "#8EAD3D", 100);
var frutaMandarina = new fruta("Mandarina", [0, 1, 9, 10, 11], "mandarina.png", 100, "#DF4A26", 120);
var frutaChicozapote = new fruta("Chicozapote", [0, 9, 10, 11], "chicozapote.png", 100, "#DD5337", 130);
var frutaTejocote = new fruta("Tejocote", [0, 9, 10, 11], "tejocote.png", 100, "#D9882F", 100);
var frutaZapote = new fruta("Zapote", [0, 10, 11], "zapote.png", 100, "#CC5A27", 90);
var frutaGranadaChina = new fruta ("Granada China", [10, 11, 0, 1], "granadachina.png", 100, "#DC7E27", 120);
var frutaTamarindo = new fruta("Tamarindo", [0, 1, 2, 3, 11], "tamarindo.png", 100, "#944825", 130);
var frutaFresa = new fruta("Fresa", [0, 1, 2, 3, 11], "fresa.png", 100, "#D22028", 150);
var frutaPapaya = new fruta("Papaya", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "papaya.png", 0.5, "#EF4623", 50);
var frutaLimon = new fruta ("Limón", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "limon.png",0.4, "#4E7B38", 40);
var frutaPlatano = new fruta ("Plátano", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "platano.png", .5, "#F8BB2B", 30);


// frutaPera.myTemporada();
// frutaSandia.myTemporada();
// frutaGranadaChina.myTemporada();




///////

//var aEscena = setInterval(fruta.prototype.myTemporada, 12);

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






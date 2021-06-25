// Kukulak Temporada de Frutas


			function getHighestZIndexElement(){
		    	const domNodes = document.getElementsByTagName("*");
		    	var higestZIndex = null;
		    	var element = null;
		    	

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
					console.log(element + " prueba");
					
					}

//////////////
var wSize = document.documentElement.clientWidth;
var hSize = document.documentElement.clientHeight;

var x = "algo"
var date = new Date();


var radius = 50; // for example

theMonth = date.getMonth();

var selfSize = 0;





function fruta (exist, nombre, meses, foto, sizeCircle, colorCircle, posCircle, vitaminas, minerales, colorTexto) {
	this.exist = exist;
	this.nombre = nombre;
	this.meses = meses;
	this.foto = foto;
	this.vitaminas = vitaminas;
	this.minerales = minerales;
	this.colorTexto = colorTexto;
	this.colorCircle = colorCircle;
	this.posCircle = posCircle;

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
			//var selfSize = this.sizeCircle;
			var ownSize = circleFruit.offsetWidth;
			var colorFruit = this.colorCircle;
			var nameFruit = this.nombre;
			var theVitaminas = this.vitaminas;
			var theMinerales = this.minerales;
			var animGrow = setInterval(frame, 10);
			//var selfSize = 0;
			var biggerMe = 0.0;
			var meses = this.meses;
			var nombre = this.nombre;
			var colorText = this.colorTexto;


			circleFruit.className = "styleCircle";
			circleFruit.style.backgroundColor = colorFruit;

			circleFruit.innerHTML = "<h6>"+ nameFruit + "</h6>";
			circleFruit.style.color = colorText;
			console.log(nameFruit+ " " + "color: " + colorText);

///////////
				var manyClicks = 0;
			
				circleFruit.onclick = function(){
					// manyClicks += 1;
					// this.zIndex = manyClicks + 90;
					console.log("clicked");


				}		

				var conteo = 0;

				document.onmouseover = function() {
						
						conteo++;
						console.log("soy un " + conteo)
						// document.getElementById("demo").innerHTML = conteo;

						onConteo = conteo;

						};


		
				circleFruit.onmouseover = function (){
					// manyClicks += 1;
					this.style.zIndex = onConteo + 90;
    				console.log("pasasPor aqui y " + onConteo);
    				// circleFruit.className = "styleCircle zindexCSS";
					console.log("rolovered " + nameFruit + " " + onConteo)
					// this.style.zIndex++;
				}






/////////////







//////////



	var nivelTemporada = this.meses.indexOf(theMonth)+1;
	var tamanoMes = 200/meses.length;
	var tamanoCirculo = 0.0;

		if(nivelTemporada < 1){
			tamanoCirculo = 0.1;	
		}else if(meses.length > 10){
			tamanoCirculo = 1.7;
		}else if(meses[0] == theMonth){
			tamanoCirculo = 2;		
		}else{
			
			tamanoCirculo = ((meses.length - nivelTemporada) * tamanoMes)/100;
		}
		
		if(tamanoCirculo > .1 && tamanoCirculo < .67){
			tamanoCirculo = 1;
		}else if(nivelTemporada == meses.length) {
				tamanoCirculo = .5;
			}else if(tamanoCirculo > 1.1 && tamanoCirculo < 1.5){
				tamanoCirculo = 1.51;
			}else if(tamanoCirculo > .7 && tamanoCirculo < .86){
				tamanoCirculo = .9;
			}			
	
	console.log("un texto " + nombre + " " + (tamanoCirculo*100)/100)


///////////


			


	function frame(){
		if (biggerMe == tamanoCirculo*100) {
			console.log("llego al tamaño " + nombre + " " + selfSize);
			clearInterval(animGrow);
			} else { 
				//console.log("habla" + selfSize)
				biggerMe++;
				console.log("habla lo que quieras " + nombre + " " + tamanoCirculo)
				circleFruit.style.transform = "scale(" + biggerMe/100 + ", " + biggerMe/100 + ")";
			}
	}	




			var onOff = 0;

			circleFruit.onclick = function() {

				onOff = 1
				// this.style.zIndex += 1; 

				var informacion = document.getElementById("fruitInfo");
				var animInfo = setInterval(frameInfo, 30);
				var informacionScale = 0.00;
				informacion.style.opacity =  "1";
				function frameInfo(){
							if(informacionScale == 10){
								clearInterval(animInfo);

							}else{
								informacionScale++;
								informacion.style.transform = "scale(" + informacionScale/10 + ", " + informacionScale/10 + ")";
							}
					}

				var	cuantosMeses = meses.length;


				informacion.style.backgroundColor = colorFruit;
				var interior = document.getElementById("recTrans");

				var infoName = document.getElementById("nameFruto");
				var infoVit = document.getElementById("vitaminas");
				var infoMinerales = document.getElementById("minerales");
				var infoQueMeses = document.getElementById("queMeses");

				infoName.innerHTML = nameFruit;
				infoVit.innerHTML = theVitaminas;
				infoMinerales.innerHTML = theMinerales;
				infoName.style.color = colorText;
				infoVit.style.color = colorText;
				infoMinerales.style.color = colorText;
				infoQueMeses.style.color = colorText;

				///////////////////////////

				var month = new Array();

				month[0] = "Ene";
			    month[1] = "Feb";
			    month[2] = "Mar";
			    month[3] = "Abr";
			    month[4] = "May";
			    month[5] = "Jun";
			    month[6] = "Jul";
			    month[7] = "Ago";
			    month[8] = "Sep";
			    month[9] = "Oct";
			    month[10] = "Nov";
			    month[11] = "Dic";
				

				////////////////////////////
				var delMes = month[meses[0]];
				var alMes = month[meses[meses.length-1]];

				infoQueMeses.innerHTML = delMes + " - " + alMes;
			

				if (onOff == 0) {

					console.log("im off");

				} else {
					document.onclick = function() {
						onOff = 0;
						
						console.log("aqui estamos test")



								informacion.style.transform = "scale(0.001, 0.001)";
								
							}
					}
								
				informacion.onclick = function() {
					var informacionScaleDown = informacionScale;
					var animInfo = setInterval(frameInfoClose, 1);
					function frameInfoClose(){
							if(informacionScaleDown == 1){
								clearInterval(animInfo);

							}else{
								informacionScaleDown--;
								informacion.style.transform = "scale(" + informacionScaleDown/10000 + ", " + informacionScaleDown/10000 + ")";
								informacion.style.opacity =  "0.3";
							}
					}
					
				};


				console.log(nameFruit + "  " + "que mas" + "  " + cuantosMeses);
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



var frutaCoco = new fruta(1, "Coco", [0, 1, 2], "coco.png", .1, "#874A1B", 100, "a, b1, b2, b3, b6, b9, c, e", "calcio fósforo magnesio hierro potasio zinc", "#EFF8E7");
var frutaPina = new fruta(1, "Piña", [0, 1, 2, 3, 4, 5, 6], "pina.png", .7, "#F7B616", 10, "b1, b2, b3, b5, b6, c", "hierro manganeso magnesio potasio zinc", "#442200");
var frutaMelon = new fruta(1, "Melón", [1, 2, 3, 4, 5, 6, 7, 8], "melon.png", 1, "#F69731", 40, "a, b1, b2, b3, b6, c, e, k", "calcio fósforo hierro magnesio potasio sodio zinc", "#442200");
var frutaGuanabana = new fruta(1, "Guanabana", [1, 2, 3], "guanabana.png", .1, "#536B1D", 80, "a, b, c", "calcio fósforo hierro potasio", "#EFF8E7");
var frutaMango = new fruta(1, "Mango", [2, 3, 4, 5, 6], "mango.png", 1, "#EBA829", 60, "a, b1, b2, b6, c, e", "potasio selenio magnesio yodo calcio zinc hierro", "#442200");
var frutaMamey = new fruta(1, "Mamey", [2, 3, 4, 5], "mamey.png", .5, "#D94027", 80, "a, b1, b2, b3, c", "calcio fósforo magnesio potasio", "#EFF8E7");
var frutaSandia = new fruta (1, "Sandía", [1, 2, 3, 4, 5, 6, 7], "sandia.png", 1, "#BE2326", 55, "a, b1, b2, b3, b6, c, e", "calcio fósforo hierro potasio", "#EFF8E7");
var frutaCereza = new fruta(1, "Cereza", [3, 4, 5, 6], "cereza.png", .8, "#8B181A", 40, "a, b12, b3, c", "fósforo magnecio", "#EFF8E7");
var frutaKiwi = new fruta(1, "Kiwi", [3, 4, 5], "kiwi.png", 1, "#A4A737", 25, "a, b, c, e,", "potasio magnesio calcio cobre", "#EFF8E7");
var frutaLichi = new fruta(1, "Lichi", [4, 5, 6], "lichi.png", 2, "#D9243D", 10, "b1, b2, b3, b5, c, k", "calcio cobre fósforo magnesio potasio zinc", "#EFF8E7");
var frutaCiruela = new fruta(1, "Ciruela", [4, 5, 6, 7], "ciruela.png", 2, "#461926", 40, "c, k", "potasio sorbitol", "#EFF8E7");
var frutaHigo = new fruta(1, "Higo", [4, 5, 6, 7], "higo.png", 2, "#33191D", 60, "a, b1, b2, b3, c", "potasio zinc magnesio hierro calcio fósforo", "#EFF8E7");
var frutaPera = new fruta (1, "Pera", [4, 5, 6, 7, 8, 9, 10, 11], "pera.png", 2, "#92A23A", 80, "a, b12, b3, c", "hierro calcio", "#EFF8E7");
var frutaDurazno = new fruta(1, "Durazno", [5, 6, 7, 8, 9], "durazno.png", .1, "#EE6B2F", 90, "a, c, e", "calcio fósforo potasio", "#EFF8E7");
var frutaUva = new fruta(1, "Uva", [5, 6, 7, 8, 9], "uva.png", .1, "#5A0B2A", 70, "a, b, c, e, k", "hierro potasio", "#EFF8E7");
var frutaFrambuesa = new fruta(1, "Frambuesa", [5, 6, 7, 8], "frambuesa.png", .1, "#B92125", 60, "a, b3, b12, c ", "calcio magnesio potasio", "#EFF8E7");
var frutaGranadaRoja = new fruta(1, "Granada Roja", [5, 6, 7, 8], "granadaroja.png", .1, "#DA1F28", 50, "b1, b2, c", "calcio fósforo hierro magnesio manganeso potasio", "#EFF8E7");
var frutaMora = new fruta(1, "Mora", [5, 6, 7, 8], "mora.png", .1, "#21142D", 40, "c, e", "calcio fósforo hierro potasio", "#EFF8E7");
var frutaTuna = new fruta(1, "Tuna", [6, 7, 8], "tuna.png", .1, "#85AF40", 30, "a, b2, b6, c, k", "fósforo potasio calcio", "#EFF8E7");
var frutaManzana = new fruta(1, "Manzana", [6, 7, 8, 9], "manzana.png", .1, "#8F0119", 40, "a, c", "hierro fósforo potasio calcio", "#EFF8E7");
var frutaGuayaba = new fruta(1, "Guayaba", [7, 8, 9, 10, 11, 0, 1], "guayaba.png", .1, "#EDD215", 50, "a, c", "potasio", "#442200");
var frutaGrocella = new fruta(1, "Grosella", [7, 8], "grocella.png", .1, "#C92026", 60, "a, c, e", "hierro potasio magnecio", "#EFF8E7");
var frutaLima = new fruta(1, "Lima", [8, 9, 10, 11], "lima.png", .1, "#C6D92D", 70, "a, b3, c", "calcio hierro", "#442200");
var frutaToronja = new fruta(1, "Toronja", [8, 9, 10, 11, 0, 1, 2, 3], "toronja.png", .1, "#E04132", 80, "a, b1, b2, b3, b5, b5, c, e", "potasio", "#EFF8E7");
var frutaNaranja = new fruta(1, "Naranja", [9, 10, 11, 0, 1, 2, 3], "naranja.png", .1, "#EE6322", 90, "a, b1, b6, c", "fósforo magnesio potasio", "#EFF8E7");
var frutaAguacate = new fruta(1, "Aguacate", [9, 10, 11, 0, 1, 2], "aguacate.png", .1, "#8EAD3D", 100, "a, b12, b3, c", "calcio hierro", "#EFF8E7");
var frutaMandarina = new fruta(1, "Mandarina", [9, 10, 11, 0, 1], "mandarina.png", .1, "#DF4A26", 120, "a, b1, b2, b3, b6, c", "hierro potasio", "#EFF8E7");
var frutaChicozapote = new fruta(1, "Chico- zapote", [9, 10, 11, 0], "chicozapote.png", .1, "#DD5337", 130, "a, b1, b2, b3, c", "calcio fosforo hierro", "#EFF8E7");
var frutaTejocote = new fruta(1, "Tejocote", [9, 10, 11, 0], "tejocote.png", .1, "#D9882F", 100, "a, c", "calcio hierro", "#EFF8E7");
var frutaZapote = new fruta(1, "Zapote", [10, 11, 0], "zapote.png", .1, "#CC5A27", 90, "a, b1, b2, b3, c", "calcio fósforo hierro", "#EFF8E7");
var frutaGranadaChina = new fruta (1, "Granada China", [10, 11, 0, 1], "granadachina.png", .1, "#DC7E27", 120, "a, b2, b3, b6, c, e, k ", "calcio fósforo hierro potasio sodio zinc", "#EFF8E7");
var frutaTamarindo = new fruta(1, "Tamarindo", [11, 0, 1, 2, 3], "tamarindo.png", .1, "#944825", 130, "a, b1, b2, b3, b6, b9, c, e", "calcio cobre fósforo hierro magnesio potasio sodio zinc", "#EFF8E7");
var frutaFresa = new fruta(1, "Fresa", [11, 0, 1, 2, 3], "fresa.png", .1, "#D22028", 150, "a, b, c, d, e, k", "potasio", "#EFF8E7");
var frutaPapaya = new fruta(1, "Papaya", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "papaya.png", 2, "#EF4623", 50, "a, c, e", "calcio fósforo hierro magnesio potasio", "#EFF8E7");
var frutaLimon = new fruta (1, "Limón", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "limon.png", 2, "#4E7B38", 40, "a, b1, b2, b3, b6, b12, d, e, c ", "azufre calcio cloro fósforo magnesio", "#EFF8E7");
var frutaPlatano = new fruta (1, "Plátano", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "platano.png", 2, "#EEB100", 30, "a, b1, b3, b6, c, e, k", "potasio magnesio fosforo calcio zinc", "#442200");




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


var x = document.getElementsByClassName("unaClase");
x.innerHTML = "aqui se acaba todo";


var infomodal = document.getElementById("infomodal");
var x = 1;
function showInfo(){
	if (x === 0) {
		infomodal.style.display = "none"
		x = 1
		// console.log(x)
	} else {
		// console.log("no se que")
		infomodal.style.display = "grid"
		x = 0
	}
}

document.getElementById('btninfo').onclick = function(){
	showInfo()
}



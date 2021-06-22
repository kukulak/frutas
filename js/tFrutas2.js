var x = "algo"
var date = new Date();
theMonth = date.getMonth();

// if (4 == theMonth  ){
// 	elmes = theMonth + 1;
// 	console.log("es mayo el numero " + elmes + " del año");
// }else{
// 	console.log("no es mayo pero esta chido");

// }


function fruta (nombre, meses, foto, sizeCircle) {
	this.nombre = nombre;
	this.meses = meses;
	this.foto = foto;
	this.sizeCircle = sizeCircle;


} 



fruta.prototype.myTemporada = function() {

	for (var i = 0; i < this.meses.length; i++) {
		var testMonth = this.meses[i]; 
		// console.log("este mes es " + testMonth);
		if(theMonth == testMonth){
			document.getElementById("leFruit").innerHTML = "Este mes es temporada de " + this.nombre + " " + this.meses[i];

			console.log("es el mes de la sandia " + this.meses[i]);
			break;
		}else{
			document.getElementById("leFruit").innerHTML = "Ya no hay frutas en el mundo " + this.meses[i];

console.log("estoy mal " + this.meses[i]);
		}



	};

}

var unArray = [1, 2, 3, 5, 6, 7, 8, 9] ;

var frutaPera = new fruta ("Pera", [4, 5, 6, 7, 8, 9, 10, 11], "pera.png", 100);
var frutaSandia = new fruta ("Sandia", [01, 02, 03, 04, 05, 06, 07], "sandia.png", 100);
var frutaGranadaChina = new fruta ("Granada China", [10, 11, 0, 1], "granadachina.png", 100);

// document.getElementById("leFruit").innerHTML = typeof frutaPera.nombre;

frutaPera.myTemporada();
//frutaSandia.myTemporada();
//frutaGranadaChina.myTemporada();

////////////////////


// var contador = 1

// function crearNodoHijo(nodoPadre, mensaje) {
// 	var nodoHijo = document.createElement("div");
// 	nodoHijo.className = "nuevoMensaje"
// 	nodoHijo.onclick = function(){unaFuncion(event);};
// 	var nodoTexto = document.createTextNode(mensaje);
// 	nodoHijo.appendChild(nodoTexto);

// 	nodoPadre.appendChild(nodoHijo);

// 	var abajo = document.getElementById("aquiLosTextos");

// 	contador = contador +1;

// 	function scrollMe(){
// 		var divTall = document.getElementById("aquiLosTextos").scrollHeight;

// 		document.getElementById("aquiLosTextos").scrollTop += divTall;


// 	}

// 	scrollMe()

// }

// crearNodoHijo(document.getElementById("aquiLosTextos"), x);
//////


document.getElementById("date").innerHTML = Date();




document.getElementById("date2").innerHTML = date.getMonth();

document.getElementById("unaSuma").innerHTML = theMonth + 13;




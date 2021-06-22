
var $divs = $("div.styleCircle");

$(window).load(function () {
    var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
        return $(a).find("h6").text() > $(b).find("h6").text();
        console.log("estoy en el final")
    });
    $("#leFruit").html(alphabeticallyOrderedDivs);
});





// Set up on DOM-ready
// $(function() {
  
    // Change this selector to find whatever your 'boxes' are
    var toMe = document.getElementsByClassName("leFruit");


    // Set up click handlers for each box
    toMe.onclick = function() {
    	
      console.log("pressed");
    };
// });






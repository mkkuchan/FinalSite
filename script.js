$(document).ready(function() {

homegrow ();

	function homegrow () {
		$(".oval1").delay (5000).animate({width: "700px", height: "auto"}, 3000)
		$(".oval2").delay (5000).animate({width: "650px", height: "auto"}, 3000);
		$(".oval1").animate({width: "600px", height: "auto"}, 3000)
		$(".oval2").animate({width: "550px", height: "auto"}, 3000, homegrow)
	}



$("#shadow").animate({width: "500px", height: "auto"}, 3000);

$("#shadow").delay(3000).animate({width: "300px", height: "auto"}, 3000);

	
     	
});




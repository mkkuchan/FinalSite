$(document).ready(function() {

homegrow ();

	function homegrow () {
		$(".oval1").delay (5000).animate({width: "650px", height: "auto"}, 3000)
		$(".oval2").delay (5000).animate({width: "600px", height: "auto"}, 3000);
		$(".oval1").animate({width: "600px", height: "auto"}, 3000)
		$(".oval2").animate({width: "550px", height: "auto"}, 3000, homegrow)
	}


$(".tuba").animate({width: "500px", height: "auto"}, 3000);
$(".baritone").animate({width: "500px", height: "auto"}, 3000);
$(".trombone").animate({width: "550px", height: "auto"}, 3000);
$(".tenor").animate({width: "450px", height: "auto"}, 3000);
$(".mello").animate({width: "500px", height: "auto"}, 3000);
$(".alto").animate({width: "500px", height: "auto"}, 3000);
$(".clarinet").animate({width: "400px", height: "auto"}, 3000);
$(".trumpet").animate({width: "550px", height: "auto"}, 3000);
$(".flute").animate({width: "500px", height: "auto"}, 3000);
$(".piccolo").animate({width: "500px", height: "auto"}, 3000);
$(".drumline").animate({width: "500px", height: "auto"}, 3000);
$(".pit").animate({width: "500px", height: "auto"}, 3000);
$(".colorguard").animate({width: "500px", height: "auto"}, 3000);
$(".twirler").animate({width: "400px", height: "auto"}, 3000);

$("#shadow").delay(3000).animate({width: "500px", height: "auto"}, 3000);

fade ();

	function fade () {	 
	 
	 $(".des").fadeOut(1)
	 $(".story").fadeOut(1);
	 $(".story").delay(3000).fadeIn(2500)
     $(".des").delay(5000).fadeIn(2500);  
     
     }
     	
});




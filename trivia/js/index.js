//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;

$(document).ready(function () {

	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function () {

		setTimeout(function () {

			var random = Math.floor((Math.random() * 360));
			if (0 <= random && random && random < 30) {
				document.getElementById("1").className = "card bg-light text-black text-center p-3 animated infinite bounce";
				console.log(random + "hujubjbkj");
			}
			else if (30 <= random && random < 60) {
				document.getElementById("2").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
			else if (60 <= random && random < 90) {
				document.getElementById("3").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
			else if (90 <= random && random < 120) {
				document.getElementById("4").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
			else if (120 <= random && random < 150) {
				document.getElementById("5").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
			else if (150 <= random && random < 180) {
				document.getElementById("6").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
			else if (180 <= random && random < 210) {
				document.getElementById("7").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
			else if (210 <= random && random < 240) {
				document.getElementById("8").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
			else if (240 <= random && random < 270) {
				document.getElementById("9").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
			else if (270 <= random && random < 300) {
				document.getElementById("10").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
			else if (300 <= random && random < 330) {
				document.getElementById("11").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
			else if (330 <= random && random < 360) {
				document.getElementById("12").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
			else {
				document.getElementById("4").className = "card bg-light text-black text-center p-3 animated infinite bounce";
			}
		}, 6000);

		//add 1 every click
		clicks++;

		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
		var newDegree = degree * clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree + extraDegree;

		/*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
		var cn = 0;
		$('#wheel .sec').each(function () {
			var t = $(this);
			var noY = 0;

			var c = 0;
			var n = 700;
			var interval = setInterval(function () {
				c++;
				if (c === n) {
					clearInterval(interval);
				}

				var aoY = t.offset().top;
				$("#txt").html(aoY);
				//console.log(aoY);

				/*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn*/
				if (aoY < 23.89) {
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () {
						$('#spin').removeClass('spin');
					}, 100);
				}
			}, 10);

			$('#inner-wheel').css({
				'transform': 'rotate(' + totalDegree + 'deg)'
			});

			noY = t.offset().top;

		});
	});



});//DOCUMENT READY
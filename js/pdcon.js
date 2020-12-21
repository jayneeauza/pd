$(document).ready(function() {
	w3.includeHTML();

	$(window).scroll(function(evnt) {
		var scroll = $(window).scrollTop();
		if (scroll == 100) {
			document.getElementById("pd-nav").style.top = "0";
		}
		else if (scroll >= 200 && scroll <= 999) {
			document.getElementById("pd-nav").style.top = "0";
			$(".pd-row-2").animate({
				opacity:'1'
			});
		}
		else if (scroll >= 1000 && scroll <= 1499) {
			document.getElementById("pd-nav").style.top = "0";
			$(".pd-row-3 > .pd-clmn").animate({
				top:'0px',
				opacity:'1'
			});
		}
		else if (scroll >= 1500 && scroll <= 4000) {
			document.getElementById("pd-nav").style.top = "0";
			$(".pd-row-4").animate({
				opacity:'1'
			});
		}
		else {
			$(".pd-row-2").css("opacity", "0");
			$(".pd-row-4").css("opacity", "0");
			$(".pd-row-3 > .pd-clmn").css("top", "100px");
			document.getElementById("pd-nav").style.top = "-80px";
		}
	});

	$("#pd-hnav .cl-pd-nav a").click(function() {
/*		if(this.hash!=="") {
			event.preventDefault();
			var h = this.hash;
			$('html, body').animate({
				scrollTop:$(hash).offset().top
			}, 1000, function (){
				window.location.hash=h;
			});
		}*/
			this.hash;
	});

	$("#divindx #pd-mnav").click(function() {
		$("#pd-hnav").fadeIn("fast");
	});

	$("#pd-hnav .cl-pd-nav .cl-nav-li").click(function() {
		$("#pd-hnav").fadeOut("fast");
	});
});
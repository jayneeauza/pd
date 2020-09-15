$(document).ready(function() {
	w3.includeHTML();
});

$(window).scroll(function(evnt) {
	var scroll = $(window).scrollTop();
	if (scroll >= 200 && scroll <= 999) {
		document.getElementById("divnav").style.top = "0";
		$(".pd-row-2").animate({
			opacity:'1'
		});
	}
	else if (scroll >= 1000 && scroll <= 1499) {
		document.getElementById("divnav").style.top = "0";
		$(".pd-row-3 > .pd-clmn").animate({
			top:'0px',
			opacity:'1'
		});
	}
	else if (scroll >= 1500 && scroll <= 2000) {
		document.getElementById("divnav").style.top = "0";
		$(".pd-row-4").animate({
			opacity:'1'
		});
	}
	else {
		document.getElementById("divnav").style.top = "-80px";
	}
});

// window.onscroll = function() {fncscroll()};
// function fncscroll() {
// 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// 		document.getElementById("divnav").style.top = "0";
// 	}
// 	else {
// 		document.getElementById("divnav").style.top = "-80px";
// 	}
// }
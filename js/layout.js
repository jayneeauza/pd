$(document).ready(function() {
	w3.includeHTML();
});

window.onscroll = function() {fncscroll()};

function fncscroll() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("divnav").style.top = "0";
	} else {
		document.getElementById("divnav").style.top = "-80px";
	}
}
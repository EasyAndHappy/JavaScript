
window.onload = function() {
	var oBack = document.getElementById("back");

	alert(oBack)
	oBack.onclick = function() {
		history.go(-1);
	}
};
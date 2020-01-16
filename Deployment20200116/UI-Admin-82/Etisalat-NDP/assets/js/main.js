largeMenuFlag = true;
var largeMenu = document.getElementsByClassName("sidemenu-large")[0];
var pageContent = document.getElementsByClassName("page-content")[0];
var sideMenuTitle = document.querySelectorAll(".sidemenu-link-title");

function toggleMenu() {

	largeMenuFlag = !largeMenuFlag;

	console.log(largeMenuFlag)

	if (largeMenuFlag == false) {
		for (var i = 0; i < sideMenuTitle.length; i++) {
			sideMenuTitle[i].classList.add("hide");
		}
		pageContent.classList.add("sidemenu-active");
		largeMenu.classList.add("hide");
		largeMenu.classList.remove("show");

	}

	else if (largeMenuFlag == true) {
		pageContent.classList.remove("sidemenu-active");
		largeMenu.classList.add("show");
		largeMenu.classList.remove("hide");
		for (var i = 0; i < sideMenuTitle.length; i++) {
			sideMenuTitle[i].classList.remove("hide");
		}

	}

}

function openNav() {
	console.log("page content is =>" , pageContent);
	document.getElementById("groupsSideMenu").style.display = "block";
	//pageContent.classList.add("groups-sidemenu-active");
}

function closeNav() {
	document.getElementById("groupsSideMenu").style.display = "none";
	//pageContent.classList.remove("groups-sidemenu-active");
}

// window.onload = function () {
// 	var groupsSideMenu = document.getElementById('groupsSideMenu');
// 	document.onclick = function (e) {
// 		if (e.target.id !== 'groupsSideMenu') {
// 			groupsSideMenu.style.display = 'none';
// 		}
// 	};
// };


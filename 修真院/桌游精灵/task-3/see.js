window.onload =function() {

	//返回
	 document.getElementById("back").onclick = function() {
	 	history.go(-1)
	 };


	var role= localStorage.getItem("role")

	//把字符串对象转换为JSON数据
	var playerRole = JSON.parse(role);
	console.log(playerRole);
	
	var oShowInput = document.getElementById("show_identity");
	// var ohideInput = document.getElementById("hide_identity");
	var showCover = document.getElementById("show_cover");
	var showOpen = document.getElementById("show_open");
	var oPlayNum = document.getElementById("player_num");
	var oExplain = document.getElementById("explain");
	var oRole = document.getElementById("role");

	// var aShowSpan = oShowInput.getElementsByTagName("span")[0];
	// var aHideSpan = ohideInput.getElementsByTagName("span")[0];
//查看传递
	
	var bFound;
	var i = 0;

	var  iSave;//保存变量
	function playIdentity() {

		if (i < playerRole.length) {
			if (!bFound) {
				oRole.innerHTML = "角色：" + playerRole[i]; //在变量i++ 前获取值;
				
				i++;

				showCover.style.display = "none"
				showOpen.style.display = "block";
				oExplain.style.display = "block";

				oShowInput.innerHTML = "查看并传递给" + (i + 1) + "号";
				
				iSave = i + 1;
				bFound = true;
			}else {	 
				showCover.style.display = "block";
				showOpen.style.display = "none";
				oExplain.style.display = "none";

				oShowInput.innerHTML = "查看" + iSave + "身份";	
				oPlayNum.innerHTML = iSave;
				bFound = false;	
			}
		}
		//判断是否到最后一个了。
		if (oShowInput.innerHTML === "法官查看") {
		//sessionStorage方法保存数据
			// var  b = sessionStorage.setItem("item", JSON.stringify(playerRole)) 
			var b = JSON.stringify(playerRole)
			sessionStorage.setItem("item", b);
			console.log(b);
			window.location.href = "judge.html" 
		}else if (playerRole.length < iSave) { 
			oShowInput.innerHTML = "法官查看";
		}
	};


   document.body.onclick = function init(ev) {

   		var oEvent = ev || event;
   	    if (oEvent.target === oShowInput) {
   	    	playIdentity();
   	    }

   };


	

	//删除保存的数据
	// localStorage.removeItem("role");


};



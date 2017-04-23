
window.onload = function() {
	var oBack = document.getElementById("back");
	var oStart = document.getElementById("start");
	var oSetUp = document.getElementsByTagName("td")[2]
	var oTxt = document.getElementById("txt");
	var oNum = document.getElementById("num");
	var aSp = oNum.getElementsByTagName("span");
	var foo = null;

	oBack.onclick = function() {
		history.go(-1);
	}


	function inputValue(num) {
		var reg = /\d+/;
		var oTxt = document.getElementById("txt")
		if (num === "") {
			if (confirm("请输入数字"));{
				num = "";
			}
			return false
		}else if (!reg.test(num)) {
			if (confirm("不是数字，请重新输入")) {
				num = ""
			}
			return false;
		}else if(reg.test(num) && (num < 6 || num > 18)) {
			if (confirm("只能输入6 -- 18的数字")) {
				oTxt.value = "";
			}
			return false 
		}
		// alert("suurse")
		return true;
	}

	function setPerson(num) {
		var killer = [];
		var farmers = [];
		if (inputValue(num)) {
			if (num >= 6 && num < 9) {
				killer.length = 1;
			}else if (num >= 9 && num < 12) {
				killer.length = 2;
			}else if (num >= 12 && num < 16) {
				killer.length = 3;
			}else if (num >= 16 && num < 18) {
				killer.length = 4;
			}

			for (var i = 0; i < killer.length; i++) {
				killer[i] = "杀手";
			}

			for (var j = 0; j < num - killer.length; j++) {
				farmers[j] = "农民";
			}
		}

		//杀手和农民的集合
		var sumArr = killer.concat(farmers)
		console.log(sumArr);
		setGame(sumArr);

	}

	//排序随机排序

	function randomSort(arr) {
		if (arr instanceof Array) {
			// //第一种随机排序方法
			// var sortAfter = arr.sort(function(a, b) { 
			// 	return Math.random() > 0.5 ? -1 : 1
			// });
			// 第二种
			var res = [];
			for (var i = 0, len = arr.length; i < len; i++) {
				var j = Math.floor(Math.random() * arr.length);
				res[i] = arr[j];
				arr.splice(j , 1);
			}
			return res;
		}
		// return sortAfter
	}

	function setGame(arr) {
		var oUl = document.getElementsByTagName("ul")[0];
		oUl.innerHTML = "";
		var afterSort = randomSort(arr)

		//储存随机数分配的角色， 在下一个网页利用
		foo = JSON.stringify(afterSort);  
		// localStorage.setItem("role", JSON.stringify(afterSort));
		localStorage.setItem("role", foo);
		// console.log(foo)

	
	
		console.log(afterSort);
		var numArr = ["一","二","三","四","五"
		,"六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八"];

		for (var i = 0; i < afterSort.length; i++) {
			var aLi = document.createElement("li"); //createTextNode("html标签会直接显示")
			if (afterSort[i] === "杀手") {
				aLi.style.color = "orange"
				aLi.innerHTML = "<p>第" + numArr[i] + "号" + afterSort[i] + "</p>";
			}else {
				aLi.style.color = "#29bde0";
				aLi.innerHTML = "<p>第" + numArr[i] + "号" + afterSort[i] + "</p>";
			}
			oUl.appendChild(aLi);
		}
	
	};
 
  //range 
      var oRange = document.getElementById("range")
      //console.log(oRange)
      oRange.addEventListener("change", function() {
      		oTxt.value = this.value
      		this.style.backgroundSize = this.value;
      });

// + - 按钮
 

	aSp[0].onclick = function() {
		if (inputValue(oTxt.value)) {
			
			var oldValue = parseInt(oTxt.value) - 1;
			if (oldValue > 5) {
				oTxt.value = oldValue
				oRange.value= oldValue;
				
			}else {
				alert("最少需要6个玩家");
			}
		}
	};

	aSp[1].onclick = function() {
		if (inputValue(oTxt.value)) {
		
			var oldValue = parseInt(oTxt.value) + 1;
			if (oldValue < 19) {
				oTxt.value = oldValue;
				oRange.value= oldValue;
			}else {
				alert("玩家最多不能超过18人");
			}
		}
	};
 
 //输入值时改变时，改变type="range"滑块的位置

    oTxt.onchange = function() {
    	oRange.value = this.value;
    };


	oSetUp.onclick = function() {
		var oTxtValue =document.getElementById("txt").value;
	
		setPerson(oTxtValue);
	};


//传递到查看角色页面
 	var oStart = document.getElementById("start");
 	oStart.onclick = function() {
 	
 		if (foo !== null) {
 			window.location = "../task-3/see.html";
 		}else {
 		  alert("请设置玩家")
 		}
 		
 	}
		// localStorage.removeItem("role");
		// localStorage.role = "";
		


};

// function setPerson(num) {
// 	var killer, farmers;
// 		if (num >= 6 && num < 9) {
// 				killer= 1;
// 			}else if (num >= 9 && num < 12) {
// 				killer = 2;
// 			}else if (num >= 12 && num < 16) {
// 				killer = 3;
// 			}else if (num >= 16 && num < 18) {
// 				killer = 4;
// 			}

// 		//农民个数
// 		farmers = num - killer;
// };

// //添加杀手和农民
// function setGame(killer, farmers) {

// 	var oUl = document.getElementById("ul");

//  //添加杀手
// 	for (var i = 0; i < killer; i++) {
// 		var aLi = document.createElement("li");
// 		aLi.innerHTML = "杀手"；
// 		oUl.appendChild(aLi);
// 	}
// //添加农民
//   for (var i = 0; i < farmers) {
//   	var aLi = document.createElement("li");
// 		aLi.innerHTML = "农民"；
// 		oUl.appendChild(aLi);
//   }

//   //获取添加后的所有li元素
//   var newLi = oUl.getElementsByTagName("li");

//   //随机数组排序

//   var arr = newLi.sort(function(a, b) {
//   	return Math.random() > 0.5 ? 1 : -1;
//   });
// }；
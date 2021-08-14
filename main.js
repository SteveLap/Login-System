var state= false;
function ShowOrHide(){
	if(state){
		document.getElementById("password").setAttribute("type","password");
		document.getElementById("eye").style.color='#493892';
		state = false;
	}
	else{
		document.getElementById("password").setAttribute("type","text");
		document.getElementById("eye").style.color='#ffffff';
		state = true;
	}
}

/*Login Data*/
const BtnLog = document.getElementById("login");

const outputPanel = document.querySelector("#output_panel");

// outputLoginData();
BtnLog.addEventListener ("click", function loginSystem(){
	let loginDatabase = JSON.parse(localStorage.getItem('userList'));
	const loginEmail = document.getElementById("loginEmail").value;
	const password = document.getElementById("loginPassword").value;
	let htmlContent;
	for (let n = 0; n < loginDatabase.length; n++) {
		if(loginEmail == loginDatabase[n].email){
			if (password == loginDatabase[n],password){
				location.href = 'login_success.html';
			} else {
				htmlContent = "<p>The password is wrong!</p>"
			}
		} else {
			htmlContent = "<p>Your email is wrong!</p>"
		}
	}
	outputPanel.innerHTML = htmlContent;
})
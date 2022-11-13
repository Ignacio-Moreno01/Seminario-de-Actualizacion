function getFormValues()
{
	let validateFormData =
	{
		username: null,
		password: null
	};

	validateFormData.username = document.getElementById('usernameInput').value;
	validateFormData.password = document.getElementById('passwordInput').value;

	

	return validateFormData;
}

function onValidateUserButtonClick()
{
	//console.log(JSON.stringify(getFormValues()));
	fetch('./login.php', { method:'post', body: JSON.stringify(getFormValues()) } ).then( response => response.json() ).then( response => { alert(response.description)} );
	
}

let validateUserButton = document.getElementById('validateUserButton').addEventListener('click', ()=>onValidateUserButtonClick() );
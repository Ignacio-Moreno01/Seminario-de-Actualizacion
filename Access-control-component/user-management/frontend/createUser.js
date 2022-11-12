let createUserButton = document.getElementById("createUserButton");

function getFormValues()
{
	let createFormData =
	{
		username: null,
		password: null
	};

	createFormData.username = document.getElementById('usernameInput').value;
	createFormData.password = document.getElementById('passwordInput').value;
	return createFormData;
}

function onCreateUserButtonClick()
{
	fetch('./create-secured.php', { method:'post', body: JSON.stringify(getFormValues()) } ).then( response => response.json() ).then( response => { alert(response.description)} );
}

document.getElementById('createUserButton').addEventListener('click', ()=>onCreateUserButtonClick() );
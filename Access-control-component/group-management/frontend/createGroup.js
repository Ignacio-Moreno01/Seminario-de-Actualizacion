let createGroupButton = document.getElementById("createGroupButton");

function getFormValues()
{
	let createFormData =
	{
		username: null,
		password: null
	};

	createFormData.username = document.getElementById('groupnameInput').value;
	createFormData.password = document.getElementById('passwordInput').value;
	return createFormData;
}

function onCreateUserButtonClick()
{
	fetch('./create-secured.php', { method:'post', body: JSON.stringify(getFormValues()) } ).then( response => response.json() ).then( response => { alert(response.description)} );
}

document.getElementById('createGroupButton').addEventListener('click', ()=>onCreateUserButtonClick() );
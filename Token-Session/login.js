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

function getSessionToken()
{
	let authData =
	{
		token: window.sessionStorage.getItem('token')
	};
	return authData;
}

function welcomeView( data )
{
	if ( data.status == 'OK')
	{
		alert('Bienvenido al sistema usuario: '+data.response );
		window.sessionStorage.setItem('token', data.response );
		document.getElementById('userBtnList').disabled = false;
	}
	else
	{
		alert('ERROR: '+data.description);
	}
}

function UserListView(data)
{
	if ( data.status == 'OK')
	{
		alert('Lista de usuarios: '+data.response );
	}
	else
	{
		alert('ERROR: '+data.description);
	}
}

function onValidateUserButtonClick()
{
	//console.log(JSON.stringify(getFormValues()));
	fetch('./login.php', { method:'post', body: JSON.stringify(getFormValues()) } )
	.then( response => response.json() )
	.then( response => { welcomeView(response) } );
}

function onGetUsersList()
{
	//console.log(JSON.stringify(getFormValues()));
	fetch('./listarUsuarios.php', { method:'post', body: JSON.stringify(getSessionToken()) } )
	.then( response => response.json() )
	.then( response => { welcomeView(response) } );
}

let validateUserButton = document.getElementById('validateUserButton').addEventListener('click', ()=>onValidateUserButtonClick() );
let userBtnList = document.getElementById('userBtnList').addEventListener('click', ()=>onGetUsersList() );
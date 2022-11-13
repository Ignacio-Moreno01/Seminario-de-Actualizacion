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

function welcomeView( data )
{
	if ( data.status == 'OK')
	{
		alert('Bienvenido al sistema usuario: '+data.response );
	}
	else
	{
		alert('ERROR: '+data.description);
	}
}

function welcomeView2( data )
{
	document.body.innerHTML = '<h4>Hola</h4>';
}

function onValidateUserButtonClick()
{
	//console.log(JSON.stringify(getFormValues()));
	fetch('./login.php', { method:'post', body: JSON.stringify(getFormValues()) } )
	.then( response => response.json() )
	.then( response => { welcomeView2(response) } );
}

let validateUserButton = document.getElementById('validateUserButton').addEventListener('click', ()=>onValidateUserButtonClick() );
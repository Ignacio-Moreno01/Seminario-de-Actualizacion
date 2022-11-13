let container = document.createElement('div');
container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
container.style.maxWidth ='600px';

let loginImage = document.createElement('img');
loginImage.src = 'img_avatar4.png';
loginImage.classList.add('w3-circle', 'w3-margin-top');
loginImage.alt = 'Avatar';
loginImage.style.width = '30%';

let loginForm = document.createElement('form');
loginForm.classList.add("w3-container", "w3-section");
//loginForm.action = "/action_page.php";

let userNameLabel = document.createElement('label');
userNameLabel.innerText = 'Username';
userNameLabel.style.fontWeight = 'bold';

let userNameInput = document.createElement('input');
userNameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
userNameInput.placeholder = "Enter Username";
userNameInput.setAttribute('required','true');

let passwordLabel = document.createElement('label');
passwordLabel.innerText = 'Password';
passwordLabel.style.fontWeight = 'bold';

let passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
passwordInput.placeholder = "Enter Password";
passwordInput.setAttribute('required','true');

loginForm.appendChild(userNameLabel);
loginForm.appendChild(userNameInput);
loginForm.appendChild(passwordLabel);
loginForm.appendChild(passwordInput);

let loginButton = document.createElement('button');
loginButton.innerText = 'Login';
loginButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");

let rememberInputCheckbox = document.createElement('input');
rememberInputCheckbox.type = 'checkbox';
rememberInputCheckbox.classList.add("w3-check", "w3-margin-top");
rememberInputCheckbox.placeholder = "Enter Password";
rememberInputCheckbox.setAttribute('checked','checked');
rememberInputCheckbox.innerText = 'Remember me';

loginForm.appendChild(loginButton);
loginForm.appendChild(rememberInputCheckbox);

container.appendChild(loginImage);
container.appendChild(loginForm);

document.body.appendChild(container);
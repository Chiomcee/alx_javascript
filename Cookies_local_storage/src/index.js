function setCookies() {
    const firstNameinput = document.getElementById('firstname');
    const emailinput = document.getElementById('email');
    document.cookie = 'firstname=${firstNameinput.value}';
    document.cookie = 'email=${emailinput.value}';
}

function showCookies() {
    const cookies = document.cookie.spilit(';');
    const cookiesElement =document.createElement('p');

    cookiesElement.innerHTML = 'Cookies: ' + cookies.join(', ');

    document.body.appendChild(cookiesElement);
}
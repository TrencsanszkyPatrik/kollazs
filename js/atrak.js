var felhasznalonev2 = sessionStorage.getItem('username'); var jelszo2 = sessionStorage.getItem('password');
var felhasznalonev = localStorage.getItem('username'); var jelszo = localStorage.getItem('password');

if (felhasznalonev != null && jelszo != null) { 
    sessionStorage.setItem('username', felhasznalonev)
    sessionStorage.setItem('password', jelszo)
    }
function atrak(){
    localStorage.setItem('username', felhasznalonev2)
    localStorage.setItem('password', jelszo2)
}

function vasarlas(){
    alert('Sikeres vásárlás');
    window.open('fooldal.html', '_self');
}
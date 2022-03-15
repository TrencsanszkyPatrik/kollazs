var nev = localStorage.getItem('username')
var jelszo = localStorage.getItem('password')


function reg(name, pass, pass2) {
    if (localStorage.getItem('regisztralva') != "igen") {

        if (pass == pass2) {
            localStorage.setItem('username', name)
            localStorage.setItem('password', pass)
            localStorage.setItem('regisztralva', 'igen')
        }
        else if (pass != pass2) {
            alert("Nem egyezik a két jelszó")
        }
    }
    else {
        alert("Már regisztráltál egyszer. Jelentkezz be!")
    }
}


function log(name, pass){
    if (nev == name && jelszo == pass){
        alert("Sikeres bejelentkezés")
        window.open('fooldal.html', "_self")
    } else {
        alert('Hiányzó adatok!')
    }
}


function elfelejtett(){
    alert('Felhasználó neved: ' + nev + '\nJelszavad: ' + jelszo)
}

function torles() {
    localStorage.clear()
}


var xy = document.getElementById("log");
var yx = document.getElementById("reg");

function asd() {
    xy.style.display = "block";
    yx.style.display = "none";
}

function asd2() {
    xy.style.display = "none";
    yx.style.display = "block";
}
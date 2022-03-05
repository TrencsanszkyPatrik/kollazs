function elfelejtett() {
    key = localStorage.key(0);
    jelszo = localStorage.getItem(key);

    if (key == null && jelszo == null) {
        alert("Ezen a gépen nincs aktív felhasználó!")
    }
    else {
        alert("Felhasználónév: " + key + "\nJelszó: " + jelszo)
    }
}

function reg(user, pass, pass2) {
    key = localStorage.key(0);
    jelszo = localStorage.getItem(key);
    if (user != "" && pass != "" && pass2 != "") {
        if (pass == pass2) {
            alert("Sikeresen regisztráltál!")
            localStorage.setItem(user, pass);
        }
        else {
            alert("Nem egyezik meg a két jelszó")
        }
    }
    else {
        alert("Helytelen felhasználó!")
    }

}

function log(user, pass) {

    key = localStorage.key(0);
    jelszo = localStorage.getItem(key);


    if (user == key && pass == jelszo) {
        alert("Sikeresen beléptél!")
        window.open('https://trencsanszkypatrik.github.io/kollazs')

        let new_window =
            open(location, '_self');

        new_window.close();

        return false;
    } else if (user == key && pass != jelszo) {
        alert("Helytelenül adtad meg jelszavad!")
    } else if (user != key && pass == jelszo) {
        alert("Helytelenül adtad meg felhasználónevet!")
    } else if (user == "" && pass == "") {
        alert("Add meg a hiányzó adatokat!")
    }
    else {
        alert("Mindkét adatot helytelenül adtad meg!")
    }

    // alert(key);
    // alert(localStorage.getItem(key))
}

function torles() {
    localStorage.clear()
}

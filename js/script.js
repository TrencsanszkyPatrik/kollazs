var felhasznalonev = localStorage.getItem('username'); var jelszo = localStorage.getItem('password');

if (felhasznalonev != null && jelszo != null) { 
sessionStorage.setItem('username', felhasznalonev)
sessionStorage.setItem('password', jelszo)
}
function torleees(){
localStorage.clear('username'); localStorage.clear('password');
}

var NikeDunkLow = 150000;
var Air_Jordan_4_Retro = 250000;
var Adidas_Yeezy_Slide_Glow = 100000;
    


    function kosarba(termek) {
        db = Number(prompt('Hány darabot akarsz?'))
        localStorage.setItem(termek, db)
    }
    
    function torles(){
        localStorage.clear()
    }
    
    function kosar(){
        var list = "<tr><th>Termék neve: </th><th>darabszáma: </th><th>Ára: </th></tr>\n"
    
        var ossz = 0;
        var darab = 0;
        var key = "";
    
    
        for (var i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            darab = parseInt(localStorage.getItem(key));
            list += "<tr><td>" + key + "</td><td>" + darab + "</td>" + "</td><td>" + (window[key] * darab) + " Ft" + "</td><td>" + "<button style=\"width:100%; background-color:red\" onclick='RemoveItem(\"" + key + "\")'>Törlés</button>" + "</td></tr>";

            ossz += window[key] * darab;
        }
    
        list += "<tr> <th>Összesen: </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>"
        
    document.getElementById('table').innerHTML = list
    }


    function RemoveItem(item) {
        localStorage.removeItem(item)
    }




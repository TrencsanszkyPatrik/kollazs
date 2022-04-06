var cipo1 = 150000;
var cipo2 = 250000;
var cipo3 = 100000;

function kosarba(termek) {
    db = Number(prompt('Hány darabot akarsz?'))
    localStorage.setItem(termek, db)
}

function torles(){
    localStorage.clear()
}

function kosar(){
    var lista = " "
    var term = localStorage.key(1)
    lista += "<tr> <th>Név</th><th>Darab</th><th>Ár</th>  </tr>"
    lista += "<tr> <td>" + term + "</td><td>" + 1 + "</td><td>" + cipo1 +"</td></tr>"
    lista += "<tr> <td>Cipő 2</td><td>1</td><td>250000</td>  </tr>"
    lista += "<tr> <td>Cipő 3</td><td>0</td><td>0</td>  </tr>"

    document.getElementById('table').innerHTML = lista
    
    }